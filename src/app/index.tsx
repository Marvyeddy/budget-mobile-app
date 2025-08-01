import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Screen1 from "../screens/Screen1";

export default function Home() {
  const [fontsLoaded] = useFonts({
    GeistRegular: require("../fonts/Geist-Regular.ttf"),
    GeistMedium: require("../fonts/Geist-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size={20} />;
  }

  return (
    <>
      <Screen1 />
    </>
  );
}

const styles = StyleSheet.create({});
