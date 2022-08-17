Example TypeScript code compiling to ESM JavaScript and able to use top level await

## Usage

`npm run build && npm run start`

## References

- https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c
- https://github.com/sindresorhus/tsconfig/blob/main/tsconfig.json
- https://devblogs.microsoft.com/typescript/announcing-typescript-4-7-beta/#ecmascript-module-support-in-node-js

## Todo

- [] Simplify tsconfig.json (e.g. `"extends": "@tsconfig/node16-strictest-esm"` or `@tsconfig/esm`)
- [] different ways of running TypeScript
  - [] ts-node
  - [] ts-eager
  - [] esrun
- [] build package using tsup
