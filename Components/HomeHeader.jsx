import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

// equivalent to a navigation bar
const styles = StyleSheet.create({
  main: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 25,
  },
  profileContainer: { width: 45, height: 45, borderRadius: 50 },
  profilePic: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: COLORS.gold,
  },
  badge: {
    position: "absolute",
    width: 15,
    height: 15,
    bottom: 0,
    right: 0,
  },
  searchBar: {
    width: "100%",
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
});

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Image
          source={require("../assets/images/Pendart.png")}
          resizeMode="contain"
          style={styles.logo}
        />

        <View style={styles.profileContainer}>
          <Image
            source={assets.person01}
            resizeMode="cover"
            style={styles.profilePic}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={styles.badge}
          />
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ marginVertical: SIZES.font }}>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small,
              color: COLORS.white,
            }}
          >
            Welcome 😃
          </Text>
          <Text
            style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.large,
              color: COLORS.white,
              marginTop: SIZES.base / 2,
            }}
          >
            Place your Bid now!
          </Text>
        </View>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [
                  { transform: [{ scale: 0.9 }] },
                  ,
                  { marginTop: 20, marginRight: 10 },
                ]
              : { marginTop: 20, marginRight: 10 }
          }
          onPress={() => navigation.navigate("Login")}
        >
          <Ionicons name="log-out-outline" size={24} color={COLORS.gold} />
        </Pressable>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View style={styles.searchBar}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search for unique items"
            placeholderTextColor="white"
            style={{ flex: 1, color: "white" }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
