#Fireconsole

process stdout formatting.

##Installation

**fireconsole** is now public on [npm](https://www.npmjs.com/)

```bash
npm install fireconsole --save
```

##Commands

```js
var fireconsole = require("fireconsole");
fireconsole.log([...args]); //bgCyan + black
fireconsole.highlight([...args]);//bgMagenta + white
fireconsole.error([...args]);//bgRed + whiteÏ
```