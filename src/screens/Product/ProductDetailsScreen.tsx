import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { BackICon, BagICon } from '../../assets/images';
import { COLORS } from '../../constants/Lang/navigationStrings';
import { useGetProductQuery } from '../../redux/services/productApi';
import { useNavigation, useRoute } from '@react-navigation/native';

interface Product {
  title: string;
  images: string[];
  price: number;
  brand: string;
  category: string;
  description: string;
}

const ProductDetailsScreen = () => {
  const route = useRoute<any>();
  const navigation = useNavigation();
  console.log(route);

  const { productId } = route.params;

  const { data, isLoading } = useGetProductQuery(productId);

  const product: Product | undefined = data?.data?.[0];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [quantity, setQuantity] = useState<number>(1);

  const increase = () => setQuantity(prev => prev + 1);
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.loaderContainer}>
        <Text>No Product Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <BackICon width={40} height={40} />
        </TouchableOpacity>

        <Carousel<string>
          width={300}
          height={250}
          data={product.images}
          scrollAnimationDuration={250}
          onSnapToItem={index => setCurrentIndex(index)}
          renderItem={({ item }) => (
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: item }}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          )}
        />

        <View style={styles.paginationContainer}>
          {product.images.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, currentIndex === index && styles.activeDot]}
            />
          ))}
        </View>
      </View>

      <View style={styles.bottomHalf}>
        <View style={{ marginHorizontal: 30 }}>
          <View style={styles.topRow}>
            <View>
              <Text style={styles.title}>{product.brand}</Text>
              <Text style={styles.subtitle}>{product.category}</Text>
            </View>

            <View>
              <Text style={styles.priceLabel}>Price</Text>
              <Text style={styles.price}>{`P ${product.price}`}</Text>
            </View>
          </View>

          <View style={styles.quantityRow}>
            <TouchableOpacity style={styles.stepBtn} onPress={decrease}>
              <Text style={styles.stepText}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantity}>{quantity}</Text>

            <TouchableOpacity style={styles.stepBtn} onPress={increase}>
              <Text style={styles.stepText}>+</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.descriptionTitle}>{product.title}</Text>
          <Text style={styles.description}>{product.description}</Text>

          <View style={styles.bottomRow}>
            <TouchableOpacity>
              <View style={styles.cartCircle}>
                <BagICon height={25} width={30} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buyButton}>
              <Text style={styles.buyText}>Buy Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default React.memo(ProductDetailsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY,
  },

  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },

  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: '#000',
    width: 10,
    height: 10,
  },

  topHalf: {
    height: '50%',
    marginTop: 20,
    alignItems: 'center',
  },

  backButton: {
    marginLeft: 20,
    marginRight: 'auto',
    marginVertical: 50,
    height: 40,
    width: 40,
    borderRadius: 20,
  },

  bottomHalf: {
    height: '50%',
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },

  title: {
    fontSize: 20,
    fontWeight: '400',
    color: COLORS.BLACK,
  },

  subtitle: {
    color: COLORS.BLACK,
    marginTop: 4,
    fontSize: 17,
    fontWeight: '300',
  },

  priceLabel: {
    fontSize: 17,
    color: COLORS.BLACK,
  },

  price: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.BLACK,
  },

  quantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  stepBtn: {
    width: 32,
    height: 32,
    borderRadius: 6,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  stepText: {
    fontSize: 18,
    fontWeight: '600',
  },

  quantity: {
    marginHorizontal: 15,
    fontSize: 16,
  },

  descriptionTitle: {
    marginTop: 20,
    fontWeight: '600',
    fontSize: 17,
    color: COLORS.BLACK,
  },

  description: {
    marginTop: 14,
    lineHeight: 20,
    fontSize: 17,
    color: COLORS.BLACK,
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },

  cartCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E6F0E8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buyButton: {
    flex: 1,
    height: 50,
    backgroundColor: '#F2C200',
    marginLeft: 15,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buyText: {
    fontWeight: '600',
    fontSize: 16,
  },
});
