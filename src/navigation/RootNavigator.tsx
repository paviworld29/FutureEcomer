import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import  {setToken}  from '../redux/services/authSlice';

export default function RootNavigator() {

  const token = useSelector((state:any) => state.auth.token);
  const dispatch = useDispatch();
  

  useEffect(() => {
    const loadToken = async () => {
      const storedToken = await AsyncStorage.getItem('userToken');

      if (storedToken) {
        dispatch(setToken(storedToken));
      }
    };

    loadToken();
  }, []);

  return (
    <NavigationContainer>
      {token ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}