import * as React from "react";
import { View } from "react-native";
import COLORS from "../../style/colors";
import { SubTitle } from "../../components/subtitle";

function DayForecast({ temperature, iconType, type }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>{iconType}</View>
      <Text style={styles.temperature}>{temperature}°</Text>
      <SubTitle style={styles.icon}>{type}</SubTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {},
  temperature: {
    fonsSize: 70,
    color: COLORS.white
  },
  text: {
    fonsize: 14
  }
});

export default DayForecast;
