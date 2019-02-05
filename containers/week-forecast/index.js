import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { WEATHER_TYPE_MAP } from "../../config/forecast";
import COLORS from "../../style/colors";
import WeatherIcon from "../../components/weather-icon";

function DayComponent({ label, weatherType, tempHigh, tempLow }) {
  return (
    <View style={styles.dayContainer}>
      <Text style={styles.dayText}>{label}</Text>
      <WeatherIcon type={weatherType} width={50} height={50} />
      <Text style={styles.dayText}>{tempHigh}</Text>
      <Text style={[styles.dayText, styles.tempLow]}>{tempLow}</Text>
    </View>
  );
}

function WeekForecast({ forecast }) {
  return (
    <View style={styles.container}>
      {forecast.map(({ dayLabel, temp, type }) => (
        <DayComponent
          key={dayLabel}
          label={dayLabel}
          tempHigh={temp.high}
          tempLow={temp.low}
          weatherType={type}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  dayContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 0
  },
  dayText: {
    color: COLORS.white,
    fontSize: 16,
    marginVertical: 5
  },
  tempLow: {
    opacity: 0.7
  }
});

export default WeekForecast;
