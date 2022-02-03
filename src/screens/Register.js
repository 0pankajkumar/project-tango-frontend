import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  SafeAreaView,
  Text,
  Button,
} from "react-native";

import DatePicker from "react-native-date-picker";

function Register() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={styles.page}>
      <View>
        <Text>Register</Text>
        <TextInput
          style={styles.input}
          onChangeText={null}
          placeholder="Name"
        />

        <TextInput
          style={styles.input}
          onChangeText={null}
          placeholder="Mobile Number"
        />

        <DatePicker
          style={{ width: 200 }}
          date={new Date()}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate="2016-05-01"
          maxDate="2016-06-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {
            this.setState({ date: date });
          }}
        />

        <Button title="Generate OTP" color="#3128b5" />
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Register;
