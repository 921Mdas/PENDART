import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";

// equivalent to a navigation bar

const HomeHeader = ({ onSearch }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 45, height: 25 }}
        />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            color: COLORS.gold,
          }}
        >
          PENDART
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Icon name="logout" color={COLORS.gray}>
            Exit
          </Icon>
        </TouchableOpacity>

        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 50,
              borderWidth: 2,
              borderColor: COLORS.gold,
            }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Welcome!
        </Text>

        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          African Art virtual Market
        </Text>
      </View>

      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            borderRadius: SIZES.font,
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.small - 2,
          }}
        >
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
