# Pokédex

## Gotta query'em all

## Instructions

1.  Install Relay. ([Installation and Setup / Relay docs](https://facebook.github.io/relay/docs/en/installation-and-setup.html#installation))
    ```sh
    yarn add react-relay
    yarn add --dev babel-plugin-relay graphql relay-compiler
    ```
2.  Add `relay` Babel plugin to `plugins` in `.babelrc`. ([Set up `babel-plugin-relay`](https://facebook.github.io/relay/docs/en/installation-and-setup.html#set-up-babel-plugin-relay))
    ```json
    {
      "plugins": ["relay"]
    }
    ```
3.  Add `relay` and `relay-watcher` scripts to `package.json`.
    ```json
    "scripts": {
      "relay": "relay-compiler --src ./ --schema ./schema.json",
      "relay-watch": "relay-compiler --src ./ --schema ./schema.json --watch"
    },
    ```
4.  Follow the steps!
