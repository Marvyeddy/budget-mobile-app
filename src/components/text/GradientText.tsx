import { StyleSheet, Text, TextProps, TextStyle, View } from "react-native";
import React, { ReactNode } from "react";
import { s } from "react-native-size-matters";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

interface GradientTextProps extends TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "medium" | "regular";
}

export default function GradientText({
  children,
  style,
  variant = "regular",
  ...props
}: GradientTextProps) {
  return (
    <MaskedView
      maskElement={
        <Text {...props} style={[styles[variant], { color: "white" }, style]}>
          {children}
        </Text>
      }
    >
      <LinearGradient
        colors={["#CCCCCC", "#FFFFFF", "#cccccc"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.7, y: 0.1 }}
      >
        <Text
          {...props}
          style={[styles[variant], { color: "white", opacity: 0 }, style]}
        >
          {children}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: "GeistRegular",
  },
  medium: {
    fontFamily: "GeisthMedium",
  },
});
