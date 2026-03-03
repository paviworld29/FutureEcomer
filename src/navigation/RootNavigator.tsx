import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import AppNavigator from './AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootNavigator() {
  const [userToken, setUserToken] = useState<string | null>(null);
  console.log(userToken,'tokennn')
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('userToken');
      console.log(token,'dksfjkldjf')
      setUserToken(token);
      setLoading(false);
    };

    checkToken();
  }, []);
  if (loading) return null;
  return (
    <NavigationContainer>
      {userToken ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
