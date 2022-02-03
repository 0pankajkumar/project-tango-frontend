import React from "react";
import { StyleSheet, View, Button, Platform, SafeAreaView } from "react-native";

function Login() {
  return (
    <SafeAreaView style={styles.page}>
      <View>
        <View style={styles.buttonStyle}>
          <Button title="Log in" color="#3128b5" />
        </View>

        <View style={styles.buttonStyle}>
          <Button title="Register" color="#3128b5" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? 80 : 0,
  },
  buttonStyle: {
    margin: 30,
    borderRadius: 100,
  },
});

export default Login;
