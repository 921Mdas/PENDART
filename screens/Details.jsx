import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  FlatList,
  Alert,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, updateBids } from "../StoreManager/slices/arts.reducer";
import { useNavigation } from "@react-navigation/native";

import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../constants";

import { CircleButton } from "../Components/Button";
import { RectButton } from "../Components/Button";
import { SubInfo } from "../Components/SubInfo";
import DetailsDesc from "../Components/DetailsDesc";
import DetailsBid from "../Components/DetailsBid";
import FocusedStatusBar from "../Components/FocusedStatusBar";
import { TruncBidData } from "../helper";

const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: "100%", height: 373 }}>
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ width: "100%", height: "100%" }}
    />

    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      left={15}
      top={StatusBar.currentHeight + 10}
    />

    <CircleButton
      imgUrl={assets.heart}
      right={15}
      top={StatusBar.currentHeight + 10}
    />
  </View>
);

const Details = ({ route }) => {
  const { data } = route.params;
  const navigation = useNavigation();

  const {
    BiddingCartMenu: { Bids },
  } = useSelector(state => state);
  const dispatch = useDispatch();

  const registerBid = async () => {
    await dispatch(updateBids(data));
    Alert.alert("success", "check your cart or other items", [
      {
        text: "continue Bid",
        onPress: () => navigation.goBack(),
      },
      {
        text: "Done, checkout",
        onPress: () => navigation.navigate("Cart"),
      },
    ]);
  };

  useEffect(() => {
    dispatch(updateCart(Bids.length));
  }, [registerBid]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <View
        style={{
          width: "100%",
          position: "absolute",
          bottom: 0,
          paddingVertical: SIZES.font,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.5)",
          zIndex: 1,
        }}
      >
        <RectButton
          minWidth={170}
          fontSize={SIZES.large}
          handlePress={registerBid}
          {...SHADOWS.dark}
        />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: SIZES.extraLarge * 3,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: SIZES.font }}>
              <DetailsDesc data={data} />

              {data.bids.length > 0 && (
                <Text
                  style={{
                    fontSize: SIZES.font,
                    fontFamily: FONTS.semiBold,
                    color: COLORS.primary,
                  }}
                >
                  Current Bid
                </Text>
              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>
  );
};

export default Details;
