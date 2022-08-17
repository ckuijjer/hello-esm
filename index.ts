import got from "got";
import { HELLO_WORLD } from "./constants.js";

const result = await got("https://pokeapi.co/api/v2/pokemon/ditto").json();

console.log(JSON.stringify({ result, HELLO_WORLD }, null, 2));
