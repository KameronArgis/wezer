import * as React from "react";
import { StyleSheet, Text } from "react-native";
import COLORS from "../../style/colors";

const styles = StyleSheet.create({
  title: {
    color: COLORS.white,
    fontSize: 42,
    fontFamily: "nunitoBold"
  }
});

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
