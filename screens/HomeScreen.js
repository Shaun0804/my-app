import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, Image,StyleSheet, Pressable,ScrollView,TouchableOpacity , ImageBackground } from 'react-native';
import { useState } from 'react';
const PlaceholderImage = require('../assets/images/background-image.png');
import {image} from '../components/image'
import {button} from '../components/button';
import {button2} from '../components/button';
import {buttonImage} from '../components/buttonImage';
import {text,text_1} from '../components/text';
import imager1 from '../assets/images/button1.png';
import imager2 from '../assets/images/button2.png';
import imager3 from '../assets/images/button3.png';
import imager4 from '../assets/images/button4.png';
import imager5 from '../assets/images/button5.png';
import imager6 from '../assets/images/button1.png';
import imager7 from '../assets/images/button2.png';
import imager8 from '../assets/images/button3.png';

const Tab = createBottomTabNavigator();

function HomeScreen({ navigation }) {
  const [fontSize, setFontSize] = useState(40); // 初始字體大小

  const changeFontSize = (newSize) => {
    setFontSize(newSize);
  };
  
  return (
    <ScrollView>

      <View style={{marginTop:50}}>
        {/* 你的內容 */}
        <Text style={{ fontSize:20,left:290 }}>字體大小設定</Text>

        {/* 字體大小設定按鈕 */}
        <View style={{ flexDirection: 'row', display:"flex",alignItems:"center",left:280 }}>
          <TouchableOpacity onPress={() => changeFontSize(40)}>
            <Text style={{ padding: 10, fontSize:12 }}>小</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeFontSize(50)}>
            <Text style={{ padding: 10, fontSize:16 }}>中</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeFontSize(60)}>
            <Text style={{ padding: 10, fontSize:20 }}>大</Text>
          </TouchableOpacity>
        </View>
      </View>



    <View style={styles.container}>
    {/* <Text style={styles.item}>   </Text> */}
    <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={image} />
    </View>
    <View style={styles.footerContainer}>
      <Text style={[text_1,{fontSize}]}>{"個人助理"} </Text>
    </View>

      <View style={styles.footerContainer}>
        <Pressable style={button2} onPress={() => navigation.navigate('休閒娛樂')}>
          <View style={styles.borderRadius}>
            <ImageBackground source={imager2} style={button}>
              <Text style={[text,{fontSize}]}>{"休閒娛樂"}
                <Image
                  source={require('../assets/images/entertan.png')}
                  style={buttonImage}
                />
              </Text>
            </ImageBackground>
          </View>
        </Pressable>
      </View>

      <View style={styles.footerContainer}>
        <Pressable style={button2} onPress={() => navigation.navigate('健康照護')}>
          <View style={styles.borderRadius}>
            <ImageBackground source={imager3} style={button}>
              <Text style={[text,{fontSize}]}>{"健康照護"}
                <Image
                  source={require('../assets/images/healthy.png')}
                  style={buttonImage}
                />
              </Text>
            </ImageBackground>
          </View>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
}
function SocialScreen({ navigation }) {
  const [fontSize, setFontSize] = useState(40); // 初始字體大小

  const changeFontSize = (newSize) => {
    setFontSize(newSize);
  };
  
  return (
    <ScrollView>

      <View style={{marginTop:50}}>
        {/* 你的內容 */}
        <Text style={{ fontSize:20,left:290 }}>字體大小設定</Text>

        {/* 字體大小設定按鈕 */}
        <View style={{ flexDirection: 'row', display:"flex",alignItems:"center",left:280 }}>
          <TouchableOpacity onPress={() => changeFontSize(40)}>
            <Text style={{ padding: 10, fontSize:12 }}>小</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeFontSize(50)}>
            <Text style={{ padding: 10, fontSize:16 }}>中</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeFontSize(60)}>
            <Text style={{ padding: 10, fontSize:20 }}>大</Text>
          </TouchableOpacity>
        </View>
      </View>
    <View style={styles.container}>
    {/* <Text style={styles.item}>   </Text> */}
    <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={image} />
    </View>
    
      
      <View style={styles.footerContainer}>
        <Text style={[text_1,{fontSize}]}>{"社交"} </Text>
      </View>
      

      <View style={styles.footerContainer}>
        <Pressable style={button2} onPress={() => navigation.navigate('ContactList')}>
          <View style={styles.borderRadius}>
            <ImageBackground source={imager4} style={button}>
              <Text style={[text,{fontSize}]}>{"社交平台"}
                <Image
                  source={require('../assets/images/socialplat.png')}
                  style={buttonImage}
                />
              </Text>
            </ImageBackground>
          </View>
        </Pressable>
      </View>

      <View style={styles.footerContainer}>
        <Pressable style={button2} onPress={() => navigation.navigate('金錢管控')}>
          <View style={styles.borderRadius}>
            <ImageBackground source={imager5} style={button}>
              <Text style={[text,{fontSize}]}>{"金錢管控"}
                <Image
                  source={require('../assets/images/money.png')}
                  style={buttonImage}
                />
              </Text>
            </ImageBackground>
          </View>
        </Pressable>
      </View>
    </View>
    </ScrollView>
  );
}

