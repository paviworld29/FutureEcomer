import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import images from '../../assets/images';
import IconBox from '../../components/IconBox';
import ProductCard from '../../components/ProductCard';
import ProductCardList from '../../components/ProductCardList';
import SearchBar from '../../components/SearchBar';
import {
  COLORS,
  navigationStrings,
} from '../../constants/Lang/navigationStrings';
import { useGetAllProductsQuery } from '../../redux/services/productApi';

const HomeScreen = ({ navigation }: any) => {
  const tabBarHeight = useBottomTabBarHeight();
  const { data, error, isLoading } = useGetAllProductsQuery({});
  console.log(data);

  const [activeIcon, setActiveIcon] = useState<'grid' | 'list'>('grid');
  if (isLoading) {
    return (
      <SafeAreaView
        style={[
          styles.safeArea,
          { justifyContent: 'center', alignItems: 'center' },
        ]}
      >
        <ActivityIndicator size="small" color={COLORS.BLACK} />
      </SafeAreaView>
    );
  }

  if (error) {
    console.log('API ERROR 👉', error);
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text>Something went wrong</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.container}>
        <Text style={styles.exploreText}>Explore</Text>

        <SearchBar
          placeholder={navigationStrings.SEARCH}
          icon={images.SEARCHICON}
        />

        <View style={styles.topRightIcons}>
          <IconBox
            onPress={() => setActiveIcon('grid')}
            style={{
              backgroundColor:
                activeIcon === 'grid' ? COLORS.GRAY : COLORS.LIGHT_GRAY,
            }}
          >
            <Text style={{ color: activeIcon === 'grid' ? '#FFF' : '#555' }}>
              ☷
            </Text>
          </IconBox>

          <IconBox
            onPress={() => setActiveIcon('list')}
            style={{
              backgroundColor:
                activeIcon === 'list' ? COLORS.GRAY : COLORS.LIGHT_GRAY,
            }}
          >
            <Text style={{ color: activeIcon === 'list' ? '#FFF' : '#555' }}>
              ⚙️
            </Text>
          </IconBox>
        </View>

        <FlatList
          key={activeIcon}
          data={data?.data?.products || []}
          keyExtractor={(item: any) => item.id.toString()}
          numColumns={activeIcon === 'grid' ? 2 : 1}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            marginVertical: verticalScale(10),
            marginHorizontal: 8,
            paddingBottom: tabBarHeight + 20,
          }}
          columnWrapperStyle={
            activeIcon === 'grid' ? { justifyContent: 'space-between' } : null
          }
          renderItem={({ item }: any) =>
            activeIcon === 'grid' ? (
              <ProductCard
              item = {item}
                title={item.title}
                productId={item.id} 
                price={item.price}
                rating={item.rating}
                image={{ uri: item.thumbnail }}
                onPress={() =>
                  navigation.navigate(navigationStrings.PRODUCT_DETAILS, {
                    productId: item.id,

                  })
                }
                style={{
                  marginBottom: verticalScale(14),
                  width: '48%',
                  height: verticalScale(180),
                }}
              />
            ) : (
              <ProductCardList
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={{ uri: item.thumbnail }}
                onPress={() => console.log('Product Pressed')}
                style={{
                  marginBottom: verticalScale(14),
                  width: '100%',
                  height: verticalScale(150),
                }}
              />
            )
          }
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
    marginVertical: verticalScale(10),
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
