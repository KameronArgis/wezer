import * as React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import COLORS from "../../style/colors";

function Button({ label }) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 0,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: COLORS.white,
    borderRadius: 30
  },
  label: {
    textAlign: "center",
    fontSize: 16,
    color: COLORS.orange,
    fontWeight: "600"
  }
});

export default Button;
