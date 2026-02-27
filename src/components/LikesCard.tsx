import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface LikesCardProps {
  header: string;
  title: string;
  buttonText: string;
  onPress?: () => void;
}

const LikesCard: React.FC<LikesCardProps> = ({
  header,
  title,
  buttonText,
  onPress,
}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.header}>{header}</Text>

        <View style={styles.content}>

          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png' }}
            style={styles.heartImage}
            resizeMode="contain"
          />

          <Text style={styles.title}>{title}</Text>


          <Text style={styles.subtitle}>
            Start adding items you love to see them here
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LikesCard;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 16,
    padding: 24,
    borderRadius: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  header: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    color: "#000",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heartImage: {
    width: 80,
    height: 80,
    marginBottom: 20,
    tintColor: '#ff6b6b',
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#999",
    marginBottom: 30,
    textAlign: "center",
    paddingHorizontal: 20,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});