import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class PokemonRow extends Component {
  static HEIGHT = 200;
  static propTypes = {
    pokemon: PropTypes.shape({
      id: PropTypes.number.isRequired,
      slug: PropTypes.string.isRequired,
      image_url: PropTypes.string.isRequired,
    }).isRequired,
  };
  
  getName = (pokemon) => `${pokemon.slug[0].toUpperCase()}${pokemon.slug.slice(1)}`;
  
  getDetails = (pokemon) => `${pokemon.slug[0].toUpperCase()}${pokemon.slug.slice(1)}`;
  
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.pokemon.image_url }} style={styles.image} resizeMode="contain" />
        <Text style={styles.pokemonName}>{this.getName(this.props.pokemon)}</Text>
        <Text style={styles.pokemonDetails}>
          <MaterialCommunityIcons name="arrow-collapse-down" />
          {` ${(this.props.pokemon.min_height / 1.5).toFixed(0)} cm – ${(this.props.pokemon.max_height / 1.2).toFixed(0)} cm `}
          <MaterialCommunityIcons name="arrow-collapse-up" />
        </Text>
        <Text style={styles.pokemonDetails}>
          <MaterialCommunityIcons name="weight" />
          {" "}{(this.props.pokemon.min_weight / 4).toFixed(0)}{" kg – "}{(this.props.pokemon.max_weight / 4).toFixed(0)}{" kg"}
        </Text>
      </View>
    );
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
    marginRight: 10,
  },
  image: {
    alignSelf: "stretch",
    height: 120,
  },
  pokemonName: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "600",
  },
  pokemonDetails: {
    marginTop: 6,
    textAlign: "center",
    color: "#808080",
  },
});
