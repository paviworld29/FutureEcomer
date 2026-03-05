import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from '../../assets/images';
import { COLORS } from '../../constants/Lang/navigationStrings';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Image source={images.SOFAIMG} style={styles.avatar} />

          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@email.com</Text>

          <TouchableOpacity style={styles.editBtn}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Info</Text>

          <View style={styles.item}>
            <Text style={styles.label}>Phone</Text>
            <Text style={styles.value}>+91 9876543210</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Location</Text>
            <Text style={styles.value}>India</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Member Since</Text>
            <Text style={styles.value}>Jan 2024</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <View style={styles.item}>
            <Text style={styles.label}>Subscription</Text>
            <Text style={styles.value}>Premium</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.label}>Status</Text>
            <Text style={styles.value}>Active</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.LIGHT_GRAY,
  },
  container: {
    // paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 30,
    // marginBottom: 20,
    borderRadius: 20,
    margin: 20,
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    // marginBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#777',
    marginBottom: 15,
  },
  editBtn: {
    backgroundColor: '#007bff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 6,
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    // marginBottom: 20,
    margin: 20,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
    marginBottom: 10,
    color: '#666',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  label: {
    fontSize: 15,
    color: '#333',
  },
  value: {
    fontSize: 15,
    color: '#666',
  },
});
