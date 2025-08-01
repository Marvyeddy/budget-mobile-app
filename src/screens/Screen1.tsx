import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import AppSafeView from "../components/view/AppSafeView";
import { SettingsIcon } from "../../assets/icons/icons";
import AppText from "../components/text/AppText";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";
import { s, vs } from "react-native-size-matters";
import { AppColors } from "../styles/color";
import AntDesign from "@expo/vector-icons/AntDesign";

import ModalPopup from "../components/modal/ModalPopup";
import { useNavigation } from "@react-navigation/native";

export default function Screen1() {
  const [currency, setCurrency] = useState({
    code: "GBP",
    flag: "🇬🇧",
    sign: "£",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const navigator = useNavigation<any>();

  return (
    <AppSafeView>
      <View style={styles.header_ctn}>
        <SettingsIcon />

        <MaskedView
          maskElement={
            <AppText
              style={[styles.header, { backgroundColor: "transparent" }]}
            >
              Setting things up...
            </AppText>
          }
        >
          <View style={StyleSheet.absoluteFill}>
            <LinearGradient
              colors={["#999999", "#FFFFFF", "#CCCCCC"]}
              locations={[0.2624, 0.4798, 0.6734]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={StyleSheet.absoluteFill}
            />

            <LinearGradient
              colors={[
                "rgba(0, 0, 0, 0.4)",
                "rgba(102, 102, 102, 0.4)",
                "rgba(0, 0, 0, 0.4)",
              ]}
              locations={[0.2624, 0.4798, 0.6734]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={StyleSheet.absoluteFill}
            />
          </View>
          {/* Invisible text to size the gradient */}
          <Text style={[styles.header, { opacity: 0 }]}>
            Setting things up...
          </Text>
        </MaskedView>
      </View>

      <AppText style={styles.prompt} variant="medium">
        How much do you {"\n"} earn per month?
      </AppText>

      <View style={styles.inputBox}>
        <Pressable
          style={[
            styles.currency_ctn,
            modalVisible && { backgroundColor: "black" },
          ]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={[styles.currency, modalVisible && { color: "white" }]}>
            {currency.flag} {currency.sign}
          </Text>
        </Pressable>

        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="0"
          placeholderTextColor="#999"
        />
        <Text style={styles.decimal}>.00</Text>
      </View>

      <Pressable
        style={styles.btn}
        onPress={() => navigator.navigate("budget")}
      >
        <AppText style={styles.btn_text} variant="medium">
          What’s next
        </AppText>
        <AntDesign name="right" size={10} color="white" />
      </Pressable>

      <Text style={styles.hint}>
        It's okay to use an estimate. You can always update your earnings each
        month.
      </Text>

      <ModalPopup
        visible={modalVisible}
        setModalVisible={setModalVisible}
        setCurrency={setCurrency}
      />
    </AppSafeView>
  );
}

const styles = StyleSheet.create({
  header_ctn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: s(8),
  },
  header: {
    fontSize: s(12),
    textTransform: "uppercase",
    fontWeight: "400",
    letterSpacing: s(12 * 0.12),
  },
  prompt: {
    marginTop: vs(76),
    marginBottom: vs(32),
    fontSize: s(24),
    textAlign: "center",
    letterSpacing: s(24 * -0.04),
    fontWeight: "500",
    color: AppColors.dark,
  },
  currency_ctn: {
    paddingVertical: vs(4),
    paddingHorizontal: s(8),
    backgroundColor: "white",
    borderRadius: s(12),
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "baseline",
    backgroundColor: "#F8F8F8",
    borderRadius: s(12),
    padding: s(12),
    height: s(76),
    width: "100%",
    justifyContent: "space-between",
    marginBottom: vs(95),
  },
  currency: {
    fontSize: s(14),
    fontWeight: "500",
  },
  input: {
    fontSize: s(36),
    fontWeight: "300",
    textAlign: "center",
    flex: 1,
    height: vs(52),
  },
  decimal: {
    fontSize: s(18),
    color: "#999",
  },
  btn: {
    paddingVertical: vs(12),
    paddingHorizontal: s(32),
    backgroundColor: AppColors.primary,
    flexDirection: "row",
    gap: s(10),
    alignItems: "center",
    width: s(168),
    justifyContent: "center",
    borderRadius: s(100),
    marginHorizontal: "auto",
  },
  btn_text: {
    color: "white",
    fontSize: s(14),
  },
  hint: {
    color: AppColors.light_gray,
    textAlign: "center",
    fontSize: s(12),
    lineHeight: s(18),
    marginVertical: vs(23),
    paddingHorizontal: s(20),
  },
});
