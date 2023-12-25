import React from 'react';
import { View } from 'react-native';
import { StyleSheet,Image, Pressable,Text} from 'react-native';
const PlaceholderImage = require('../assets/images/background-image.png');
import {image} from '../components/image'
import {button} from '../components/button';
import {text} from '../components/text';
// import Button from '../components/buttonStyles';
// const { onPress, title = 'Save' } = HomeScreen;

function HomeScreen({ navigation }) {
  
  return (
    <View style={styles.container}>
      <Text style={styles.item}>   </Text>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={image} />
      </View>
      <View style={styles.footerContainer}>
      <Pressable style={[button,{backgroundColor: 'orange'}]} onPress={() => navigation.navigate('Danger')}>
        <Text style={text}>{"危機辨識"}</Text>
      </Pressable>
      </View>
      <View style={styles.footerContainer}>
      <Pressable style={button} onPress={() => navigation.navigate('Lifesafety')}>
        <Text style={text}>{"個人安全"}</Text>
      </Pressable>
      </View>
      <View style={styles.footerContainer}>
      <Pressable style={button} onPress={() => navigation.navigate('Sos')}>
        <Text style={text}>{"一鍵求助"}</Text>
      </Pressable>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  item: {
    alignItems: 'flex-end',
    color: '#808080',
    fontSize: 0,
    paddingTop: 14,
  },
  imageContainer: {
    flex: 0.5,
    paddingTop: 10,
  },
  // image: {
  //   width: 100,
  //   height: 89.5,
  //   borderRadius: 0,
  // },
  inputContainer: {
    borderWidth: 4,
    borderColor: "#000000",
    width: 320,
    height: 68,
    borderRadius: 50
  },
  input: {
    width: 320,
    height: 58,
    fontSize: 30,
  },
 
});

export default HomeScreen;
