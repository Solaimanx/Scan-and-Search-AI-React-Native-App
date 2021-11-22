import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Camera from './components/Camera';
import Home from './components/Home';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

import showProduct from './components/showProduct'

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen component={Home} options={{
          headerShown:false
        }} name="Home" />
        <Stack.Screen component={Camera} options={{headerShown:false}} name="Camera" />
        <Stack.Screen component={showProduct}  name="showproduct" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;


