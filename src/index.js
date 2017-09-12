import colors from 'colors/safe';

let log = function (...args) {
  return console.log(colors.bgCyan.black(...args));
};

let highlight = function (...args) {
  return console.log(colors.bgMagenta.white(...args));
};

let error = function (...args) {
  return console.log(colors.bgRed.white(...args));
};


const Export = {
  log,
  highlight,
  error,
}

export {
  log,
  highlight,
  error,
}

export default Export

