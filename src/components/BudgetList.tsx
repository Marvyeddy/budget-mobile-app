import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "./text/AppText";

interface BudgetProps {
  image: string;
  title: string;
  amount: string;
  percentage: string;
}

export default function BudgetList({
  image,
  title,
  amount,
  percentage,
}: BudgetProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Text>{image}</Text>
        <AppText style={styles.content1_txt}>{title}</AppText>
      </View>

      <View style={styles.content2}>
        <AppText variant="medium" style={styles.content2_txt1}>
          {percentage}
        </AppText>
        <AppText style={styles.content2_txt2}>{amount}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: vs(20),
    paddingHorizontal: s(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content1: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  content1_txt: {
    fontSize: 16,
    fontWeight: "400",
  },
  content2: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  content2_txt1: {
    fontSize: 12,
    fontWeight: "500",
    opacity: 0.5,
  },
  content2_txt2: {
    fontSize: 20,
    fontWeight: "400",
  },
});
