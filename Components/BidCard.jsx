import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import { COLORS } from "../constants/theme";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartItem } from "../StoreManager/slices/arts.reducer";

const BidCard = ({ itemData }) => {
  const data = itemData.item;
  const Cart = useSelector(state => state.BiddingCartMenu.Bids);
  const dispatch = useDispatch();

  const handleDelete = id => {
    const filtered = Cart.filter(item => item.id !== id);
    dispatch(deleteCartItem(filtered));
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.itemOne}>
        <Image source={data.image} resizeMode="cover" style={Styles.img} />
      </View>
      <View style={Styles.itemTwo}>
        <View style={Styles.titles}>
          <Text style={Styles.ItemTitle}>{data.name.substring(0, 10)}</Text>
          <Text style={Styles.ItemTitle}>
            <MaterialCommunityIcons
              name="ethereum"
              size={19}
              color={COLORS.white}
            />
            {data.price}
          </Text>
          <Pressable
            style={({ pressed }) =>
              pressed ? { transform: [{ scale: 0.9 }] } : {}
            }
            onPress={() => handleDelete(data.id)}
          >
            <Text>
              <Ionicons name="ios-trash-bin" size={24} color="#890404" />
            </Text>
          </Pressable>
        </View>

        <Text style={Styles.ItemPrice} numberOfLines={2}>
          {data.description}
        </Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    borderColor: COLORS.gray,
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10,
  },
  titles: {
    borderColor: "white",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 5,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
  },
  ItemTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  itemOne: {
    flex: 1,
  },
  itemTwo: {
    flex: 3,
  },
  ItemPrice: {
    color: COLORS.white,
  },
});

export default BidCard;
