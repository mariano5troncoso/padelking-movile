import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartPage from '../views/carrito';
import { Text } from 'react-native'; 
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Store" component={CartPage} options={{tabBarIcon: ()=> <Text>🛒</Text>}} />
    </Tab.Navigator>
  );
}

export default MyTabs