function MedicalScreen({ navigation }) {
  const [fontSize, setFontSize] = useState(40); // 初始字體大小

  const changeFontSize = (newSize) => {
    setFontSize(newSize);
  };
  
  return (
    <ScrollView>

      <View style={{marginTop:50}}>
        {/* 你的內容 */}
        <Text style={{ fontSize:20,left:290 }}>字體大小設定</Text>

        {/* 字體大小設定按鈕 */}
        <View style={{ flexDirection: 'row', display:"flex",alignItems:"center",left:280 }}>
          <TouchableOpacity onPress={() => changeFontSize(40)}>
            <Text style={{ padding: 10, fontSize:12 }}>小</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeFontSize(50)}>
            <Text style={{ padding: 10, fontSize:16 }}>中</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeFontSize(60)}>
            <Text style={{ padding: 10, fontSize:20 }}>大</Text>
          </TouchableOpacity>
        </View>
      </View>



    <View style={styles.container}>
    {/* <Text style={styles.item}>   </Text> */}
    <View style={styles.imageContainer}>
      <Image source={PlaceholderImage} style={image} />
    </View>

      <View style={styles.footerContainer}>
        <Text style={[text_1,{fontSize}]}>{"醫療照護"} </Text>
      </View>
      
      <View style={styles.footerContainer}>
        <Pressable style={button2} onPress={() => navigation.navigate('危機辨識')}>
          <View style={styles.borderRadius}>
            <ImageBackground source={imager6} style={button}>
              <Text style={[text,{fontSize}]}>{"危機辨識"}
                <Image
                  source={require('../assets/images/danger.png')}
                  style={buttonImage}
                />
              </Text>
            </ImageBackground>
          </View>
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <Pressable style={button2} onPress={() => navigation.navigate('個人安全')}>
          <View style={styles.borderRadius}>
            <ImageBackground source={imager7} style={button}>
              <Text style={[text,{fontSize}]}>{"個人安全"}
                <Image
                  source={require('../assets/images/map.png')}
                  style={buttonImage}
                />
              </Text>
            </ImageBackground>
          </View>
        </Pressable>
      </View>

      <View style={styles.footerContainer}>
      <Pressable style={button2} onPress={() => navigation.navigate('一鍵求助')}>
        <View style={styles.borderRadius}>
          <ImageBackground source={imager8} style={button}>
            <Text style={[text,{fontSize}]}>{"一鍵求助"}
              <Image
                source={require('../assets/images/sos.png')}
                style={buttonImage}
              />
            </Text>
          </ImageBackground>
        </View>
      </Pressable>
      </View>
    </View>
    </ScrollView>
  );
}


export default function TabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;

          if (route.name === '個人助理') {
            iconName = focused
              ? require('../assets/images/assistant1.png')
              : require('../assets/images/assistant.png');
          } else if (route.name === '社交') {
            iconName = focused
              ? require('../assets/images/social1.png')
              : require('../assets/images/social.png');
          }
          else if (route.name === '醫療照護') {
            iconName = focused
              ? require('../assets/images/medical1.png')
              : require('../assets/images/medical.png');
          }

          // 返回一個帶有圖樣的組件
          return <Image source={iconName} style={{ width: size*3, height: size*3 }} />;
        },
        tabBarStyle: { height: 120, paddingBottom:20 },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 0.001 },
      }}
    >
      <Tab.Screen name="個人助理" component={HomeScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="社交" component={SocialScreen} options={{ headerShown: false }}/>
      <Tab.Screen name="醫療照護" component={MedicalScreen} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    // flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1 ,
    paddingTop:20,
    // borderRadius: 10
  },
  container: {
    flex: 1,
    // backgroundColor: '#ffff',
    alignItems: 'center',
  },
  item: {
    alignItems: 'flex-end',
    color: '#808080',
    fontSize: 0,
    paddingTop: 114,
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
  borderRadius:{
    borderRadius:23,
    overflow: 'hidden',
  }
});
// HomeScreen.js（或其他屏幕的文件）



