Example TypeScript code compiling to ESM JavaScript and able to use top level await

- _got_ used as an example of importing a ESM module
- _debug_ used as an example of importing a CommonJS module

## Usage

- `npm run node` -- build using tsc, run using node
- `npm run ts-node`
- `npm run esrun` -- build using esbuild

## References

- https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
- https://github.com/sindresorhus/tsconfig/blob/main/tsconfig.json
- https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#ecmascript-module-support-in-node-js

## Todo

- [ ] Simplify tsconfig.json (e.g. `"extends": "@tsconfig/node16-strictest-esm"` or `@tsconfig/esm`)
- [ ] different ways of running TypeScript
  - [x] _ts-node_
  - [ ] _ts-eager_
  - [x] _esrun_
- [ ] build package using _tsup_

## Remarks

- to use _esrun_ the file _tsconfig.json_ has `"target": "es2022"` as otherwise _esrun_ complains about top-level await. Node 16 supports most of es2022, see https://node.green/#ES2022 and https://kangax.github.io/compat-table/es2016plus/#node16_11, but it does feel a bit icky.
