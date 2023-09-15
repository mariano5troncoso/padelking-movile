import { createStackNavigator } from "@react-navigation/stack";
import Home from "../views/Home"; // Asegúrate de que la ruta sea correcta

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
