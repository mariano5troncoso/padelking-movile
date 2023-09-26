import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../views/HomeScreen";
import Nox from '../views/Nox';
import Bullpadel from '../views/BullScreen';
import Siux from '../views/Siux';
import ProductDetailsScreen from '../views/DetailsScreen';
import ProductDetailsScreen2 from '../views/DetailsNox';
import ProductDetailsScreen3 from '../views/DetailsSiux';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeStack' component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Nox Productos' component={Nox} options={{ headerShown: false }} />
      <Stack.Screen name='Bullpadel Productos' component={Bullpadel} options={{ headerShown: false }} />
      <Stack.Screen name='Siux Productos' component={Siux} options={{ headerShown: false }} />
      <Stack.Screen name='Detalles Productos' component={ProductDetailsScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Detalles Nox' component={ProductDetailsScreen2} options={{ headerShown: false }} />
      <Stack.Screen name='Detalles Siux' component={ProductDetailsScreen3} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
};

export default StackNavigator;
