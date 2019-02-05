import * as React from "react";
import { View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 80
  }
});

function Layout({ children }) {
  return <View style={styles.container}>{children}</View>;
}

export default Layout;
