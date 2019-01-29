import * as React from "react";
import { StyleSheet, Text } from "react-native";
import COLORS from "../../style/colors";

const styles = StyleSheet.create({
  title: {
    color: COLORS.brown,
    fontSize: 18,
    fontFamily: "roboto"
  }
});

export function SubTitle({ children, style }) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}
