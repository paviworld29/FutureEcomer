import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ImageSourcePropType } from 'react-native';
import { verticalScale } from 'react-native-size-matters';
import images, { AddIconSvg, HeartSvg, StarOrange } from '../assets/images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
interface Product {
  id: number;
  title: string;
  price: number;
  rating: number;
  image: any;
}

interface ProductCardProps {
  title: string;
  price: number;
  image: ImageSourcePropType;
  rating: number;
  item: Product;
  productId:number
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image,
  rating,
  onPress,
  style,
  item,
}) => {
  const [liked, setLiked] = useState(false);

  // 🔥 Check if already liked on mount
 useFocusEffect(
  useCallback(() => {
    const checkLiked = async () => {
      const stored = await AsyncStorage.getItem('liked_products');
      const likedArray = stored ? JSON.parse(stored) : [];

      const alreadyLiked = likedArray.some(
        (product: any) => product.id === item.id,
      );

      setLiked(alreadyLiked);
    };

    checkLiked();
  }, [item.id])
);

  // 🔥 Handle Like / Unlike
  const handleLike = async () => {
    try {
      const stored = await AsyncStorage.getItem('liked_products');
      let likedArray: Product[] = stored ? JSON.parse(stored) : [];

      const alreadyLiked = likedArray.some(product => product.id === item.id);

      if (alreadyLiked) {
        // ❌ Remove product
        likedArray = likedArray.filter(product => product.id !== item.id);
        setLiked(false);
      } else {
        // ✅ Add full product object
        likedArray.push(item);
        setLiked(true);
      }

      await AsyncStorage.setItem('liked_products', JSON.stringify(likedArray));

      console.log('likedArray--->>>>>', likedArray);
    } catch (error) {
      console.log('Like Error:', error);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.card, style]}
      onPress={onPress}
    >
      <View style={styles.imageContainer}>
        <View style={styles.ratingContainer}>
          <StarOrange width={20} height={20} />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        <TouchableOpacity onPress={handleLike}>
          {liked ? <Text>❤️</Text> : <HeartSvg width={20} height={20} />}
        </TouchableOpacity>
      </View>

      <View style={styles.imageContentContainer}>
        <Image source={image} style={styles.productImage} />
      </View>

      <Text numberOfLines={2} ellipsizeMode="middle" style={styles.titleText}>
        {title}
      </Text>

      <View style={styles.imageContainer}>
        <View style={styles.ratingContainer}>
          <Text>₹</Text>
          <Text style={styles.ratingText}>{price}</Text>
        </View>

        <TouchableOpacity>
          <AddIconSvg width={20} height={20} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: verticalScale(140),
    height: verticalScale(165),
    backgroundColor: '#FFF',
    borderRadius: verticalScale(10),
  },
  titleText: {
    fontSize: verticalScale(10),
    fontWeight: '500',
    color: 'black',
    marginTop: verticalScale(10),
    marginHorizontal: verticalScale(12),
  },
  imageContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: verticalScale(10),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: verticalScale(5),
  },
  productImage: {
    width: verticalScale(80),
    height: verticalScale(80),
  },
});
