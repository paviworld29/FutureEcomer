import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import HomeScreen from '../screens/Main/HomeScreen';
import BagScreen from '../screens/Main/BagScreen';
import SettingsScreen from '../screens/Main/SettingsScreen';
import LikesScreen from '../screens/Main/LikesScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import { moderateScale, verticalScale } from 'react-native-size-matters';


import { COLORS, navigationStrings } from '../constants/Lang/navigationStrings';
import images from '../assets/images';


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={navigationStrings.HOME}
      screenOptions={{
        headerShown: true,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: COLORS.WHITE},
        tabBarActiveTintColor: COLORS.GREEN,
        tabBarInactiveTintColor: COLORS.GRAY,
      }}
    >
      <Tab.Screen
        name={navigationStrings.HOME}
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.HOMEICON}
              style={{
                tintColor: focused ? COLORS.GREEN : COLORS.GRAY,
               width: moderateScale(35),
              height: moderateScale(35),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name={navigationStrings.LIKES}
        component={LikesScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.LIKEICON}
              style={{
                tintColor: focused ? COLORS.GREEN : COLORS.GRAY,
                width: moderateScale(35),
              height: moderateScale(35),
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={navigationStrings.BAG}
        component={BagScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.BAGICON}
              style={{
                tintColor: focused ? COLORS.GREEN : COLORS.GRAY,
                width: moderateScale(35),
              height: moderateScale(35),
              }}
            />
          ),
        }}
      />



      <Tab.Screen
        name={navigationStrings.PROFILE}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.PROFILEICON}
              style={{
                tintColor: focused ? COLORS.GREEN : COLORS.GRAY,
               width: moderateScale(35),
              height: moderateScale(35),
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name={navigationStrings.SETTINGS}
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.SETTINGSICON}
              style={{
                tintColor: focused ? COLORS.GREEN : COLORS.GRAY,
                 width: moderateScale(35),
              height: moderateScale(35),
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}