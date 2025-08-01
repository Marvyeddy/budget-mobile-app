import {
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { IOS, searchOptions } from "../../constants/contant";
import { BlurView } from "expo-blur";
import GradientText from "../text/GradientText";
import { s, vs } from "react-native-size-matters";
import { CheckIcon, StarIcon } from "../../../assets/icons/icons";
import AppText from "../text/AppText";

interface ModalSlideProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  active: string;
  setActive: (value: "Category" | "Budget") => void;
}

export default function ModalSlide({
  visible,
  setVisible,
  active,
  setActive,
}: ModalSlideProps) {
  const [categoryText, setCategoryText] = useState("");
  const [budgetText, setBudgetText] = useState("");

  return (
    <Modal transparent animationType="slide" visible={visible}>
      <KeyboardAvoidingView
        behavior={IOS ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <Pressable style={{ flex: 1 }} onPress={() => setVisible(false)}>
          <View style={{ flex: 1 }} />

          <TouchableWithoutFeedback>
            <View
              style={{
                height: vs(229),
                backgroundColor: "#00000066",
                marginTop: "auto",
                borderTopLeftRadius: s(16),
                borderTopRightRadius: s(16),
                overflow: "hidden",
              }}
            >
              <BlurView
                style={{ flex: 1, padding: 20 }}
                intensity={60}
                tint="systemThinMaterialDark"
                experimentalBlurMethod="dimezisBlurView"
              >
                <View style={styles.btn_container}>
                  <Pressable
                    style={[
                      styles.category_btn,
                      active === "Category" && styles.active,
                    ]}
                    onPress={() => setActive("Category")}
                  >
                    <GradientText variant="medium" style={styles.category_text}>
                      Category
                    </GradientText>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.category_btn,
                      active === "Budget" && styles.active,
                    ]}
                    onPress={() => setActive("Budget")}
                  >
                    <GradientText variant="medium" style={styles.category_text}>
                      Budget
                    </GradientText>
                  </Pressable>
                </View>

                {active === "Category" ? (
                  <>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                        height: vs(44),
                        marginTop: vs(16),
                        paddingTop: vs(8),
                      }}
                    >
                      <Text
                        style={{
                          fontSize: s(20),
                        }}
                      >
                        ✈️
                      </Text>
                      <TextInput
                        value={categoryText}
                        onChangeText={setCategoryText}
                        style={{
                          fontSize: 20,

                          flex: 1,
                          color: "white",
                          paddingTop: 8,
                        }}
                      />
                    </View>

                    <View style={{ flex: 1 }}>
                      <FlatList
                        data={searchOptions}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                          <View
                            style={{
                              flexDirection: "row",
                              gap: 10,
                              marginTop: vs(16),
                            }}
                          >
                            <StarIcon />
                            <GradientText variant="medium">
                              {item.title}
                            </GradientText>
                          </View>
                        )}
                      />
                    </View>
                  </>
                ) : (
                  <>
                    <View
                      style={{
                        marginTop: vs(16),
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "baseline",
                        height: vs(96),
                        borderWidth: 1,
                        borderColor: "#FFFFFF0A",
                        borderRadius: s(12),
                        paddingTop: vs(32),
                        paddingHorizontal: s(12),
                      }}
                    >
                      <AppText
                        style={{
                          opacity: 0.5,
                          color: "white",
                          fontSize: 14,
                        }}
                      >
                        €
                      </AppText>
                      <TextInput
                        keyboardType="numeric"
                        placeholder="0"
                        placeholderTextColor="#fff"
                        value={budgetText}
                        onChangeText={setBudgetText}
                        style={{
                          fontSize: 40,
                          color: "white",
                          flex: 1,
                          textAlign: "center",
                        }}
                      />
                      <AppText
                        style={{
                          opacity: 0.5,
                          color: "white",
                          fontSize: 14,
                        }}
                      >
                        12%
                      </AppText>
                    </View>

                    <Pressable
                      style={{
                        backgroundColor: "#000A14",
                        flexDirection: "row",
                        alignItems: "center",
                        paddingVertical: vs(8),
                        paddingHorizontal: s(12),
                        width: s(142),
                        height: vs(34),
                        borderRadius: 100,
                        gap: 10,
                        marginLeft: "auto",
                        marginTop: vs(16),
                      }}
                    >
                      <CheckIcon />
                      <AppText
                        variant="medium"
                        style={{
                          color: "white",
                          fontSize: 14,
                        }}
                      >
                        Save changes
                      </AppText>
                    </Pressable>
                  </>
                )}
              </BlurView>
            </View>
          </TouchableWithoutFeedback>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  btn_container: {
    flexDirection: "row",
    alignItems: "center",
    gap: s(10),
  },
  category_btn: {
    paddingHorizontal: s(8),
    paddingVertical: vs(4),

    borderRadius: s(100),
  },
  category_text: {
    fontWeight: "500",
    fontSize: s(12),
  },
  active: {
    backgroundColor: "#FFFFFF1F",
  },
});
