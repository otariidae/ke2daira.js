# ke2daira.js ![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/otariidae/ke2daira.js/node.js.yml) ![npm](https://img.shields.io/npm/v/ke2daira)

A JavaScript implementation of [ke2daira](https://github.com/ryuichiueda/ke2daira)

## Installation

```
$ npm i ke2daira
```

## Usage

```js
// as ECMAScript modules
import { ke2dairanization } from "ke2daira"

// or as CommonJS modules
const { ke2dairanization } = require("ke2daira")

ke2dairanization("松平 健")
  .then((ke2dairanized) => {
    console.log(ke2dairanized) // "ケツダイラ マン"
  })
```

## Difference from original ke2daira

`ke2daira.js` only supports switching the head of the first word and the one of the last word.

## Known issues

- `ke2dairanization("加藤 あい")` is equal to `アトウ カイ` but `ke2dairanization("阿藤 快")` is not equal to `カトウ アイ`.
  `ke2dairanization("阿藤 快")` wrongly turns into `コトウ アコロヨ`

## License
MIT
