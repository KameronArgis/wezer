import * as React from "react";
import { StyleSheet, Text } from "react-native";
import COLORS from "../../style/colors";

const styles = StyleSheet.create({
  title: {
    marginTop: 4,
    color: COLORS.white,
    fontSize: 42,
    fontFamily: "robotoBold"
  }
});

export function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
