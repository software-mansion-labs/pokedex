import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, FlatList, Animated } from "react-native";

import PokemonRow, { HEIGHT as PokemonRowHeight } from "../components/PokemonRow";
import SearchBarHeader from "../components/SearchBarHeader";

// STEP 22
// Do exactly what you did in PokemonRow to PokemonsList.
// Here, however use @relay(plural: true) directive
// to at the same time:
//  1. Fetch PokemonRow fragment,
//  2. Fetch the slug, with which we're going to filter the Pokemons,
//  3. Fetch the id, which we're using as key of each PokemonRow when rendering,
//  4. Be able to spread PokemonsList fragment on an array type of Species
//     See: https://facebook.github.io/relay/docs/en/graphql-in-relay.html#relayplural-boolean
import { createFragmentContainer, graphql } from 'react-relay';

class PokemonsList extends Component {
  static propTypes = {
    pokemons: PropTypes.arrayOf(
      PropTypes.shape({
        slug: PropTypes.string.isRequired
      })
    ).isRequired,
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
      setParams: PropTypes.func.isRequired
    }).isRequired,
    onLoadMore: PropTypes.func,
  };

  state = {
    searchTerm: "",
    searchBarHeight: new Animated.Value(0)
  };

  componentDidUpdate(prevProps) {
    if (
      !prevProps.navigation.getParam("search", false) &&
      this.props.navigation.getParam("search", false)
    ) {
      this.animateSearchBarHeightTo(SearchBarHeader.HEIGHT);
    }

    if (
      prevProps.navigation.getParam("scrollToTopCounter", 0) <
      this.props.navigation.getParam("scrollToTopCounter", 0)
    ) {
      if (this.flatListRef) {
        this.flatListRef.scrollToOffset({ offset: 0, animated: true });
      }
    }

    if (
      prevProps.navigation.getParam("search", false) &&
      !this.props.navigation.getParam("search", false)
    ) {
      this.animateSearchBarHeightTo(0);
    }
  }

  animateSearchBarHeightTo = toValue =>
    Animated.timing(this.state.searchBarHeight, {
      toValue
    }).start();

  extractKey = pokemon => pokemon.id;

  getItemLayout = (data, index) => ({
    length: PokemonRowHeight,
    offset: PokemonRowHeight * index,
    index
  });

  getPokemons = () => {
    if (
      this.props.navigation.getParam("search", false) &&
      this.state.searchTerm.length > 0
    ) {
      return this.props.pokemons.filter(pokemon =>
        pokemon.slug.includes(this.state.searchTerm.toLowerCase())
      );
    }

    return this.props.pokemons;
  };

  handleFlatListMount = ref => {
    this.flatListRef = ref;
  };

  handleSearchDismiss = () =>
    this.props.navigation.setParams({ search: false });

  handleChangeSearchText = searchTerm => this.setState({ searchTerm });

  renderHeader = () => (
    <SearchBarHeader
      searchTerm={this.state.searchTerm}
      onDismiss={this.handleSearchDismiss}
      onChangeText={this.handleChangeSearchText}
      heightAnimatedValue={this.state.searchBarHeight}
    />
  );

  renderPokemon = ({ item: pokemon }) => <PokemonRow pokemon={pokemon} />;

  render() {
    return (
      <FlatList
        numColumns={2}
        style={styles.container}
        data={this.getPokemons()}
        ref={this.handleFlatListMount}
        keyExtractor={this.extractKey}
        renderItem={this.renderPokemon}
        onEndReached={this.props.onLoadMore}
        keyboardDismissMode="interactive"
        getItemLayout={this.getItemLayout}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

export default createFragmentContainer(PokemonsList, {
  pokemons: graphql`
    fragment PokemonsList_pokemons on Species @relay(plural: true) {
      ...PokemonRow_pokemon
      id, slug
    }
  `
})

const styles = StyleSheet.create({
  logo: { width: 92, height: 34, marginHorizontal: 16 },
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
