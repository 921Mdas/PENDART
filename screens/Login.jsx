import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { COLORS, FONTS, SIZES, assets } from "../constants";
import { Icon } from "react-native-elements";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useNavigation } from "@react-navigation/native";

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
            style={{
              width: 100,
              height: 100,
              marginBottom: 10,
              borderWidth: 2,
              borderColor: COLORS.gray,
              borderRadius: 50,
              position: "relative",
              right: -30,
            }}
            resizeMode="contain"
          />
          <Image
            source={assets.nft01}
            style={{
              width: 100,
              height: 100,
              marginBottom: 10,
              borderWidth: 2,
              borderRadius: 50,
              borderColor: COLORS.gray,
            }}
            resizeMode="cover"
          />
          <Image
            source={assets.nft03}
            style={{
              width: 100,
              height: 100,
              marginBottom: 10,
              borderWidth: 2,
              borderColor: COLORS.gray,
              borderRadius: 50,
              position: "relative",
              right: 30,
            }}
            resizeMode="cover"
          />
        </View>

        <View style={{ position: "absolute", bottom: 50, right: 50 }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Icon
              name="forward"
              type="entypo"
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

export default Login;
