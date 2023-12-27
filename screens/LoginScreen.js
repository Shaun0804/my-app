import React from 'react';
import { View, Button,Text,Pressable } from 'react-native';
import { StyleSheet,Image,TextInput, TouchableOpacity, Linking} from 'react-native';
const PlaceholderImage = require('../assets/images/background-image.png');
import {image} from '../components/image'

function HomeScreen({ navigation }) {
  // const MyScreenWithLink = () => {
    const handleLinkPress = () => {
      // 在這裡設定你想要連結的 URL
      const url = 'https://www.example.com';
  
      // 使用 Linking 打開連結
      Linking.openURL(url);
    };
    return (
      <View style={styles.container}>
        <Text style={styles.item}>歡迎</Text>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={image} />
        </View>
        <View style={[styles.container,{flex: 2}]}>
          <Text style={[{fontSize: 40}]}>帳號</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}textAlign="center"></TextInput>
          </View>
          <Text style={[{fontSize: 40}]}>密碼</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input}textAlign="center"secureTextEntry={true}></TextInput>
          </View>
          <Text style={[{fontSize: 20}]}>還沒註冊?
          {/* <TouchableOpacity style={[{fontWeight: 'bold'}]} onPress={handleLinkPress}> */}
            <Text style={{ color: 'blue',fontSize: 20 }}>註冊</Text>
          {/* </TouchableOpacity> */}
          </Text>
          
          <View style={styles.footerContainer}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('回主頁')}>
              <Text style={styles.text}>{"登入"}</Text>
              
            </Pressable>
          </View>

        </View>
        
      </View>
    );

  // };
  
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
    paddingTop: 100,
  },
  imageContainer: {
    flex: 0.6,
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
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default HomeScreen;
