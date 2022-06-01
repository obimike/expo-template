import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Splash = () => {
  return (
    <View styles={styles.container}>
      <Text>Splash Screen</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f30",
    alignItems: "center",
    justifyContent: "center",
  },
});
