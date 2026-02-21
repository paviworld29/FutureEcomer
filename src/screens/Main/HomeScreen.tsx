import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import images from '../../assets/images';
import IconBox from '../../components/IconBox';
import ProductCard from '../../components/ProductCard';
import SearchBar from '../../components/SearchBar';
import {
  COLORS,
  navigationStrings,
} from '../../constants/Lang/navigationStrings';

interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: any;
}

const DATA: Product[] = [
  {
    id: '1',
    title: 'Three layered Drawer',
    price: 5500,
    rating: 4.5,
    image: images.SOFAIMG,
  },
  {
    id: '2',
    title: 'Three layered Drawer',
    price: 5500,
    rating: 4.5,
    image: images.CHAIR,
  },
  {
    id: '3',
    title: 'Three layered Drawer',
    price: 5500,
    rating: 4.5,
    image: images.SOFATWO,
  },
  {
    id: '4',
    title: 'Three layered Drawer',
    price: 5500,
    rating: 4.5,
    image: images.CHAIRTWO,
  },
  {
    id: '5',
    title: 'Three layered Drawer',
    price: 5500,
    rating: 4.5,
    image: images.SOFAIMG,
  },
  {
    id: '6',
    title: 'Three layered Drawer',
    price: 5500,
    rating: 4.5,
    image: images.SOFATHREE,
  },
];

const HomeScreen = () => {
  const tabBarHeight = useBottomTabBarHeight();

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.exploreText}>Explore</Text>
        <SearchBar
          placeholder={navigationStrings.SEARCH}
          icon={images.SEARCHICON}
        />

        <View style={styles.topRightIcons}>
          <IconBox onPress={() => console.log('Settings')}>
            <Text>⚙️</Text>
          </IconBox>

          <IconBox onPress={() => console.log('Menu')}>
            <Text>☷</Text>
          </IconBox>
        </View>

        <FlatList
          data={DATA}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: verticalScale(10),
            marginHorizontal: 8,
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <ProductCard
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              onPress={() => console.log('Product Pressed')}
              style={{
                marginBottom: verticalScale(14),
              }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  topRightIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 16,
  },
  exploreText: {
    fontSize: moderateScale(20),
    fontWeight: '600',
    color: COLORS.BLACK,
  },
  container: {
    flex: 1,
    marginHorizontal: moderateScale(20),
  },
});
