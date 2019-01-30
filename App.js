import { Font } from "expo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { fakeForecast } from "./config/forecast";
import { AppContext, APP_CONTEXT } from "./containers/app/context";
import COLORS from "./style/colors";
import Header from "./containers/header";
import Layout from "./components/layout";
import DayForecast from "./containers/day-forecast";
import WeekForecast from "./containers/week-forecast";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false,
      ...APP_CONTEXT
    };
  }
  componentDidMount() {
    this.loadAsync();
    this.getForecast();
  }

  getForecast() {
    // @todo put the api call here

    this.setState({
      // @todo: remove this by the return of the api call
      forecast: fakeForecast
    });
  }

  loadAsync = async () => {
    await Font.loadAsync({
      roboto: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
      robotoBold: require("./assets/fonts/Roboto/Roboto-Bold.ttf")
    });

    this.setState({
      fontLoaded: true
    });
  };

  render() {
    if (!this.state.fontLoaded) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }
    return (
      <View
        style={[
          styles.container,
          { backgroundColor: this.state.theme.background }
        ]}
      >
        <AppContext.Provider value={this.state}>
          {/* @todo replace by fake stub data */}
          <Layout>
            <Header
              city="Amsterdam"
              date="Friday, 4th January 2019"
              onClickOptions={() => console.log("click options")}
            />
            <DayForecast
              temperature="12"
              iconType="sun_cloud"
              weatherType="Rather cloudy"
            />
            <WeekForecast forecast={fakeForecast} />
          </Layout>
        </AppContext.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: COLORS.white
  }
});
