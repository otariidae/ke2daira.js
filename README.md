# ke2daira.js

A JavaScript imprementation of [ke2daira](https://github.com/ryuichiueda/ke2daira)

## Installation

```
$ npm i ke2daira
```

## Usage

```js
const { ke2dairanization } = require("ke2daira")

ke2dairanization("松平 健")
  .then((ke2dairanized) => {
    console.log(ke2dairanized) // "ケツダイラ マン"
  })
```

## Difference from original ke2daira

`ke2daira.js` only supports switching the head of the first word and the one of the last word.

## Known issues

- `ke2dairanization("チェ ゲバラ")` turns into `ゲェ チバラ`
- `ke2dairanization("加藤 あい")` is not equal to `ke2dairanization("阿藤 快")` because `ke2dairanization("阿藤 快")` wrongly turns into `コトウ アコロヨ`
