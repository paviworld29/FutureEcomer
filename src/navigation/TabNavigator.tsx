import { createNativeBottomTabNavigator } from '@react-navigation/bottom-tabs/unstable';
import HomeScreen from '../screens/Main/HomeScreen'
import BagScreen from '../screens/Main/BagScreen'
import SettingsScreen from '../screens/Main/SettingsScreen'
import LikesScreen from '../screens/Main/LikesScreen'
import ProfileScreen from '../screens/Main/ProfileScreen'


const Tab = createNativeBottomTabNavigator();

export default function () {
    return(
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomeScreen}/>
            <Tab.Screen name='Bag' component={BagScreen}/>
            <Tab.Screen name='Likes' component={LikesScreen}/>
            <Tab.Screen name='Profile' component={ProfileScreen}/>
            <Tab.Screen name='Settings' component={SettingsScreen}/>
        </Tab.Navigator>
    )
}
