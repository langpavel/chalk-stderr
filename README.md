# chalk-stderr

Chalk for stderr

## Install

`$ npm install chalk supports-color chalk-stderr`

or with yarn

`$ yarn add chalk supports-color chalk-stderr`

## Usage

See [chalk](https://github.com/chalk/chalk/blob/master/readme.md)

```js
const cherr = require('chalk-stderr');

// Everything else is same
```

## How This Works

Everything else is delegated to peer dependencies as you can see:

```js
const supportsColor = require('supports-color');
const Chalk = require('chalk').constructor;
module.exports = new Chalk({ level: supportsColor.stderr.level });
```

That's all!

This is all what this package contains.
