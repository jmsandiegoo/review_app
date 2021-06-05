import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import DrawerNavigator from './routes/drawer'

const getFonts = () => {
  return Font.loadAsync({
    'nunito-regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/NunitoSans-Bold.ttf')
  })
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <DrawerNavigator />
    );
  } else {
    return (
    <AppLoading
      startAsync={getFonts} onFinish={()=> setFontsLoaded(true)} onError={console.warn}
    />
    )
  }
}