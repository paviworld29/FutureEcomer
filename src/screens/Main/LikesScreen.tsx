import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LikesCard from '../../components/LikesCard';
import {
  COLORS,
  navigationStrings,
} from '../../constants/Lang/navigationStrings';

const LikesScreen = ({ navigation }: any) => {
  const [likedItems, setLikedItems] = useState<any[]>([]);

  useEffect(() => {
    const getLikedItems = async () => {
      try {
        const stored = await AsyncStorage.getItem('liked_products');
        const parsed = stored ? JSON.parse(stored) : [];
        setLikedItems(parsed);
      } catch (error) {
        console.log('Error fetching liked items', error);
      }
    };

    const unsubscribe = navigation.addListener('focus', () => {
      getLikedItems();
    });

    return unsubscribe;
  }, [navigation]);

  const handleUnlike = async (id: string) => {
    try {
      const updated = likedItems.filter(item => item.id !== id);
      setLikedItems(updated);
      await AsyncStorage.setItem('liked_products', JSON.stringify(updated));
    } catch (error) {
      console.log('Error removing like', error);
    }
  };

  if (likedItems.length === 0) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar barStyle="dark-content" />
        <LikesCard
          title="No liked items"
          header="My Likes"
          buttonText="Start Shopping"
          onPress={() => navigation.navigate(navigationStrings.HOME)}
        />
      </SafeAreaView>
    );
  }

  const renderItem = ({ item }: any) => {
    console.log('ITEM DATA:', item);
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(navigationStrings.PRODUCT_DETAILS, {
            productId: item.id,
          })
        }
      >
        <View style={styles.card}>
          <View style={styles.row}>
            {item.thumbnail ? (
              <Image
                source={{ uri: item.thumbnail }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : item.images && item.images.length > 0 ? (
              <Image
                source={{ uri: item.images[0] }}
                style={styles.image}
                resizeMode="cover"
              />
            ) : (
              <View style={styles.imagePlaceholder}>
                <Text style={{ color: '#999' }}>No Image</Text>
              </View>
            )}
            <View style={styles.info}>
              <Text style={styles.title} numberOfLines={2}>
                {item.title}
              </Text>

              <Text style={styles.price}>
                ₹ {item.price ? item.price : '999'}
              </Text>

              <TouchableOpacity
                style={styles.unlikeBtn}
                onPress={() => handleUnlike(item.id)}
              >
                <Text style={styles.unlikeText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}>
        <FlatList
          data={likedItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default LikesScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GRAY,
  },

  container: {
    flex: 1,
    padding: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 14,
    marginBottom: 18,
    elevation: 5,
  },

  row: {
    flexDirection: 'row',
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },

  imagePlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 15,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  info: {
    flex: 1,
    marginLeft: 14,
    justifyContent: 'space-between',
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },

  price: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 6,
  },

  unlikeBtn: {
    marginTop: 12,
    backgroundColor: '#ff4d4d',
    paddingVertical: 6,
    paddingHorizontal: 18,
    borderRadius: 25,
    alignSelf: 'flex-start',
  },

  unlikeText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});
