# TypeScript type definitions for MTASA Lua

Declares TypeScripts types for MTASA. They are generated with
[wiki-parser](https://github.com/mtasa-typescript/mtasa-wiki-parser).

# How to use

## You are MTASA Resource developer

If you are resource developer, you should not manually install this package.
There is a [template](https://github.com/mtasa-typescript/resource-boilerplate)
you can use for creating MTASA Resources on TypeScript.

## Another way

```shell
npm install --save-dev mtasa-lua-types
```

# How to contribute

## Functions

Please take a look at
[this notes](https://github.com/mtasa-typescript/mtasa-wiki-parser#typescript-types-definitions-generator)
and
[the stages description](https://github.com/mtasa-typescript/mtasa-wiki-parser/docs/FunctionDocPipeline.png)

(TL;DR: by default, you should not add function definitions manually. They can be parsed from MTASA Wiki and then
edited)

Also, please, apply prettier to the code

## OOP Methods, Fields, Classes

All OOP declarations should be added manually ([parser](https://github.com/mtasa-typescript/mtasa-wiki-parser) can only replace the whole class file)







