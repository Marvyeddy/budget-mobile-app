import { StyleSheet, View, ViewStyle } from "react-native";
import React, { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";

export default function AppSafeView({
  children,
  style,
}: {
  children: ReactNode;
  style?: ViewStyle;
}) {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#F4F4F4"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{
        flex: 1,
      }}
    >
      {/* Your content goes here */}
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(20),
    paddingTop: vs(20),
  },
});
