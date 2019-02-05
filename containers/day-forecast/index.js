import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SubTitle } from "../../components/subtitle";
import WeatherIcon from "../../components/weather-icon";
import COLORS from "../../style/colors";

function DayForecast({ temperature, iconType, weatherType }) {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <WeatherIcon type={iconType} height={100} width={100} />
      </View>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  textContainer: {
    display: "flex",
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
  },
  icon: {
    marginBottom: -40
  }
});

export default DayForecast;
