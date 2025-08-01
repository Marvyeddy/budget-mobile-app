import {
  FlatList,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { BlurView } from "expo-blur";
import { s, vs } from "react-native-size-matters";
import { SearchIcon } from "../../../assets/icons/icons";
import { currencies } from "../../constants/contant";
import { LinearGradient } from "expo-linear-gradient";

type CurrencyType = {
  id: string;
  flag: string;
  code: string;
  sign: string;
};

export default function ModalPopup({
  visible,
  setModalVisible,
  setCurrency,
}: {
  visible: boolean;
  setModalVisible: (visible: boolean) => void;
  setCurrency: (item: CurrencyType) => void;
}) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Pressable
        onPress={() => setModalVisible(false)}
        style={{
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback>
          <BlurView
            experimentalBlurMethod="dimezisBlurView"
            intensity={60}
            tint="systemThinMaterialDark"
            style={styles.modalBox}
          >
            <View style={styles.search}>
              <SearchIcon />
              <View style={styles.search_ctn}>
                <TextInput
                  placeholder="Search currency"
                  placeholderTextColor={"#fffffaaa"}
                  style={styles.search_text}
                />
              </View>
            </View>

            <View style={styles.line} />

            <View style={{ flex: 1, marginTop: vs(12) }}>
              <FlatList
                data={currencies}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: vs(20) }}
                renderItem={({ item }) => (
                  <Pressable
                    style={{ borderRadius: s(8), overflow: "hidden" }}
                    onPressIn={() => setCurrency(item)}
                  >
                    {({ pressed }) => (
                      <>
                        {pressed && (
                          <LinearGradient
                            colors={[
                              "rgba(255,255,255,0.12)",
                              "rgba(255,255,255,0)",
                            ]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={StyleSheet.absoluteFill}
                          />
                        )}
                        <View style={styles.currencyItem}>
                          <Text>{item.flag}</Text>
                          <Text style={styles.currencyCode}>{item.code}</Text>
                        </View>
                      </>
                    )}
                  </Pressable>
                )}
              />
            </View>
          </BlurView>
        </TouchableWithoutFeedback>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalBox: {
    width: s(260),
    height: vs(356),
    marginTop: vs(70),
    marginLeft: s(80),
    borderRadius: s(16),
    overflow: "hidden",
    padding: s(20),
  },
  search: {
    alignItems: "center",
    gap: s(10),
    flexDirection: "row",
    height: vs(16),
    marginBottom: vs(12),
  },
  search_ctn: {
    flex: 1,
  },
  search_text: {
    color: "#fff",
    fontSize: s(14),
    height: vs(40),
  },
  line: {
    width: 270,
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    opacity: 0.1,
    position: "absolute",
    top: vs(48),
  },
  currencyItem: {
    flexDirection: "row",
    padding: s(8),
    gap: s(10),
    height: vs(36),
    alignItems: "center",
    marginBottom: vs(8),
    borderRadius: s(12),
  },
  currencyCode: {
    fontSize: s(20),
    color: "white",
  },
});
