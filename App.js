import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigators/drawerNavigator';
import PropTypes from 'deprecated-react-native-prop-types';

export default function App() {
  return (
    <NavigationContainer documentTitle={'PaddleKing'}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
