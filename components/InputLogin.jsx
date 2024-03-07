import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputLogin = ({ placeholder, onChangeText, value }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      autoCapitalize="none"
      autoCorrect={false}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
    width: 250,
    borderRadius: 10,
    marginHorizontal: 20,
  },
});

export default InputLogin;
