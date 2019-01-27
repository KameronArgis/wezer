import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SubTitle } from "../../components/subtitle";
import { Title } from "../../components/title";
import GearIcon from "../../components/icons/gear";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 0
  },
  info: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

function Header({ city, date, onClickOptions }) {
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Title>{city}</Title>
        <TouchableOpacity onPress={onClickOptions}>
          <GearIcon />
        </TouchableOpacity>
      </View>
      <SubTitle>{date}</SubTitle>
    </View>
  );
}

export default Header;
