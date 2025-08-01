import { StyleSheet, Text, TextProps, TextStyle, View } from "react-native";
import React, { ReactNode } from "react";
import { s } from "react-native-size-matters";

interface AppTextProps extends TextProps {
  children: ReactNode;
  style?: TextStyle | TextStyle[];
  variant?: "medium" | "regular";
}

export default function AppText({
  children,
  style,
  variant = "regular",
  ...props
}: AppTextProps) {
  return (
    <View>
      <Text {...props} style={[styles[variant], style]}>
        {children}
      </Text>
    </View>
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
