import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigators/drawerNavigator';

export default function App() {
  return (
    <NavigationContainer documentTitle={'PaddleKing'}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
