import PropTypes from "prop-types";
import React, { Component } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image } from "react-native";

// STEP 21
// Notice that we still have to keep track of all
// the data required by eg. PokemonRow in HomeScreen, so we just moved it
// from App (remember the bare query?) to HomeScreen's fragment.
// Let's make a fragment container out of PokemonRow.
//
//  1. Import createFragmentContainer, graphql from react-relay.
//  2. Remove export default from PokemonRow.
//  3. Create fragment container with createFragmentContainer function
//     that will take PokemonRow as its first argument and will
//     fetch appropriate attributes of Species as eg. pokemon prop.
//     Remember that the fragment has to be named File_propName.
//     You don't know the name of Species type? Consult the GraphiQL documentation! 
//  4. Export the fragment container as the default export.
import { createFragmentContainer, graphql } from "react-relay";

export const HEIGHT = 200;

class PokemonRow extends Component {
  static propTypes = {
    pokemon: PropTypes.shape({
      id: PropTypes.string.isRequired,
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

export default createFragmentContainer(PokemonRow, {
  pokemon: graphql`
    fragment PokemonRow_pokemon on Species {
      id
      slug
      imageUrl
      minHeight
      maxHeight
      minWeight
      maxWeight
    }
  `
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: HEIGHT,
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
