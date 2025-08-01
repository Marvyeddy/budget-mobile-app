import { FlatList, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../components/view/AppSafeView";
import AppText from "../components/text/AppText";
import { s, vs } from "react-native-size-matters";
import { AddCirle, WalletIcon } from "../../assets/icons/icons";
import { AppColors } from "../styles/color";
import { budget } from "../constants/contant";
import BudgetList from "../components/BudgetList";
import ModalSlide from "../components/modal/ModalSlide";

export default function Screen2() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("Category");

  return (
    <AppSafeView>
      <AppText variant="medium" style={styles.header_text}>
        Let’s create a monthly {"\n"}budget for you
      </AppText>

      <View>
        <View style={styles.wallet_ctn}>
          <WalletIcon />
          <AppText style={styles.wallet_text}>£4,437 Left</AppText>
        </View>

        <View style={styles.list_ctn}>
          <FlatList
            data={budget}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <BudgetList
                amount={item.amount}
                image={item.image}
                percentage={item.percentage}
                title={item.title}
              />
            )}
          />
        </View>

        <Pressable style={styles.btn} onPress={() => setVisible(true)}>
          <AddCirle />
          <AppText style={styles.btn_txt} variant="medium">
            Add another budget
          </AppText>
        </Pressable>

        <ModalSlide
          active={active}
          setActive={setActive}
          visible={visible}
          setVisible={setVisible}
        />
      </View>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  header_text: {
    fontSize: s(24),
    fontWeight: "500",
    letterSpacing: s(-0.04),
    marginBottom: vs(32),
  },
  wallet_ctn: {
    flexDirection: "row",
    marginLeft: "auto",
    gap: s(8),
    marginBottom: vs(12),
  },
  wallet_text: {
    color: AppColors.light_gray,
  },
  list_ctn: {
    borderRadius: s(16),
    backgroundColor: "#f9f9f9",
    height: vs(300),
  },
  btn_txt: {
    fontSize: 14,
    fontWeight: "500",
  },
  btn: {
    flexDirection: "row",
    alignSelf: "flex-start",
    borderRadius: s(12),
    gap: 10,
    paddingVertical: vs(4),
    paddingHorizontal: s(8),
    backgroundColor: "#ffffff",
  },
});
