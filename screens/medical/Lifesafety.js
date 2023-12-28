import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { Icon } from 'react-native-elements'; // 引入 Icon
// import { image } from '../../components/imagesmall';
const LocationScreen = () => {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [homeLocation, setHomeLocation] = useState({ latitude: 0, longitude: 0 });
  const [distance, setDistance] = useState(null);
  const [walkingTime, setWalkingTime] = useState(null);

  useEffect(() => {
    // 請求前景定位權限
    requestLocationPermission();

    // 設置家的位置，這裡假設家的經緯度為 {家的緯度, 家的經度}
    setHomeLocation({ latitude: 12.3456, longitude: 78.9123 });
  }, []);

  const requestLocationPermission = async () => {
    try {
      const { status } = await requestForegroundPermissionsAsync();

      if (status === 'granted') {
        getCurrentLocation();
      } else {
        console.warn('Location permission denied');
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const getCurrentLocation = async () => {
    try {
      const location = await getCurrentPositionAsync({ accuracy: 6 });
      const { latitude, longitude } = location.coords;
      setCurrentRegion({
        latitude,
        longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });

      // 計算距離
      const calculatedDistance = calculateDistance(latitude, longitude);
      setDistance(calculatedDistance);

      // 計算行走時間
      const walkingSpeed = 1.87; // 行走速度（每小時5公里）
      const walkingTimeInHours = calculatedDistance / walkingSpeed;
      setWalkingTime(walkingTimeInHours.toFixed(2));
    } catch (error) {
      console.warn(error);
    }
  };

  const calculateDistance = (currentLatitude, currentLongitude) => {
    const { latitude: homeLatitude, longitude: homeLongitude } = homeLocation;

    const distanceInMeters = haversineDistance(
      currentLatitude,
      currentLongitude,
      homeLatitude,
      homeLongitude
    );

    // 將距離轉換為公里
    const distanceInKm = distanceInMeters / 1000;

    return distanceInKm.toFixed(2);
  };

  const haversineDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // 地球半徑（公里）
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance;
  };

  const toRad = (value) => (value * Math.PI) / 180;

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon
          name="settings"
          type="material"
          color="#888"
          size={40}
          onPress={() => {
            // 處理按下齒輪圖示的事件
          }}
        />
      </View>
      {currentRegion ? (
        <MapView
          style={styles.map}
          initialRegion={currentRegion}
          showsUserLocation
        >
          <Marker
            coordinate={{
              latitude: currentRegion.latitude,
              longitude: currentRegion.longitude,
            }}
            title="Your Location"
          />
          <Marker
            coordinate={{
              latitude: homeLocation.latitude,
              longitude: homeLocation.longitude,
            }}
            title="Home"
          />
        </MapView>
      ) : (
        <Text>加載中...</Text>
      )}

      {distance && (
        <Text style={styles.distanceText}>距離家裡: {distance} 公里</Text>
      )}

      {walkingTime && (
        <Text style={styles.walkingTimeText}>已出門: {walkingTime} 小時</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  distanceText: {
    marginTop: 10,
    fontSize: 40,
  },
  walkingTimeText: {
    marginTop: 10,
    fontSize: 40,
  },
  headerContainer: {
    flexDirection: 'row',
    // position: 'absolute',
    // top: 10,
    right: -190,
    // zIndex: 1,
  },
});

export default LocationScreen;
