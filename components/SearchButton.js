import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandler } from 'expo';
import { Ionicons } from '@expo/vector-icons';
const { BorderlessButton } = GestureHandler;

export default class SearchButton extends Component {
  handlePress = () =>
    this.props.navigation.setParams({
      search: true,
      scrollToTopCounter: this.props.navigation.getParam(
        'scrollToTopCounter',
        0
      ) + 1,
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
    paddingRight: 10,
  },
});
