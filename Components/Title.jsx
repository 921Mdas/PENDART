import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import { Ionicons } from "@expo/vector-icons";

const Title = ({ children, iconname }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconname} color={COLORS.gold} size={24} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: COLORS.gray,
    backgroundColor: COLORS.gray,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default Title;
