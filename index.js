const colors = require('colors/safe');

let log = function (...args) {
  return console.log(colors.bgCyan.black(...args));
};

let highlight = function (...args) {
  return console.log(colors.bgMagenta.white(...args));
};

let error = function (...args) {
  return console.log(colors.bgRed.white(...args));
};

module.exports = {
  log,
  highlight,
  error,
};
