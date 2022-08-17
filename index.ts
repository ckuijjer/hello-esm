import got from "got";
import leven from "leven";
import debugFn from "debug";

const debug = debugFn("hello-esm");

import { HALLO_WERELD, HELLO_WORLD } from "./constants.js";

const result = await got("https://pokeapi.co/api/v2/pokemon/ditto").json();

const levenshteinDistance = leven(HELLO_WORLD, HALLO_WERELD);

console.log(JSON.stringify({ result }, null, 2));

debug(
  "levenshteinDistance |%s|%s|%d",
  HELLO_WORLD,
  HALLO_WERELD,
  levenshteinDistance
);
