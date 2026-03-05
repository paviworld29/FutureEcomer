import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderSuccessScreen from '../screens/Product/OrderSuccessScreen';
import ProductDetailsScreen from '../screens/Product/ProductDetailsScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Tabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="PlaceOrder" component={OrderSuccessScreen} />
    </Stack.Navigator>
  );
}
