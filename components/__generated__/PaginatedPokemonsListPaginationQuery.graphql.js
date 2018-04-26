/**
 * @flow
 * @relayHash 29c6b531443b962e000b8e4a0af58bd9
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PaginatedPokemonsList_query$ref = any;
export type PaginatedPokemonsListPaginationQueryVariables = {|
  count: number,
  cursor?: ?string,
|};
export type PaginatedPokemonsListPaginationQueryResponse = {|
  +$fragmentRefs: PaginatedPokemonsList_query$ref,
|};
*/


/*
query PaginatedPokemonsListPaginationQuery(
  $count: Int!
  $cursor: String
) {
  ...PaginatedPokemonsList_query_1G22uz
}

fragment PaginatedPokemonsList_query_1G22uz on RootQueryType {
  species(first: $count, after: $cursor) {
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "count",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "PaginatedPokemonsListPaginationQuery",
  "id": null,
  "text": "query PaginatedPokemonsListPaginationQuery(\n  $count: Int!\n  $cursor: String\n) {\n  ...PaginatedPokemonsList_query_1G22uz\n}\n\nfragment PaginatedPokemonsList_query_1G22uz on RootQueryType {\n  species(first: $count, after: $cursor) {\n    edges {\n      node {\n        id\n        ...PokemonsList_pokemons\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment PokemonsList_pokemons on Species {\n  ...PokemonRow_pokemon\n  id\n  slug\n}\n\nfragment PokemonRow_pokemon on Species {\n  id\n  slug\n  imageUrl\n  minHeight\n  maxHeight\n  minWeight\n  maxWeight\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "PaginatedPokemonsListPaginationQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "PaginatedPokemonsList_query",
        "args": [
          {
            "kind": "Variable",
            "name": "count",
            "variableName": "count",
            "type": null
          },
          {
            "kind": "Variable",
            "name": "cursor",
            "variableName": "cursor",
            "type": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "PaginatedPokemonsListPaginationQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "species",
        "storageKey": null,
        "args": [
          {
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
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
            "kind": "Variable",
            "name": "after",
            "variableName": "cursor",
            "type": "String"
          },
          {
            "kind": "Variable",
            "name": "first",
            "variableName": "count",
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
})();
(node/*: any*/).hash = '50f4a9d8e56668a7f87d2b009e33b32f';
module.exports = node;
