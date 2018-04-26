// STEP 4
// In order to be able to fetch data from our backend,
// Relay has to know how to do it. For that we will create
// a so-called Relay Environment --- a wrapper around configuration,
// a single data store and network handler.
//
// https://facebook.github.io/relay/docs/en/quick-start-guide.html#relay-environment
//
// Keep in mind copy-pasting straight from the documentation won't always work.
// Here, for example, you have to change the URL
// at which Relay will expect the GraphQL endpoint.

import { Environment, Network, RecordSource, Store } from "relay-runtime";

function fetchQuery(operation, variables) {
  return fetch("https://pokedex.rancher.swmansion.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
});

export default () => environment;
