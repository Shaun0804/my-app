import React from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { StyleSheet,Image, Pressable,Text,ScrollView,TouchableOpacity } from 'react-native';
const PlaceholderImage = require('../assets/images/background-image.png');
import {image} from '../components/image'
import {button} from '../components/button';
import {buttonImage} from '../components/buttonImage';
import {text,text_1} from '../components/text';
// const { onPress, title = 'Save' } = HomeScreen;
////
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
        

      <View style={styles.footerContainer}>
        <Pressable style={[button,{backgroundColor: '#98bef9'}]} onPress={() => navigation.navigate('Homesafety')}>
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

        <Text style={[text,{fontSize}]}>{"居家安全"}
          <Image
            source={require('../assets/images/homesafety.png')}
            style={buttonImage}
          />
          </Text>

        </View>
          
        </Pressable>
      </View>
      <View style={styles.footerContainer}>
      <Pressable style={[button,{backgroundColor: '#fbceb3'}]} onPress={() => navigation.navigate('Entertainment')}>
        <Text style={[text,{fontSize}]}>{"休閒娛樂"}
        <Image
          source={require('../assets/images/entertan.png')}
          style={buttonImage}
        />
        </Text>
      </Pressable>
      </View>
      <View style={styles.footerContainer}>
      <Pressable style={[button,{backgroundColor: '#fa4733'}]} onPress={() => navigation.navigate('Healthy')}>
        <Text style={[text,{fontSize}]}>{"健康照護"}
        <Image
          source={require('../assets/images/healthy.png')}
          style={buttonImage}
        />
        </Text>
      </Pressable>
      </View>


      </View>
      <View style={styles.footerContainer}>
        <Text style={[text_1,{fontSize}]}>{"社交"} </Text>
      </View>
      

      <View style={styles.footerContainer}>
      
      <Pressable style={[button,{backgroundColor: '#96bcf9'}]} onPress={() => navigation.navigate('ContactList')}>
        <Text style={[text,{fontSize}]}>{"社交平台"}
        <Image
          source={require('../assets/images/socialplat.png')}
          style={buttonImage}
        />
        </Text>
      </Pressable>
      </View>
      <View style={styles.footerContainer}>
      <Pressable style={[button,{backgroundColor: '#faaff1'}]} onPress={() => navigation.navigate('Moneycontrol')}>
        <Text style={[text,{fontSize}]}>{"金錢管控"}
        <Image
          source={require('../assets/images/money.png')}
          style={buttonImage}
        />
        </Text>
      </Pressable>
      </View>
      <View style={styles.footerContainer}>
        <Text style={[text_1,{fontSize}]}>{"醫療照護"} </Text>
      </View>
      
      <View style={styles.footerContainer}>
      
      <Pressable style={[button,{backgroundColor: '#98bdfa'}]} onPress={() => navigation.navigate('Danger')}>
        <Text style={[text,{fontSize}]}>{"危機辨識"}
        <Image
          source={require('../assets/images/danger.png')}
          style={buttonImage}
        />
        </Text>
        
      </Pressable>
      </View>
      <View style={styles.footerContainer}>
      <Pressable style={[button,{backgroundColor: '#fbb1f1'}]} onPress={() => navigation.navigate('Lifesafety')}>
        <Text style={[text,{fontSize}]}>{"個人安全"}
        <Image
          source={require('../assets/images/map.png')}
          style={buttonImage}
        />
        </Text>
        
      </Pressable>
      </View>
      <View style={styles.footerContainer}>
      <Pressable style={[button,{backgroundColor: '#fa4d35'}]} onPress={() => navigation.navigate('Sos')}>
        <Text style={[text,{fontSize}]}>{"一鍵求助"}
        <Image
          source={require('../assets/images/sos.png')}
          style={buttonImage}
        />
        </Text>
        
      </Pressable>
      </View>
    </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  footerContainer: {
    // flex: 1 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1 ,
    paddingTop:20,
    
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
  
});

export default HomeScreen;
