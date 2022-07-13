import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Pressable,
  ScrollView,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Title from "./Title";
import BidCard from "./BidCard";
import { useSelector } from "react-redux";
import { COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const BidItem = ({ data }) => {
  const CartItems = useSelector(state => state.BiddingCartMenu.Bids);
  const navigation = useNavigation();

  const Total = CartItems.reduce((acc, cur) => {
    return (acc += cur.price);
  }, 0);

  if (CartItems.length === 0) {
    return (
      <View>
        <View>
          <Title>No Bids Yet</Title>
        </View>
        <View style={styles.btn}>
          <Button
            title="Bid Now"
            color={COLORS.gold}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    );
  }
  return (
    <View>
      <View>
        <Title iconname={"cart"}>MY BIDS</Title>
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={CartItems}
          keyExtractor={item => item.id}
          renderItem={itemData => {
            return <BidCard itemData={itemData} />;
          }}
        />
      </View>

      <View style={styles.TotalContainer}>
        <Text style={styles.Total}>
          <MaterialCommunityIcons
            name="ethereum"
            size={19}
            color={COLORS.gold}
          />
          {Total}
        </Text>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.cancelbtn, { transform: [{ scale: 0.9 }] }]
              : [styles.cancelbtn]
          }
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.cancel}>Cancel</Text>
        </Pressable>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.pressCheck, { transform: [{ scale: 0.9 }] }]
              : styles.pressCheck
          }
          android_ripple={{ color: "white" }}
          onPress={() => navigation.navigate("Contact", { total: Total })}
        >
          <Text style={styles.checkout}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginTop: 20,
    paddingVertical: 20,
  },
  cancelbtn: {
    borderWidth: 1,
    borderColor: COLORS.white,
    marginHorizontal: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cancel: {
    color: COLORS.white,
    fontSize: 15,
  },
  pressCheck: {
    paddingHorizontal: 20,
    backgroundColor: COLORS.gold,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  checkout: {
    color: COLORS.primary,
    fontSize: 15,
    fontWeight: "bold",
  },
  Total: {
    color: COLORS.gold,
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    backgroundColor: COLORS.gray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    alignSelf: "flex-end",
    overflow: "hidden",
    marginRight: 10,
  },
  TotalContainer: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  btn: {
    backgroundColor: COLORS.gray,
    borderRadius: 10,
    width: 100,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default BidItem;
