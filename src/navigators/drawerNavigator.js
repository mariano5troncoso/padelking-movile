import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stackNavigator";
import Home from '../views/HomeScreen';
import MyTabs from './tabsNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='PadelKing' component={StackNavigator} />
      <Drawer.Screen name='Inicio' component={Home} />
      <Drawer.Screen name="Carrito" component={MyTabs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
