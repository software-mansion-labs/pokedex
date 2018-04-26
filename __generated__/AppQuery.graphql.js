/**
 * @flow
 * @relayHash b4516a7f4224baee53c431906f2418f6
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type HomeScreen_screenProps$ref = any;
export type AppQueryVariables = {| |};
export type AppQueryResponse = {|
  +$fragmentRefs: HomeScreen_screenProps$ref,
|};
*/


/*
query AppQuery {
  ...HomeScreen_screenProps
}

fragment HomeScreen_screenProps on RootQueryType {
  ...PaginatedPokemonsList_query
}

fragment PaginatedPokemonsList_query on RootQueryType {
  species(first: 20) {
    edges {
      node {
        id
        ...PokemonsList_pokemons
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}

fragment PokemonsList_pokemons on Species {
  ...PokemonRow_pokemon
  id
  slug
}

fragment PokemonRow_pokemon on Species {
  id
  slug
  imageUrl
  minHeight
  maxHeight
  minWeight
  maxWeight
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "operationKind": "query",
  "name": "AppQuery",
  "id": null,
  "text": "query AppQuery {\n  ...HomeScreen_screenProps\n}\n\nfragment HomeScreen_screenProps on RootQueryType {\n  ...PaginatedPokemonsList_query\n}\n\nfragment PaginatedPokemonsList_query on RootQueryType {\n  species(first: 20) {\n    edges {\n      node {\n        id\n        ...PokemonsList_pokemons\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment PokemonsList_pokemons on Species {\n  ...PokemonRow_pokemon\n  id\n  slug\n}\n\nfragment PokemonRow_pokemon on Species {\n  id\n  slug\n  imageUrl\n  minHeight\n  maxHeight\n  minWeight\n  maxWeight\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "AppQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "HomeScreen_screenProps",
        "args": null
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "AppQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "species",
        "storageKey": "species(first:20)",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 20,
            "type": "Int"
          }
        ],
        "concreteType": "SpeciesConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SpeciesEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Species",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "slug",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "imageUrl",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "minHeight",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "maxHeight",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "minWeight",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "maxWeight",
                    "args": null,
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "__typename",
                    "args": null,
                    "storageKey": null
                  }
                ]
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "cursor",
                "args": null,
                "storageKey": null
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "pageInfo",
            "storageKey": null,
            "args": null,
            "concreteType": "PageInfo",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "endCursor",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "hasNextPage",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedHandle",
        "alias": null,
        "name": "species",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 20,
            "type": "Int"
          }
        ],
        "handle": "connection",
        "key": "PaginatedPokemonsList_species",
        "filters": null
      }
    ]
  }
};
(node/*: any*/).hash = '9133ff44a4606b805e41c0b3519a6b6d';
module.exports = node;
