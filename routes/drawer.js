import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';


const RootDrawerNavigator = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <NavigationContainer>
      <RootDrawerNavigator.Navigator initialRouteName="Home">
        <RootDrawerNavigator.Screen name="Home" component={HomeStack}/>
        <RootDrawerNavigator.Screen name="About" component={AboutStack}/>
      </RootDrawerNavigator.Navigator>
    </NavigationContainer>
  )
}