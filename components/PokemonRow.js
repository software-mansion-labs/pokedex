import PropTypes from "prop-types";
import React, { Component } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image } from "react-native";

export default class PokemonRow extends Component {
  static HEIGHT = 200;
  static propTypes = {
    pokemon: PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      minHeight: PropTypes.number.isRequired,
      maxHeight: PropTypes.number.isRequired,
      minWeight: PropTypes.number.isRequired,
      maxWeight: PropTypes.number.isRequired
    }).isRequired
  };

  getName = pokemon =>
    `${pokemon.slug[0].toUpperCase()}${pokemon.slug.slice(1)}`;

  getDetails = pokemon =>
    `${pokemon.slug[0].toUpperCase()}${pokemon.slug.slice(1)}`;

  getMinHeight = pokemon => Math.round(pokemon.minHeight / 1.5);
  getMaxHeight = pokemon => Math.round(pokemon.maxHeight / 1.2);
  getMinWeight = pokemon => Math.round(pokemon.minWeight / 4);
  getMaxWeight = pokemon => Math.round(pokemon.maxWeight / 4);

  render() {
    return <View style={styles.container}>
        <Image source={{ uri: this.props.pokemon.imageUrl }} style={styles.image} resizeMode="contain" />
        <Text style={styles.pokemonName}>
          {this.getName(this.props.pokemon)}
        </Text>
        <Text style={styles.pokemonDetails}>
          <MaterialCommunityIcons name="arrow-collapse-down" />
          {` ${this.getMinHeight(this.props.pokemon)} cm – ${this.getMaxHeight(this.props.pokemon)} cm `}
          <MaterialCommunityIcons name="arrow-collapse-up" />
        </Text>
        <Text style={styles.pokemonDetails}>
          <MaterialCommunityIcons name="weight" /> {this.getMinWeight(this.props.pokemon)}
          {" kg – "}
          {this.getMaxWeight(this.props.pokemon)}
          {" kg"}
        </Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 200,
    borderBottomWidth: 0.5,
    borderBottomColor: "gray",
    alignItems: "center",
    paddingHorizontal: 8,
    marginRight: 10
  },
  image: {
    alignSelf: "stretch",
    height: 120
  },
  pokemonName: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600"
  },
  pokemonDetails: {
    marginTop: 6,
    textAlign: "center",
    color: "#808080"
  }
});
