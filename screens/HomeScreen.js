import PropTypes from "prop-types";
import React, { Component } from "react";
import { StyleSheet, Image } from "react-native";
import { createStackNavigator } from "react-navigation";

// STEP 12
// Notice that currently:
//  1. We import static pokemons mock and pass it to PokemonsList.
//     Wouldn't it be nice if we could pass fetched pokemons there?
//  2. A simple answer would be "let's just pass the props we get
//     from GraphQL in App down to HomeScreen and down to PokemonsList!"
//     However, any change needed in PokemonRow would have to be then reflected
//     in App's query (which is 3 components up!). Imagine using a couple of
//     QueryRenderers and having to keep track of all the data needed by subcomponents
//     in each QueryRenderer... Fortunately, GraphQL supports Fragments
//     (http://graphql.org/learn/queries/#fragments) which are a very neat way
//     of reusing the same query part in different places in the query.
//
// Open GraphiQL and try to extract the Species fields into a separate fragment.

// STEP 13
// Since GraphQL supports Fragments, there must be a way to use this feature in Relay!
// You guessed right, there is! `createFragmentContainer` let's us define
// a Relay container -- a component that is known to require certain fragment
// of data. The good thing, the fragment usually is in the same file, so
// you can see what data will the component receive.
//
// Import createFragmentContainer and graphql macro from react-relay.
import { createFragmentContainer, graphql } from "react-relay";

import PaginatedPokemonsList from "../components/PaginatedPokemonsList";

import SearchButton from "../components/SearchButton";
import { playTheJingleAsync } from "../utils/easterEgg";
import PokemonsList from "../components/PokemonsList";

class HomeScreen extends Component {
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
      setParams: PropTypes.func.isRequired
    }).isRequired,
    screenProps: PropTypes.object
  };

  state = {
    playPokemonSoundOnMount: true
  };

  componentDidMount() {
    if (this.state.playPokemonSoundOnMount) {
      playTheJingleAsync();
    }
  }

  render() {
    // STEP 18
    // Log out this.props.screenProps. Notice it contains our Relay-fetched data
    // in the exact way that we define it in graphql document. Try adding another attribute
    // to the fragment on speciesArray and notice that the new value is automatically
    // added to screenProps.
    //
    // Once you're done with experimenting, delete the console.log.

    return <PaginatedPokemonsList query={this.props.screenProps} navigation={this.props.navigation} />;

    // STEP 19
    // We're still using mocked data in our PokemonsList!
    // Extend the speciesArray fields and include all the fields that are
    // provided by our mock -- id, slug, imageUrl, {min,max}Height, {min,max}Weight.
    //
    // Then, instead of passing `pokemons` as `pokemons` prop, pass data from Relay
    // available under screenProps.
    //
    // Remove import pokemons from "pokemons";

    // STEP 26
    // Instead of rendering PokemonsList, render PaginatedPokemonsList (also, change passed prop from 
    // pokemons [now, PaginatedPokemonsList handles fetching specific list itself] to query [this is
    // what PaginatedPokemonsList defines as its requirement in createPaginationContainer]).
  }
}

// STEP 14
// Change the default export of createStackNavigator into assignment to some variable.

const Navigator = createStackNavigator({
  Main: HomeScreen
});

// STEP 15
// Let's create a fragment container out of our App's stack navigator. Export the container as the default.
// Follow example of https://facebook.github.io/relay/docs/en/fragment-container.html#defining-containers.
// Let the component require data on RootQueryType (this is the name of type of object
// that is the root of all the queries). Fetch some data from speciesArray, eg. slug and imageUrl.
//
// Name the prop `screenProps`, as this is the only prop that the Stack Navigator passes
// directly to children. (This also means that the fragment has to be named HomeScreen_screenProps).

export default createFragmentContainer(Navigator, {
  screenProps: graphql`
    fragment HomeScreen_screenProps on RootQueryType {
      ...PaginatedPokemonsList_query
    }
  `
});

// STEP 23
// Use the PokemonsList_pokemons fragment in speciesArray.
// It is a plural fragment of a matching type (Species), so we can spread it
// right inside the speciesArray field.

// STEP 25
// Include connection fragment in HomeScreen_screenProps fragment.

const styles = StyleSheet.create({
  logo: { width: 92, height: 34, marginHorizontal: 16 },
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
