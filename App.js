import { Font } from "expo";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppContext, APP_CONTEXT } from "./containers/app/context";
import { fakeForecast } from "./config/forecast";

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
      nunito: require("./assets/fonts/Nunito/Nunito-Regular.ttf")
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
      <View style={styles.container}>
        <AppContext.Provider value={this.state}>
          <Text style={styles.text}>
            Open up App.js to start working on your app!
          </Text>
        </AppContext.Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "nunito"
  }
});
