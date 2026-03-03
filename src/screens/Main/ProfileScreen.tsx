import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { navigationStrings } from "../../constants/Lang/navigationStrings";

const ProfileScreen = () => {
  const navigation = useNavigation<any>();

 const handleLogout = async () => {
  await AsyncStorage.removeItem("userToken");
  navigation.replace(navigationStrings.LOGIN);   // ⚠️ name sahi hona chahiye
};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.email}>john@example.com</Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(20),
    justifyContent: "space-between",
  },
  card: {
    marginTop: verticalScale(40),
  },
  name: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
  },
  email: {
    fontSize: moderateScale(16),
    marginTop: verticalScale(5),
    color: "gray",
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    padding: moderateScale(15),
    borderRadius: moderateScale(8),
    alignItems: "center",
  },
  logoutText: {
    color: "white",
    fontSize: moderateScale(16),
    fontWeight: "600",
  },
});