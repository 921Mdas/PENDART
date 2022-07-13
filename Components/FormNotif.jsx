import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { EvilIcons, MaterialIcons } from "@expo/vector-icons";

const FormNotif = ({ color, name, message }) => {
  return (
    <View style={styles.notification}>
      <MaterialIcons name={name} size={20} color={color} />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notification: {
    flexDirection: "row",
    marginTop: 5,
  },
  message: { marginLeft: 10 },
});

export default FormNotif;
