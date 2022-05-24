import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home/Home';
import Commodity from '../screens/commodity/Commodity';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          background: '#FFF'
        }
      }}
    >
      <Stack.Screen 
        name={'Commodity'}
        component={Commodity}
      />
      <Stack.Screen 
        name={'Home'}
        component={Home}
      />
      
    </Stack.Navigator>
  )
}
