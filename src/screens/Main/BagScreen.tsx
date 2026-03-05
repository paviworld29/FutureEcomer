import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  COLORS,
  navigationStrings,
} from '../../constants/Lang/navigationStrings';

const BagScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { product: initialProduct, quantity: initialQty } = route.params || {};

  const [product, setProduct] = useState(initialProduct);
  const [quantity, setQuantity] = useState<number>(initialQty || 1);

  const increase = () => {
    setQuantity(prev => prev + 1);
  };

  const decrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleRemove = () => {
    setProduct(null);
  };

  const subtotal = product ? product.price * quantity : 0;
  const shipping = product ? 50 : 0;
  const total = subtotal + shipping;

  return (
    <SafeAreaView style={styles.container}>
      {product ? (
        <>
          {/* Product Card */}
          <View style={styles.cardView}>
            <Image
              source={{ uri: product.images?.[0] }}
              style={styles.productImage}
            />

            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{product.title}</Text>

              <Text style={styles.price}>₹ {product.price}</Text>

              {/* Quantity Buttons */}
              <View style={styles.quantityRow}>
                <TouchableOpacity style={styles.stepBtn} onPress={decrease}>
                  <Text style={styles.stepText}>-</Text>
                </TouchableOpacity>

                <Text style={styles.quantity}>{quantity}</Text>

                <TouchableOpacity style={styles.stepBtn} onPress={increase}>
                  <Text style={styles.stepText}>+</Text>
                </TouchableOpacity>
              </View>

              {/* Remove Button */}
              <TouchableOpacity
                style={styles.removeButton}
                onPress={handleRemove}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Summary Section */}
          <View style={styles.summaryContainer}>
            <View style={styles.row}>
              <Text style={styles.label}>Subtotal</Text>
              <Text style={styles.value}>₹ {subtotal}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}>Shipping</Text>
              <Text style={styles.value}>₹ {shipping}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.totalLabel}>Total</Text>
              <Text style={styles.totalValue}>₹ {total}</Text>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() => {
                navigation.navigate('PlaceOrder');
              }}
            >
              <Text style={styles.checkoutText}>Proceed To Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        // <Text style={styles.emptyText}>No Product in Bag</Text>
        // <TouchableOpacity>

        // </TouchableOpacity>

        <View style={[styles.emptyText]}>
          <Text>No product in Bag</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate(navigationStrings.HOME)}
            style={styles.addButton}
          >
            <Text style={styles.addButtonText}>Add product</Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GRAY,
  },

  cardView: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    margin: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },

  productImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  detailsContainer: {
    flex: 1,
    marginLeft: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.BLACK,
  },

  price: {
    marginTop: 6,
    fontSize: 15,
    fontWeight: '700',
    color: 'green',
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },

  stepBtn: {
    width: 30,
    height: 30,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#53a20e', // green button
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginVertical: 10, // spacing from other elements
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  stepText: {
    fontSize: 18,
    fontWeight: '600',
  },

  quantity: {
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: '600',
  },

  removeButton: {
    marginTop: 10,
    backgroundColor: '#E53935',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },

  removeButtonText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },

  summaryContainer: {
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 6,
  },

  label: {
    fontSize: 14,
    color: COLORS.BLACK,
  },

  value: {
    fontSize: 14,
    color: COLORS.BLACK,
  },

  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },

  totalLabel: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.BLACK,
  },

  totalValue: {
    fontSize: 16,
    fontWeight: '700',
    color: 'green',
  },

  checkoutButton: {
    marginTop: 20,
    backgroundColor: 'black',
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checkoutText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
  },

  emptyText: {
    marginTop: 40,
    fontSize: 16,
    color: COLORS.BLACK,

    alignItems: 'center',
  },
});

export default BagScreen;
