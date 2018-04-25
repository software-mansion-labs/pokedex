import PropTypes from 'prop-types';
import { GestureHandler } from "expo";
import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { BorderlessButton } = GestureHandler;

export default class SearchButton extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
      setParams: PropTypes.func.isRequired
    }).isRequired
  };

  handlePress = () =>
    this.props.navigation.setParams({
      search: true,
      scrollToTopCounter:
        this.props.navigation.getParam("scrollToTopCounter", 0) + 1
    });

  render() {
    return (
      <BorderlessButton style={styles.button} onPress={this.handlePress}>
        <Ionicons name="ios-search" size={23} />
      </BorderlessButton>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    padding: 6,
    paddingRight: 10
  }
});
