// STEP 24
// Our list looks very nice, however we still have a problem:
// even though on load we display ~6 Pokemons, we still download all 100 of them.
//
// It would be much better if we could paginate the list, i. e. fetch first 20
// Pokemons, then, if the user scrolls down, fetch next 20, and next 20, etc.
//
// This is exactly what GraphQL connections are for.
// See http://graphql.org/learn/pagination/
//
// It turns out our GraphQL endpoint already implements this behavior!
//
// If so, let's use createPaginationContainer of Relay to, well,
// create a pagination container over PokemonsList.
//
// See https://facebook.github.io/relay/docs/en/pagination-container.html#pagination-example
// We will need much less configuration compared to the example provided.

import React from "react";
import PropTypes from "prop-types";
import { graphql, createPaginationContainer } from "react-relay";

import PokemonsList from "./PokemonsList";

class ConnectionSpeciesList extends React.Component {
  static propTypes = {
    searchTerm: PropTypes.string,
    query: PropTypes.object,
    relay: PropTypes.shape({
      hasMore: PropTypes.func,
      isLoading: PropTypes.func,
      loadMore: PropTypes.func
    }).isRequired,
    navigation: PropTypes.object
  };

  handleLoadMore = () => {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }
    this.props.relay.loadMore(20, this.handleCompleted);
  };

  handleCompleted = error => error && console.error(error);

  render() {
    if (this.props.query) {
      const species = this.props.query.species.edges.map(edge => edge.node);
      return (
        <PokemonsList
          pokemons={species}
          navigation={this.props.navigation}
          onLoadMore={this.handleLoadMore}
        />
      );
    }
  }
}

export default createPaginationContainer(
  ConnectionSpeciesList,
  {
    query: graphql`
      fragment PaginatedPokemonsList_query on RootQueryType
        @argumentDefinitions(
          count: { type: "Int", defaultValue: 20 }
          cursor: { type: "String" }
        ) {
        species(first: $count, after: $cursor)
          @connection(key: "PaginatedPokemonsList_species") {
          edges {
            node {
              id
              ...PokemonsList_pokemons
            }
          }
        }
      }
    `
  },
  {
    getConnectionFromProps: props => props.query && props.query.species,
    getVariables: (props, { count, cursor }) => ({
      count,
      cursor
    }),
    query: graphql`
      query PaginatedPokemonsListPaginationQuery(
        $count: Int!
        $cursor: String
      ) {
        ...PaginatedPokemonsList_query
          @arguments(count: $count, cursor: $cursor)
      }
    `
  }
);
