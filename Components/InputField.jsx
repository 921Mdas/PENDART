import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";

const InputField = ({ handleChange, handleBlur, label }) => {
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          style={styles.field}
          placeholder={label}
          handleChange={handleChange}
          handleBlur={handleBlur}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },

  field: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});

export default InputField;
