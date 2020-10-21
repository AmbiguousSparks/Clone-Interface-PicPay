import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Text} from 'react-native';
import Navigation from './navigation';

export default function App({currentDate}) {
  return (
    <NavigationContainer>
      <Text>{currentDate}</Text>
      <Navigation />
    </NavigationContainer>
  );
}
