import PropTypes from 'prop-types';
import React, { Component } from "react";
import { StyleSheet, FlatList, Image, Animated } from "react-native";
import { createStackNavigator } from "react-navigation";

import pokemons from "../pokemons";
import PokemonRow from "../components/PokemonRow";
import SearchButton from "../components/SearchButton";
import { playTheJingleAsync } from "../utils/easterEgg";
import SearchBarHeader from "../components/SearchBarHeader";

class App extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={require("../assets/logo.png")}
      />
    ),
    headerRight: <SearchButton navigation={navigation} />
  });

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired,
      setParams: PropTypes.func.isRequired,
    }).isRequired,
  };

  state = {
    searchTerm: "",
    playPokemonSoundOnMount: false,
    searchBarHeight: new Animated.Value(0)
  };

  componentDidMount() {
    if (this.state.playPokemonSoundOnMount) {
      playTheJingleAsync();
    }
  }

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
    length: PokemonRow.HEIGHT,
    offset: PokemonRow.HEIGHT * index,
    index
  });

  getPokemons = () => {
    if (
      this.props.navigation.getParam("search", false) &&
      this.state.searchTerm.length > 0
    ) {
      return pokemons.filter(pokemon =>
        pokemon.slug.includes(this.state.searchTerm.toLowerCase())
      );
    }

    return pokemons;
  };

  handleFlatListMount = ref => {
    this.flatListRef = ref;
  };

  handleRefresh = () => {};

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
        keyboardDismissMode="interactive"
        getItemLayout={this.getItemLayout}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}

export default createStackNavigator({
  Main: App
});

const styles = StyleSheet.create({
  logo: { width: 92, height: 34, marginHorizontal: 16 },
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
