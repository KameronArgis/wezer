import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import COLORS from "../../style/colors";
import { SubTitle } from "../../components/subtitle";

function DayForecast({ temperature, iconType, weatherType }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{iconType}</Text>
      <View style={styles.textContainer}>
        <View style={styles.temperatureContainer}>
          <Text style={styles.temperature}>{temperature}</Text>
          <Text style={styles.celsius}>°</Text>
        </View>
        <SubTitle style={styles.text}>{weatherType}</SubTitle>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column"
  },
  temperatureContainer: {
    display: "flex",
    flexDirection: "row"
  },
  temperature: {
    fontSize: 150,
    color: COLORS.white
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    marginTop: -10
  },
  celsius: {
    color: COLORS.white,
    fontSize: 50,
    marginTop: 20
  }
});

export default DayForecast;
