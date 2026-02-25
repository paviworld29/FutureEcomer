import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { BackICon } from '../../assets/images';
import { COLORS } from '../../constants/Lang/navigationStrings';
import { useGetProductQuery } from '../../redux/services/productApi';

const ProductDetailsScreen = ({ navigation, route }: any) => {
  const { productId } = route?.params;

  const [product, setProduct] = React.useState<any>(null);

  const { data, isLoading } = useGetProductQuery(productId);
  console.log('product', product);

  useEffect(() => {
    if (data?.data) {
      setProduct(data.data[0]);
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <BackICon width={40} height={40} />
        </TouchableOpacity>
      </View>

      <View style={styles.bottomHalf}>
         <Text>{product?.title}</Text>
      </View>

    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY,
  },
  topHalf: {
    height: '50%',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  backButton: {
    marginLeft: 20,
    marginVertical: 50,
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHalf: {
    height: '50%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 20,
  },
});
