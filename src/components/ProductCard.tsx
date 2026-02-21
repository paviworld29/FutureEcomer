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
import { verticalScale } from 'react-native-size-matters';
import images from '../assets/images';

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
      <View style={styles.imageContainer}>
        <View style={styles.ratingContainer}>
          <Image source={images.STARICON} />
          <Text style={styles.ratingText}>{rating}</Text>
        </View>

        <TouchableOpacity>
          <Image source={images.SMALLHEARTICON} />
        </TouchableOpacity>
      </View>
      <View style={styles.imageContentContainer}>
        <Image source={image} />
      </View>
      <Text style={styles.titleText}>{title}</Text>

      <View style={styles.imageContainer}>
        <View style={styles.ratingContainer}>
          <Text>P</Text>
          <Text style={styles.ratingText}>{price}</Text>
        </View>

        <TouchableOpacity>
          <Image source={images.ADDICON} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    // width: verticalScale(140),
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
});
