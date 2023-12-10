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
import SocialPlat from './screens/social/SocialPlat';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Assistant" component={AssistantScreen}/>
        <Stack.Screen name="Social" component={SocialScreen}/>
        <Stack.Screen name="醫療照護" component={MedicalScreen}/>

        <Stack.Screen name="Entertainment" component={Entertainment}/>
        <Stack.Screen name="Healthy" component={Healthy}/>
        <Stack.Screen name="Homesafety" component={Homesafety}/>

        <Stack.Screen name="Danger" component={Danger}/>
        <Stack.Screen name="Lifesafety" component={Lifesafety}/>
        <Stack.Screen name="Sos" component={Sos}/>

        <Stack.Screen name="Moneycontrol" component={Moneycontrol}/>
        <Stack.Screen name="SocialPlat" component={SocialPlat}/>

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
// 測試01
export default App;
