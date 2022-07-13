import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";

import ContactForm from "../Components/ContactForm";
import Title from "../Components/Title";
import { COLORS } from "../constants/theme";

const Contact = () => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <View>
          <Title iconname={"card"}>Checkout</Title>
        </View>
        <View style={styles.main}>
          <ContactForm />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    flex: 1,
  },
});

export default Contact;
