import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";

import { COLORS, assets } from "../constants";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: COLORS.primary,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Image
          source={assets.eth}
          style={{ width: 100, height: 100, marginBottom: 30 }}
          resizeMode="contain"
        />

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Image
            source={assets.nft04}
            style={[styles.img, styles.imgLeft]}
            resizeMode="cover"
          />
          <Image source={assets.nft01} style={styles.img} resizeMode="cover" />
          <Image
            source={assets.nft03}
            style={[styles.img, styles.imgRight]}
            resizeMode="cover"
          />
        </View>

        <Image
          source={assets.eth}
          style={{ width: 100, height: 100, marginTop: 30 }}
          resizeMode="contain"
        />

        <View style={{ position: "absolute", bottom: 50, right: 50 }}>
          <TouchableOpacity onPress={() => navigation.navigate("bottom")}>
            <Ionicons
              name="arrow-forward-circle-outline"
              size={40}
              color={COLORS.gray}
              style={{
                zIndex: 3,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: COLORS.gray,
  },
  imgRight: {
    position: "relative",
    right: 30,
  },
  imgLeft: {
    position: "relative",
    right: -30,
  },
});

export default Login;
