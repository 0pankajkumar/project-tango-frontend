import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, useColorScheme, StyleSheet } from "react-native";

import WelcomeScreen from "./src/screens/WelcomeScreen";
import Login from "./src/screens/Login";
import Register from "./src/screens/Register";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.mainArea}>
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      {/* <Login /> */}
      {/* <WelcomeScreen /> */}
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  mainArea: {
    flex: 1,
  },
});
