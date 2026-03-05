import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { navigationStrings } from '../../constants/Lang/navigationStrings';

const OrderSuccessScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();

  // Optionally, you can pass order details via route.params
  const { orderId, totalAmount } = route.params || {};

  const handleGoHome = () => {
    navigation.navigate('Tabs', {
      screen: navigationStrings.HOME,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {/* Success Image */}
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/845/845646.png',
          }}
          style={styles.image}
        />

        {/* Success Text */}
        <Text style={styles.title}>Order Placed Successfully!</Text>
        <Text style={styles.subtitle}>Thank you for your purchase.</Text>

        {/* Order Details */}
        {orderId && totalAmount && (
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>Order ID: {orderId}</Text>
            <Text style={styles.detailText}>Total Amount: ₹ {totalAmount}</Text>
          </View>
        )}

        {/* Go Home Button */}
        <TouchableOpacity style={styles.button} onPress={handleGoHome}>
          <Text style={styles.buttonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  detailsContainer: {
    backgroundColor: '#fff',
    padding: 15,
    width: '100%',
    borderRadius: 10,
    marginBottom: 30,
    elevation: 2,
  },
  detailText: {
    fontSize: 15,
    color: '#333',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#53a20e',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default OrderSuccessScreen;
