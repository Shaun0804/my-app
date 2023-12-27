import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image, ImageBackground } from 'react-native';
import p from '../../assets/images/game1.png';
import p2 from '../../assets/images/game2.png';
import p3 from '../../assets/images/game3.png';
import p4 from '../../assets/images/game4.png';
import p5 from '../../assets/images/game5.png';
import {button} from '../../components/button';
import {button2} from '../../components/button';
import {text} from '../../components/text';

const GameMenuScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={button2} onPress={() => navigation.navigate('Game1')}>
            <View style={styles.borderRadius}>
              <ImageBackground source={p} style={button}>
                <Text style={styles.buttonText}>{"　　象棋　　"}</Text>
                {/* <ImageBackground source={imagee} style={{ width: '100%', height: '100%' }}></ImageBackground> */}
              </ImageBackground>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={button2} onPress={() => navigation.navigate('Game2')}>
            <View style={styles.borderRadius}>
              <ImageBackground source={p2} style={button}>
                <Text style={styles.buttonText}>{"　　接龍　　"}</Text>
                {/* <ImageBackground source={imagee} style={{ width: '100%', height: '100%' }}></ImageBackground> */}
              </ImageBackground>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={button2} onPress={() => navigation.navigate('Game3')}>
            <View style={styles.borderRadius}>
              <ImageBackground source={p3} style={button}>
                <Text style={styles.buttonText}>{"　　圍棋　　"}</Text>
                {/* <ImageBackground source={imagee} style={{ width: '100%', height: '100%' }}></ImageBackground> */}
              </ImageBackground>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={button2} onPress={() => navigation.navigate('Game4')}>
            <View style={styles.borderRadius}>
              <ImageBackground source={p4} style={button}>
                <Text style={styles.buttonText}>{"　　麻將　　"}</Text>
                {/* <ImageBackground source={imagee} style={{ width: '100%', height: '100%' }}></ImageBackground> */}
              </ImageBackground>
            </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={button2} onPress={() => navigation.navigate('Game5')}>
            <View style={styles.borderRadius}>
              <ImageBackground source={p5} style={button}>
                <Text style={styles.buttonText}>{"　　跳棋　　"}</Text>
                {/* <ImageBackground source={imagee} style={{ width: '100%', height: '100%' }}></ImageBackground> */}
              </ImageBackground>
            </View>
        </TouchableOpacity>
      </View>
      {/* 在這裡可以繼續添加更多遊戲的入口 */}
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    // flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    // flex: 1 ,
    paddingTop:25,
    // borderRadius: 10
  },
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
    color:'white'
  },
  imageradius:{
    borderRadius: 25,
  },
  borderRadius:{
    borderRadius:23,
    overflow: 'hidden',
  }
});

export default GameMenuScreen;
