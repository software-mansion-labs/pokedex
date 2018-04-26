/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type PaginatedPokemonsList_query$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type HomeScreen_screenProps$ref: FragmentReference;
export type HomeScreen_screenProps = {|
  +$fragmentRefs: PaginatedPokemonsList_query$ref,
  +$refType: HomeScreen_screenProps$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "HomeScreen_screenProps",
  "type": "RootQueryType",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "FragmentSpread",
      "name": "PaginatedPokemonsList_query",
      "args": null
    }
  ]
};
(node/*: any*/).hash = '53977f8e80d1393d0c0b1ea957f1e5a4';
module.exports = node;
