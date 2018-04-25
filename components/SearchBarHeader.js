import PropTypes from "prop-types";
import React, { Component } from "react";
import { Text, StyleSheet, Animated, Platform } from "react-native";
import { SearchBar } from "react-native-elements";
import { GestureHandler } from "expo";
const { BorderlessButton } = GestureHandler;

export default class SearchBarHeader extends Component {
  static HEIGHT = 50;
  static propTypes = {
    inputRef: PropTypes.func,
    searchTerm: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onDismiss: PropTypes.func.isRequired,
    heightAnimatedValue: PropTypes.object.isRequired
  };

  getShadowOpacity = () =>
    this.props.heightAnimatedValue.interpolate({
      inputRange: [0, SearchBarHeader.HEIGHT],
      outputRange: [0, 0.1]
    });

  getBorderBottomWidth = () =>
    this.props.heightAnimatedValue.interpolate({
      inputRange: [0, SearchBarHeader.HEIGHT],
      outputRange: [0, StyleSheet.hairlineWidth]
    });

  getTop = () =>
    this.props.heightAnimatedValue.interpolate({
      inputRange: [0, SearchBarHeader.HEIGHT],
      outputRange: [-SearchBarHeader.HEIGHT, 0]
    });

  getOpacity = () =>
    this.props.heightAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

  render() {
    return (
      <Animated.View
        style={[
          styles.container,
          {
            ...Platform.select({
              android: {
                shadowOpacity: this.getShadowOpacity()
              },
              ios: {
                borderBottomWidth: this.getBorderBottomWidth()
              }
            }),
            top: this.getTop(),
            opacity: this.getOpacity(),
            height: this.props.heightAnimatedValue
          }
        ]}
      >
        <SearchBar
          lightTheme
          placeholder="Search"
          ref={this.props.inputRef}
          inputStyle={styles.input}
          value={this.props.searchTerm}
          onChangeText={this.props.onChangeText}
          containerStyle={styles.searchContainer}
        />
        <BorderlessButton
          style={styles.cancelButton}
          onPress={this.props.onDismiss}
        >
          <Text>Cancel</Text>
        </BorderlessButton>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    ...Platform.select({
      android: {
        shadowOpacity: 0.1,
        shadowColor: "black",
        shadowRadius: StyleSheet.hairlineWidth,
        shadowOffset: {
          height: StyleSheet.hairlineWidth
        },
        elevation: 2
      },
      ios: {
        borderBottomColor: "#DADADD"
      }
    })
  },
  input: {
    backgroundColor: "#E0E0E6"
  },
  searchContainer: {
    flex: 1,
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0
  },
  cancelButton: { paddingRight: 8, paddingVertical: 8 }
});
