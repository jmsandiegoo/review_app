import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/about';

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="About" component={About} options={{title: 'About GameZone'}}/>
    </Stack.Navigator>
  )
}
