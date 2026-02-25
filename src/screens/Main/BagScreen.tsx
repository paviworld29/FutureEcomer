import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const BagScreen = () => {
  let navigation = useNavigation();
  return (
    <View style={{ marginTop: 100 }}>
      <Text>BagScreen</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>BACK</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BagScreen;

const styles = StyleSheet.create({});
