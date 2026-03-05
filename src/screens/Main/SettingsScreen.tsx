import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { COLORS } from '../../constants/Lang/navigationStrings';
import { logout } from '../../redux/services/authSlice';

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('userToken');
              dispatch(logout());
              console.log('Token removed successfully');
            } catch (error) {
              console.log(error);
            }
          },
        },
      ],
      { cancelable: true },
    );
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.LIGHT_GRAY }}
      edges={['top']}
    >
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Settings</Text>

        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>

          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>Change Password</Text>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>

          <View style={styles.item}>
            <Text style={styles.itemText}>Notifications</Text>
            <Switch value={notifications} onValueChange={setNotifications} />
          </View>

          <View style={styles.item}>
            <Text style={styles.itemText}>Dark Mode</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </View>

        {/* Other Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other</Text>

          <TouchableOpacity style={styles.item}>
            <Text style={styles.itemText}>Privacy Policy</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    fontSize: 28,
    fontWeight: 'bold',
    margin: 20,
  },

  section: {
    backgroundColor: '#fff',
    marginBottom: 20,
    paddingVertical: 10,
    borderRadius: 20,
    margin: 20,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginHorizontal: 20,
    marginBottom: 10,
  },

  item: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemText: {
    fontSize: 16,
  },

  logoutBtn: {
    backgroundColor: COLORS.BLACK,
    marginHorizontal: 70,
    marginTop: 10,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
