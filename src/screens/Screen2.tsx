import { FlatList, Pressable, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../components/view/AppSafeView";
import AppText from "../components/text/AppText";
import { s, vs } from "react-native-size-matters";
import { AddCirle, CheckIcon, WalletIcon } from "../../assets/icons/icons";
import { AppColors } from "../styles/color";
import { budget } from "../constants/contant";
import BudgetList from "../components/BudgetList";
import ModalSlide from "../components/modal/ModalSlide";

export default function Screen2() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState("Category");
  const [data, setData] = useState(budget);

  const handleDelete = (id: string) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <AppSafeView style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingBottom: vs(20) }}>
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
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <BudgetList
                  id={item.id}
                  amount={item.amount}
                  image={item.image}
                  percentage={item.percentage}
                  title={item.title}
                  ondelete={handleDelete}
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
      </View>

      {/* Button at the bottom of the screen */}
      <Pressable style={styles.budget_btn}>
        <CheckIcon />
        <AppText
          variant="medium"
          style={{
            color: "white",
            fontSize: 14,
            fontWeight: "500",
          }}
        >
          All done!
        </AppText>
      </Pressable>
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  budget_btn: {
    backgroundColor: "#007AFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: vs(12),
    paddingHorizontal: s(32),
    width: s(147),
    height: vs(42),
    borderRadius: 100,
    gap: 10,
    alignSelf: "center",
    marginBottom: vs(48),
  },

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
    marginTop: vs(8),
  },
});
