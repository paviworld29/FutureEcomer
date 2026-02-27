import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LikesCard from '../../components/LikesCard';
import { navigationStrings } from '../../constants/Lang/navigationStrings';

const LikesScreen = ({ navigation }: any) => {
  const [likedItems, setLikedItems] = useState<any[]>([]);

  // 🔹 Fetch liked items
  useEffect(() => {
    const getLikedItems = async () => {
      try {
        const stored = await AsyncStorage.getItem('liked_products');
        const parsed = stored ? JSON.parse(stored) : [];
        console.log('geqhjdfbeqwhjbe', parsed);
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

  // 🔹 Remove Like
  const handleUnlike = async (id: string) => {
    try {
      const updated = likedItems.filter(item => item.id !== id);
      setLikedItems(updated);
      await AsyncStorage.setItem('liked_products', JSON.stringify(updated));
    } catch (error) {
      console.log('Error removing like', error);
    }
  };

  // 🔹 Empty State
  if (likedItems.length === 0) {
    return (
      <LikesCard
        title="No liked items"
        header="My Likes"
        buttonText="Start Shopping"
        onPress={() => navigation.navigate(navigationStrings.HOME)}
      />
    );
  }

  // 🔹 Render Each Item
  const renderItem = ({ item }: any) => {
    return (
      <View style={styles.card}>
        <Text style={styles.title}>{item.title}</Text>

        <TouchableOpacity
          style={styles.unlikeBtn}
          onPress={() => handleUnlike(item.id)}
        >
          <Text style={styles.unlikeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={likedItems}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default LikesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  unlikeBtn: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  unlikeText: {
    color: '#fff',
    fontSize: 14,
  },
});
