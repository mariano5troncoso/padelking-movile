import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/Home"; 
import Nox from "../views/Nox";
import ProductDetails from "../views/Details";
const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Nox' component={Nox} options={{ headerShown: false }} />
      <Stack.Screen name= 'Details' component={ProductDetails} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
