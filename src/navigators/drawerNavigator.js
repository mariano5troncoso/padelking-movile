import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stackNavigator"; 
import Home from "../views/Home";
import Nox from "../views/Nox";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown:false
    }
        
    }>
        
      <Drawer.Screen name='Home' component={DrawerNavigator} />
      
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
