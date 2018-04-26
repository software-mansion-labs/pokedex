/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type PokemonRow_pokemon$ref: FragmentReference;
export type PokemonRow_pokemon = {|
  +id: string,
  +slug: ?string,
  +imageUrl: ?string,
  +minHeight: ?number,
  +maxHeight: ?number,
  +minWeight: ?number,
  +maxWeight: ?number,
  +$refType: PokemonRow_pokemon$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "PokemonRow_pokemon",
  "type": "Species",
  "metadata": null,
  "argumentDefinitions": [],
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
    }
  ]
};
(node/*: any*/).hash = '8b380f033609e03c2c17003b802e7f56';
module.exports = node;
