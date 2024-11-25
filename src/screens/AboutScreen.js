import MainLayout from "../layouts/MainLayout";
import React from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const AboutScreen = ({ navigation }) => {
  const currentDate = new Date().toLocaleDateString();
  const handleNamePress = () => {
    Alert.alert("Hello!", "You found the Easter Egg!");
  };

  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.appName}>To-Do App</Text>
        <TouchableOpacity onPress={handleNamePress}>
          <Text style={styles.creator}>Created by Charlie</Text>
        </TouchableOpacity>
        <Text style={styles.date}>Date: {currentDate}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </MainLayout>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
  },
  appName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  creator: {
    fontSize: 18,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
    color: "#555",
  },
});
