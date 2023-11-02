import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartPage from '../views/carrito';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Store"
        component={CartPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" size={40} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
