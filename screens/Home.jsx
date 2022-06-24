import React, { useState } from "react";
import { Text, View, SafeAreaView, FlatList } from "react-native";
import { COLORS } from "../constants";
import { NFTData } from "../constants/dummy";
import NFTCard from "../Components/NFTCard";
import FocusedStatusBar from "../Components/FocusedStatusBar";
import HomeHeader from "../Components/HomeHeader";

// Flatlist is similar to map function  - renders items as they are about to appear on screen and delete them off view
// uses lazy loading
// view is similar to a div
// safearea allows to render app only on the boundaries of the screen to avoid overflowing
// flex 1 : take all available space
// every item inside it becomes a flex item
const Home = () => {
  const [newData, setNewData] = useState(NFTData);
  const onSearch = e => {
    let filteredList = newData.filter(art => art.name.startsWith(e));
    e.length > 0 ? setNewData(filteredList) : setNewData(NFTData);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={newData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={onSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
