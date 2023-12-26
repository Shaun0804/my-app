import React, { useRef, useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text,Image} from 'react-native';
import { Video } from 'expo-av';
import { Audio } from 'expo-av';
import {buttonImage} from '../../components/buttonImage';
import {image} from '../../components/imagesmall'

const VideoPlayerScreen = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0);
  const [isButtonPressed, setIsButtonPressed] = useState(false);


  const handlePlayPause = async () => {
    if (videoRef.current) {
      if (isPlaying) {
        await videoRef.current.pauseAsync();
      } else {
        await videoRef.current.playAsync();
      }

      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeUp = async () => {
    if (videoRef.current) {
      const currentVolume = await videoRef.current.getVolumeAsync();
      const newVolume = Math.min(1.0, currentVolume + 0.1);
      await videoRef.current.setVolumeAsync(newVolume);
      setVolume(newVolume);
    }
  };

  const handleVolumeDown = async () => {
    if (videoRef.current) {
      const currentVolume = await videoRef.current.getVolumeAsync();
      const newVolume = Math.max(0.0, currentVolume - 0.1);
      await videoRef.current.setVolumeAsync(newVolume);
      setVolume(newVolume);
    }
  };
  const handleButtonPressIn = () => {
    setIsButtonPressed(true);
    // 在這裡執行按下按鈕時的相應邏輯
  };

  const handleButtonPressOut = () => {
    setIsButtonPressed(false);
    // 在這裡執行鬆開按鈕時的相應邏輯
  };

  useEffect(() => {
    handlePlayPause(); // 在進入頁面時自動撥放
    return async () => {
      if (videoRef.current) {
        await videoRef.current.stopAsync(); // 組件卸載時停止撥放
      }
    };
  }, []); // 空的依賴陣列表示只在初次渲染時執行

  return (
    <View style={styles.container}>
      {/* <Image
          source={require('../../assets/images/assistant.png')}
          style={image}
        /> */}
      <Video
        ref={videoRef}
        source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
        style={styles.video}
        useNativeControls={false}
        isMuted={false}
      />

      <View style={styles.controlsContainer}>
        
        <TouchableOpacity style={styles.controlButton} onPress={handleVolumeDown}>
          <Text style={styles.controlButtonText}><Image
          source={require('../../assets/images/down.png')}
          style={buttonImage}
        /></Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.controlButton} onPress={handlePlayPause}>
          <Text style={styles.controlButtonText}>{isPlaying ? <Image
          source={require('../../assets/images/play.png')}
          style={buttonImage}
        /> : <Image
        source={require('../../assets/images/pause.png')}
        style={buttonImage}
      />}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlButton} onPress={handleVolumeUp}>
          <Text style={styles.controlButtonText}><Image
          source={require('../../assets/images/up.png')}
          style={buttonImage}
        /></Text>
        </TouchableOpacity>
      </View>
      <View padding={10}></View>
      <View flexDirection='row'>
      <Image
          source={require('../../assets/images/find.png')}
          style={styles.img}
        />
        <Image
          source={require('../../assets/images/set.png')}
          style={styles.img}
        />
      </View>
      <View padding={50}></View>
      <TouchableOpacity
          // style={[
          //   styles.controlButton,
          //   { backgroundColor: isButtonPressed ? 'red' : 'black' },
          // ]}
          onPressIn={handleButtonPressIn}
          onPressOut={handleButtonPressOut}
          // onPress={handlePlayPause}
        >
          <Text>{isButtonPressed ? <Image
          source={require('../../assets/images/microphoneon.png')}
          style={styles.img}
        /> : <Image
        source={require('../../assets/images/microphone.png')}
        style={styles.img}
      />}</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img:{
    width:100,
    height:100,
  },
  video: {
    width: '100%',
    height: 245,
  },
  controlsContainer: {
    width: '80%',
    backgroundColor: '#bbbbbb',
    padding: 10,
    borderRadius: 50,
    flexDirection: 'row',
    // marginTop: 10,
  },
  controlButton: {
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    // padding: 10,
    borderRadius: 5,
    marginRight: 35,
    marginLeft: 35,
  },
  controlButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default VideoPlayerScreen;
