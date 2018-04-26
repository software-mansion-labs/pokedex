/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PokemonRow_pokemon$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type PokemonsList_pokemons$ref: FragmentReference;
export type PokemonsList_pokemons = $ReadOnlyArray<{|
  +id: string,
  +slug: ?string,
  +$fragmentRefs: PokemonRow_pokemon$ref,
  +$refType: PokemonsList_pokemons$ref,
|}>;
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PokemonsList_pokemons",
  "type": "Species",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PokemonRow_pokemon",
      "args": null
    },
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
    }
  ]
};
(node/*: any*/).hash = 'af2d51fc205b31e0305c6f42ccb5f3b4';
module.exports = node;
