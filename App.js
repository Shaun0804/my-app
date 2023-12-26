import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet} from 'react-native';
import LoginScreen from './screens/LoginScreen'; // 替換成你的首頁組件
import HomeScreen from './screens/HomeScreen'; // 替換成你的第二個頁面組件
import AssistantScreen from './screens/AssistantScreen';
import SocialScreen from './screens/SocialScreen';
import MedicalScreen from './screens/MedicalScreen';

import Entertainment from './screens/assistant/Entertainment';
import Healthy from './screens/assistant/Healthy';
import Homesafety from './screens/assistant/Homesafety';

import Danger from './screens/medical/Danger';
import Lifesafety from './screens/medical/Lifesafety';
import Sos from './screens/medical/Sos';

import Moneycontrol from './screens/social/Moneycontrol';
// import SocialPlat from './screens/social/ChatScreen';

import ContactListScreen from './screens/social/ContactListScreen';
import ChatScreen from './screens/social/ChatScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="回主頁" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Assistant" component={AssistantScreen}/>
        <Stack.Screen name="Social" component={SocialScreen}/>
        <Stack.Screen name="醫療照護" component={MedicalScreen}/>

        <Stack.Screen name="休閒娛樂" component={Entertainment}/>
        <Stack.Screen name="健康照護" component={Healthy}/>
        <Stack.Screen name="居家安全" component={Homesafety}/>

        <Stack.Screen name="危機辨識" component={Danger}/>
        <Stack.Screen name="個人安全" component={Lifesafety}/>
        <Stack.Screen name="一鍵求助" component={Sos}/>

        <Stack.Screen name="金錢管控" component={Moneycontrol}/>
        {/* <Stack.Screen name="SocialPlat" component={SocialPlat}/> */}

        <Stack.Screen name="ContactList" component={ContactListScreen} options={{ title: 'Contacts' }} />
        <Stack.Screen name="Chat" component={ChatScreen} options={{ title: 'Chat' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  item: {
    alignItems: 'flex-end',
    color: '#808080',
    fontSize: 50,
    paddingTop: 60,
  },
});
export default App;
