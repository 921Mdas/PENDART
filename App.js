import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";
import * as Splash from "expo-splash-screen";
import { Provider } from "react-redux";
import { store } from "./StoreManager/store";

import Details from "./screens/Details";
import Login from "./screens/Login";

// stacks
import BottomStack from "./navigation/BottomTab";

// init stack that will be showing pages stacked on top of each other and popping them
const Stack = createStackNavigator();

// not sure what this does
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  // initialise the fonts we are planning to use
  // icons, images, etc that you can place inside the asset folder
  const [loaded] = useFonts({
    InterBold: require("./assets/fonts/Inter-Bold.ttf"),
    InterSemiBold: require("./assets/fonts/Inter-SemiBold.ttf"),
    InterMedium: require("./assets/fonts/Inter-Medium.ttf"),
    InterRegular: require("./assets/fonts/Inter-Regular.ttf"),
    InterLight: require("./assets/fonts/Inter-Light.ttf"),
  });

  // if the font is not loaded return null once it becomes loaded, return our app

  if (!loaded) {
    Splash.preventAutoHideAsync();
  } else {
    Splash.hideAsync();
  }

  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Login"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="bottom" component={BottomStack} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
