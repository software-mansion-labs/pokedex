import React, { Component } from "react";
import { AppLoading, Font, Asset } from "expo";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";

export default class App extends Component {
  state = {
    loaded: false
  };

  startPreloadingAssets = () =>
    Promise.all([
      Font.loadAsync(Ionicons.font),
      Font.loadAsync(MaterialCommunityIcons.font),
      Asset.fromModule(require("./assets/logo.png")).downloadAsync(),
      // Dirty hack for react-native-elements
      Font.loadAsync({ "Material Icons": MaterialIcons.font.material }),
      Asset.fromModule(require("./assets/pokemon_long.mp3")).downloadAsync()
    ]);

  handlePreloadFinished = () => this.setState({ loaded: true });

  render() {
    if (!this.state.loaded) {
      return (
        <AppLoading
          startAsync={this.startPreloadingAssets}
          onFinish={this.handlePreloadFinished}
          onError={console.error}
        />
      );
    }

    return <HomeScreen />;
  }
}
