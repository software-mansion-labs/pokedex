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
