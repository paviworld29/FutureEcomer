import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import images from '../../assets/images';

const DATA = [
  { id: '1', title: 'Three layered Drawer', price: 5500, rating: 4.5 },
  { id: '2', title: 'Three layered Drawer', price: 5500, rating: 4.5 },
  { id: '3', title: 'Three layered Drawer', price: 5500, rating: 4.5 },
  { id: '4', title: 'Three layered Drawer', price: 5500, rating: 4.5 },
  { id: '5', title: 'Three layered Drawer', price: 5500, rating: 4.5 },
  { id: '6', title: 'Three layered Drawer', price: 5500, rating: 4.5 },
];

const HomeScreen = () => {
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.ratingRow}>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
        <Text style={styles.heart}>♡</Text>
      </View>

      <Image
        source={images.HOMEICON}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>₱ {item.price}.00</Text>

      <TouchableOpacity style={styles.addBtn}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Explore</Text>

      {/* Search + Icons Row */}
      <View style={styles.searchRow}>
        <TextInput
          placeholder="Search"
          style={styles.searchInput}
        />
        <View style={styles.iconBox}>
          <Text>⚙️</Text>
        </View>
        <View style={styles.iconBox}>
          <Text>☷</Text>
        </View>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E8E8',
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 12,
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 45,
    marginRight: 10,
  },
  iconBox: {
    width: 40,
    height: 45,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 6,
  },
  card: {
    backgroundColor: '#fff',
    width: '48%',
    borderRadius: 16,
    padding: 10,
    marginBottom: 16,
  },
  ratingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rating: {
    fontSize: 12,
  },
  heart: {
    fontSize: 16,
    color: '#888',
  },
  image: {
    height: 100,
    marginVertical: 10,
  },
  title: {
    fontSize: 13,
  },
  price: {
    fontWeight: '600',
    marginTop: 4,
  },
  addBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#F1C40F',
    width: 28,
    height: 28,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus: {
    fontWeight: 'bold',
  },
});