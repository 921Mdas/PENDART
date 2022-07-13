import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native";
import React, { useEffect } from "react";
import { getPurchase } from "../util/http";
import { useSelector, useDispatch } from "react-redux";
import { loadPurchases } from "../StoreManager/slices/arts.reducer";
import { COLORS } from "../constants/theme";
import Title from "../Components/Title";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import * as Victoire from "victory-native";

const Favourites = () => {
  const dispatch = useDispatch();
  const { purchases } = useSelector(state => state.BiddingCartMenu);
  const purchaseData = purchases[0];

  const data = [
    {
      month: "march",
      earned: 100,
    },
    {
      month: "April",
      earned: 300,
    },
    {
      month: "May",
      earned: 200,
    },
    {
      month: "June",
      earned: 300,
    },
    {
      month: "July",
      earned: 200,
    },
    {
      month: "August",
      earned: 120,
    },
  ];

  useEffect(() => {
    async function loadCardPurchase() {
      dispatch(loadPurchases(await getPurchase()));
    }

    loadCardPurchase();
  }, []);

  return (
    <SafeAreaView style={styles.full}>
      <View style={styles.container}>
        <Title iconname={"receipt"}>Recent Transactions</Title>
        <View style={{ marginRight: 20 }}>
          <Text style={styles.text2}>Estimate in USD</Text>
          <Victoire.VictoryChart theme={Victoire.VictoryTheme.material}>
            <Victoire.VictoryLine
              style={{ data: { stroke: "white", width: 25 } }}
              interpolation="natural"
              animate
              data={data}
              x="month"
              y="earned"
            />
          </Victoire.VictoryChart>
        </View>
        <View style={styles.purchases}>
          <Text style={styles.text}>
            These transactions are based on your recent checkouts
          </Text>
          <FlatList
            data={purchaseData}
            keyExtractor={item => item.id}
            renderItem={itemData => {
              const creditCheck = itemData.item.creditcard;
              const sorted = creditCheck.match(/.{1,3}/g).join("-");

              return (
                <View style={styles.container}>
                  <View style={styles.credit}>
                    <Ionicons name="card" size={24} color={COLORS.gray} />
                    <Text style={styles.text}>{sorted}</Text>
                  </View>
                  <View style={styles.date}>
                    <Ionicons name="calendar" size={24} color={COLORS.gray} />
                    <Text style={styles.text}>{itemData.item.date}</Text>
                  </View>
                  <View style={styles.statement}>
                    <FontAwesome5
                      name="creative-commons-nc"
                      size={24}
                      color={COLORS.gray}
                    />
                    <Text style={styles.text}>
                      eth: {itemData.item.amount}{" "}
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderColor: "red",
  },
  full: {
    flex: 1,
  },
  credit: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
  },
  date: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
  },
  statement: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "white",
    marginTop: 2,
  },
  text: {
    color: "white",
    marginLeft: 10,
  },
  purchases: {
    marginTop: 20,
    borderColor: "white",
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: COLORS.primary,
  },
  text2: {
    color: "white",
    marginLeft: 10,
    marginTop: 15,
  },
});

export default Favourites;
