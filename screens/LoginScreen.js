import React from 'react';
import { View, Button,Text,Pressable } from 'react-native';
import { StyleSheet,Image,TextInput} from 'react-native';
const PlaceholderImage = require('../assets/images/background-image.png');
import {image} from '../components/image'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.item}>歡迎</Text>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={image} />
      </View>
      <View style={[styles.container,{flex: 2}]}>
        <Text style={[{fontSize: 40}]}>帳號</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}></TextInput>
        </View>
        <Text style={[{fontSize: 40}]}>密碼</Text>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input}></TextInput>
        </View>
        <Text style={[{fontSize: 20}]}>還沒註冊?</Text>
        <View style={styles.footerContainer}>
          <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
            <Text style={styles.text}>{"登入"}</Text>
          </Pressable>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {/*按鈕風格 */
    flex: 1 / 3,
    alignItems: 'center',
    paddingTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  item: {
    alignItems: 'flex-end',
    color: '#808080',
    fontSize: 50,
    paddingTop: 50,
  },
  imageContainer: {
    flex: 0.8,
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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 50,
    elevation: 3,
    backgroundColor: '#0074d9',
  },
  text: {
    fontSize: 30,
    // lineHeight: 0,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default HomeScreen;
