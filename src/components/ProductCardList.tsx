import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  Image,
} from 'react-native';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { verticalScale, moderateScale } from 'react-native-size-matters';
import { StarOrange } from '../assets/images';

interface ProductCardProps {
  title: string;
  price: number;
  image: ImageSourcePropType;
  rating: number;
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
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.card, style]}
      onPress={onPress}
    >

      <Image source={image} style={styles.productImage} resizeMode="contain" />


      <View style={styles.infoContainer}>

        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.titleText}>
          {title}
        </Text>


        <View style={styles.ratingContainer}>
          {Array.from({ length: 5 }).map((_, index) => (
            <StarOrange
              key={index}
              fill={index < Math.round(rating) ? '#FF9300' : '#E0E0E0'}
              width={moderateScale(12)}
              height={moderateScale(12)}
            />
          ))}
          <Text style={styles.ratingNumberText}>{rating.toFixed(1)}</Text>
        </View>


        <Text style={styles.priceText}>${price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
 card: {
  flexDirection: 'row',  
  backgroundColor: '#FFF',
  borderRadius: verticalScale(12),
  padding: verticalScale(10),
  marginVertical: verticalScale(8),
   shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
  alignItems: 'center',
  width: verticalScale(140),
      height: verticalScale(165),


},
  productImage: {
    width: verticalScale(80),
    height: verticalScale(80),
    borderRadius: verticalScale(10),
    marginRight: verticalScale(12),
  },
  infoContainer: {
    flex: 1, // take remaining space
    justifyContent: 'space-between',
    marginHorizontal: verticalScale(18),
  },
  titleText: {
    fontSize: verticalScale(14),
    fontWeight: '600',
    color: '#000',
    marginBottom: verticalScale(4),
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(4),
  },
  ratingNumberText: {
    marginLeft: verticalScale(6),
    fontSize: verticalScale(12),
    color: '#666',
  },
  priceText: {
    fontSize: verticalScale(14),
    fontWeight: '700',
    color: '#333',
  },
});