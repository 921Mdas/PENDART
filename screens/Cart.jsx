import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { COLORS } from "../constants/theme";

import BidItem from "../Components/BidItem";

const Cart = () => {
  return (
    <SafeAreaView style={styles.full}>
      <ImageBackground
        source={require("../assets/images/nft01.jpeg")}
        resizeMode="cover"
        style={styles.bgc}
      >
        <LinearGradient
          colors={[COLORS.primary, COLORS.primary]}
          style={styles.container}
        >
          <BidItem />
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: { flex: 1 },
  bgc: { flex: 1 },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    opacity: 0.9,
    marginTop: 20,
  },
});

export default Cart;
