import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Font } from "expo";
import * as font from "./assets/fonts/Nunito/Nunito-Regular.ttf";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fontLoaded: false
    };
  }
  componentDidMount() {
    this.loadAsync();
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
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
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
