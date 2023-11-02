import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stackNavigator";
import Home from '../views/HomeScreen';
import MyTabs from './tabsNavigator';
import Register from '../views/Register';
import SignIn from '../views/SignIn';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name='PadelKing' component={StackNavigator} />
      <Drawer.Screen name='Inicio' component={Home} />
      <Drawer.Screen name="Registrarse" component={Register} />
      <Drawer.Screen name="Iniciar Sesion" component={SignIn} />
      <Drawer.Screen name="Carrito" component={MyTabs} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
