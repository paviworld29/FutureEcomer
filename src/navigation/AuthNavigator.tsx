import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from '../screens/Auth/SignUpScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import { navigationStrings } from '../constants/Lang/navigationStrings';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName={navigationStrings.LOGIN} screenOptions={{headerShown:false}}>
      <Stack.Screen name={navigationStrings.LOGIN} component={LoginScreen} />
      <Stack.Screen name={navigationStrings.SIGNUP} component={SignUpScreen} />
    </Stack.Navigator>
  );
}
