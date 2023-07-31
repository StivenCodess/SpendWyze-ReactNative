import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MainScreen from "./screens/MainScreen";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "roboto-thin": require("./assets/fonts/Roboto-Thin.ttf"),
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "roboto-black": require("./assets/fonts/Roboto-Black.ttf"),
    });
    setFontsLoaded(true);
  };

  useEffect(() => {
    if (!fontsLoaded) loadFonts();
  });

  if (!fontsLoaded) return null;

  return <MainScreen />;
}
