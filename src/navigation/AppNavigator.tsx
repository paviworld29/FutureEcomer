import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ProductDetailsScreen from "../screens/Product/ProductDetailsScreen";


const Stack = createNativeStackNavigator();

export default  function AppNavigator(){
    return(
        <Stack.Navigator initialRouteName="Tabs" screenOptions={{headerShown:false}}>
            <Stack.Screen name="Tabs" component={TabNavigator} options={{headerShown:false}} />
            <Stack.Screen  name="ProductDetails" component={ProductDetailsScreen}/>
        </Stack.Navigator>
    )
}