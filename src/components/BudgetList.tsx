import {
  StyleSheet,
  Text,
  View,
  PanResponder,
  Pressable,
  Animated,
} from "react-native";
import React from "react";
import { s, vs } from "react-native-size-matters";
import AppText from "./text/AppText";
import { DeleteIcon } from "../../assets/icons/icons";

interface BudgetProps {
  id: string;
  image: string;
  title: string;
  amount: string;
  percentage: string;
  ondelete: (id: string) => void;
}

export default function BudgetList({
  id,
  image,
  title,
  amount,
  percentage,
  ondelete,
}: BudgetProps) {
  const translateX = new Animated.Value(0);
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx < 0) {
        translateX.setValue(gestureState.dx);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx < -50) {
        Animated.spring(translateX, {
          toValue: -110,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.spring(translateX, {
          toValue: 0,
          useNativeDriver: true,
        }).start();
      }
    },
  });

  return (
    <View>
      <Animated.View
        style={{
          flex: 1,
          transform: [
            {
              translateX: translateX,
            },
          ],
        }}
      >
        <View style={styles.container} {...panResponder.panHandlers}>
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

        <Pressable style={styles.delete_btn} onPress={() => ondelete(id)}>
          <DeleteIcon />
          <AppText
            variant="medium"
            style={{
              color: "white",
              fontSize: s(16),
              fontWeight: "400",
            }}
          >
            Delete
          </AppText>
        </Pressable>
      </Animated.View>
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
  delete_btn: {
    gap: s(8),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FF3B30",
    flexDirection: "row",
    paddingVertical: vs(20),
    paddingHorizontal: s(16),
    position: "absolute",
    right: vs(-100),
  },
});
