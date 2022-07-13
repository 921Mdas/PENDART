import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Favourites from "../screens/Favourites";
import Cart from "../screens/Cart";
import { StyleSheet } from "react-native";
import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import Contact from "../screens/Contact";

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  const state = useSelector(state => state);
  const itemNums = state.BiddingCartMenu.Cart;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Fav"
        component={Favourites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="file-tray" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cart" color={color} size={size} />
          ),
          tabBarBadge: itemNums,
          tabBarBadgeStyle: styles.badge,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="credit-card-check"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Exit",
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  badge: {
    fontSize: 10,
  },
});

export default BottomStack;
