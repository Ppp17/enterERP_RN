/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './src/Home/HomePage';
import Confirm from './src/Confirm/Confirm';
import Store from './src/Store/Store';
const Stack = createNativeStackNavigator();

function App() {
  return (
    // <SafeAreaView style={{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name="Confirm"
          component={Confirm}
          options={{title: '进场预约'}}></Stack.Screen>
        <Stack.Screen
          name="Store"
          component={Store}
          options={{title: '商品列表'}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // </SafeAreaView>
  );
}

export default App;
