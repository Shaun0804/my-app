import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import p from '../../assets/images/game1.png';
import p2 from '../../assets/images/game2.png';
import p3 from '../../assets/images/game3.png';
import p4 from '../../assets/images/game4.png';
import p5 from '../../assets/images/game5.png';
const GameMenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game1')}
      >
        {/* <Text style={styles.buttonText}>象棋</Text> */}
        <Image source={p} style={styles.imageradius}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game2')}
      >
        {/* <Text style={styles.buttonText}>接龍</Text> */}
        <Image source={p2} style={styles.imageradius}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game3')}
      >
        {/* <Text style={styles.buttonText}>圍棋</Text> */}
        <Image source={p3} style={styles.imageradius}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game3')}
      >
        {/* <Text style={styles.buttonText}>麻將</Text> */}
        <Image source={p4} style={styles.imageradius}></Image>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Game3')}
      >
        {/* <Text style={styles.buttonText}>跳棋</Text> */}
        <Image source={p5} style={styles.imageradius}></Image>
      </TouchableOpacity>
      {/* 在這裡可以繼續添加更多遊戲的入口 */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    // backgroundColor: 'lightblue',
    padding: 10,
    margin: 10,
    // borderRadius: 8,
  },
  buttonText: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  imageradius:{
    borderRadius: 25,
  }
});

export default GameMenuScreen;
