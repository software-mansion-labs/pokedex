import React, { Component } from "react";
import { AppLoading, Font, Asset } from "expo";
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";

// STEP 5
// Once we define how Relay should connect to our server,
// we can go on and use this information.
//
// Just as React components architecture resemble a tree,
// GraphQL query also resembles a tree. Every tree has a root
// in React land -- it seems that this App component is the root
// of the component tree (everything that renders in our application takes
// its roots in this component). In GraphQL land a root of query is `query`.
// Notice that when you issue a request in GraphiQL it always has to have one
// of the following root requests: `query`, `mutation` or `subscription`.
//
// We would like to query our backend for data. For that we will use
// Relay's QueryRenderer.
// https://facebook.github.io/relay/docs/en/query-renderer.html
//
// It is a component that receives a GraphQL query as a prop and uses
// render function provided also as a prop to render children appropriate
// to current state of the query fetch; obviously:
//  - data may be not fetched yet,
//  - data may be fetched and ready,
//  - an error could have occurred.
//
// Import named exports of react-relay: QueryRenderer and graphql

// STEP 7
// Import the defualt export from `./utils/getRelayEnvironment`.
// Name it however you like, eg. `getRelayEnvironment`.

import HomeScreen from "./screens/HomeScreen";

export default class App extends Component {
  state = {
    loaded: false
  };

  startPreloadingAssets = () =>
    Promise.all([
      Font.loadAsync(Ionicons.font),
      Font.loadAsync(MaterialCommunityIcons.font),
      Asset.fromModule(require("./assets/logo.png")).downloadAsync(),
      // Dirty hack for react-native-elements
      Font.loadAsync({ "Material Icons": MaterialIcons.font.material }),
      Asset.fromModule(require("./assets/pokemon_long.mp3")).downloadAsync()
    ]);

  handlePreloadFinished = () => this.setState({ loaded: true });

  render() {
    if (!this.state.loaded) {
      return (
        <AppLoading
          startAsync={this.startPreloadingAssets}
          onFinish={this.handlePreloadFinished}
          onError={console.error}
        />
      );
    }

    // STEP 6
    // Let's consider rendering QueryRenderer here.
    //
    // See example provided in Relay documentation:
    // https://facebook.github.io/relay/docs/en/query-renderer.html#example
    //
    // Notice, that at the moment we will not be able to provide an environment
    // to the QueryRenderer. Remember that we've defined getRelayEnvironment
    // function in Step 4? Let's import it in this file.

    // STEP 8
    // With getRelayEnvironment imported we can finally render QueryRenderer here.
    //
    // Return <QueryRenderer ... /> here, as props pass:
    //  - environment = return of getRelayEnvironment function
    //  - variables = we have no variables for the query yet, so an empty object
    //  - render = for now let's provide a simple function that will
    //
    // You should see that nothing has changed -- our list still renders properly.

    // STEP 9
    // Well, it is truly a nice QueryRenderer, but is has no use yet -- it doesn't
    // fetch any data! For that we need to provide QueryRenderer with some `query`
    // to fetch.
    //
    // Open up GraphiQL and try to define a named query (`query NAME { ... }`)
    // that will fetch eg. slugs of all the pokemons in `speciesArray`.

    // STEP 10
    // Add a new `query` prop to QueryRenderer that will contain a graphql-annotated
    // document (https://facebook.github.io/relay/docs/en/graphql-in-relay.html#graphql)
    // that you've experimented with in step 9.
    //
    // Remember that Relay requires that the query of a component named <NAME>
    // should be named `<NAME>Query`.
    //
    // If you see an error that the application could not import
    // `__generated__/AppQuery.graphql.js` it means that you have not started
    // Relay watcher. It's a program that listens to JS changes and generates
    // static Relay queries out of these graphql-annotated documents in JS.
    // Run `yarn relay-watch` in the root directory of the project.

    // STEP 11
    // Let's see the data we are fetching! Extend our `render` prop function
    // and add console.log there that will log the argument that the function receives.
    //
    // You should see a couple of `Object { ... }` logs in the console, one of which
    // should contain a `props Object` containing `speciesArray` array of Objects with slug inside.
    // Great! You're fetching the data from the GraphQL endpoint.
    //
    // Notice that if you add another field to the query, eg. `imageUrl` under `speciesArray`,
    // response from the server will contain it too!

    // STEP 16
    // Remember the fragment we've just defined in step 14? Let's use it in our QueryRenderer's query.
    // To use a GraphQL fragment in another query, just "spread it", like you would spread
    // a JS object in another JS object -- use three dots notation.
    //
    // Remove the speciesArray part you've defined in step 10.

    // STEP 17
    // If you look at the warnings raised by Relay, you will see the following warning:
    //
    // "createFragmentSpecResolver: Expected prop `screenProps` to be supplied to `Relay(NavigationContainer)`,
    //  but got `undefined`. Pass an explicit `null` if this is intentional."
    //
    // This is Relay telling us "hey, you're using a Relay container, but you do not
    // pass any data to it!"
    //
    // To silence this warning and at the same time pass the data from the component,
    // take a look at the argument of the render function -- it is an object
    // containing { error, props, retry }. Our fetched data is in the props attribute.
    // If you've removed the speciesArray part in the previous step the props
    // attribute looks like it is empty -- only some `__fragments` and `__id` properties.
    //
    // In fact, we just noticed another feature of Relay -- a component can access
    // only the data it requested (fragment data doesn't count). Since AppQuery
    // contains only a fragment of another component, App will not have any data available.
    //
    // Let's pass the props from render function argument to HomeScreen as screenProps prop.
    // Why screenProps? Because this is the key under which we've defined the fragment
    // in second argument of createFragmentContainer. We could have defined multiple
    // reusable fragments of a certain component and pass them as separate props.

    // STEP 20
    // At the moment we're passing props to HomeScreen no matter if they are present
    // or if they're not. It would be much nicer if we rendered AppLoading component
    // until the data is available. Data is available only when props is not null.
    //
    // Change the `render` function so that it renders <AppLoading /> if data is still loading.
    //
    // Also, add a check which if there is an error, it console.errors it.
    return (
      <HomeScreen />
    );
  }
}
