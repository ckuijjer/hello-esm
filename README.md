Example TypeScript code compiling to ESM JavaScript and able to use top level await

- _got_ used as an example of importing a ESM module
- _debug_ used as an example of importing a CommonJS module

## Usage

`npm run build && DEBUG=* npm run start`

## References

- https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
- https://github.com/sindresorhus/tsconfig/blob/main/tsconfig.json
- https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#ecmascript-module-support-in-node-js

## Todo

- [] Simplify tsconfig.json (e.g. `"extends": "@tsconfig/node16-strictest-esm"` or `@tsconfig/esm`)
- [] different ways of running TypeScript
  - [] _ts-node_
  - [] _ts-eager_
  - [] _esrun_
- [] build package using _tsup_
