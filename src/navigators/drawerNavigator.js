import { createDrawerNavigator } from "@react-navigation/drawer";
import StackNavigator from "./stackNavigator"; 

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
        headerShown:false
    }
        
    }>
        
      <Drawer.Screen name='Home' component={StackNavigator} />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
