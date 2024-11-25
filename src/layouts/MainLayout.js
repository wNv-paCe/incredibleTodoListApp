import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MainLayout = ({ children }) => {
  const Footer = () => (
    <View style={styles.footer}>
      <Text>Footer Content</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {children}
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  footer: {
    padding: 10,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});

export default MainLayout;
