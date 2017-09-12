'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = exports.highlight = exports.log = undefined;

var _safe = require('colors/safe');

var _safe2 = _interopRequireDefault(_safe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = function log() {
  var _colors$bgCyan;

  return console.log((_colors$bgCyan = _safe2.default.bgCyan).black.apply(_colors$bgCyan, arguments));
};

var highlight = function highlight() {
  var _colors$bgMagenta;

  return console.log((_colors$bgMagenta = _safe2.default.bgMagenta).white.apply(_colors$bgMagenta, arguments));
};

var error = function error() {
  var _colors$bgRed;

  return console.log((_colors$bgRed = _safe2.default.bgRed).white.apply(_colors$bgRed, arguments));
};

var Export = {
  log: log,
  highlight: highlight,
  error: error
};

exports.log = log;
exports.highlight = highlight;
exports.error = error;
exports.default = Export;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJsb2ciLCJjb25zb2xlIiwiYmdDeWFuIiwiYmxhY2siLCJoaWdobGlnaHQiLCJiZ01hZ2VudGEiLCJ3aGl0ZSIsImVycm9yIiwiYmdSZWQiLCJFeHBvcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsTUFBTSxTQUFOQSxHQUFNLEdBQW1CO0FBQUE7O0FBQzNCLFNBQU9DLFFBQVFELEdBQVIsQ0FBWSxpQ0FBT0UsTUFBUCxFQUFjQyxLQUFkLGlDQUFaLENBQVA7QUFDRCxDQUZEOztBQUlBLElBQUlDLFlBQVksU0FBWkEsU0FBWSxHQUFtQjtBQUFBOztBQUNqQyxTQUFPSCxRQUFRRCxHQUFSLENBQVksb0NBQU9LLFNBQVAsRUFBaUJDLEtBQWpCLG9DQUFaLENBQVA7QUFDRCxDQUZEOztBQUlBLElBQUlDLFFBQVEsU0FBUkEsS0FBUSxHQUFtQjtBQUFBOztBQUM3QixTQUFPTixRQUFRRCxHQUFSLENBQVksZ0NBQU9RLEtBQVAsRUFBYUYsS0FBYixnQ0FBWixDQUFQO0FBQ0QsQ0FGRDs7QUFLQSxJQUFNRyxTQUFTO0FBQ2JULFVBRGE7QUFFYkksc0JBRmE7QUFHYkc7QUFIYSxDQUFmOztRQU9FUCxHLEdBQUFBLEc7UUFDQUksUyxHQUFBQSxTO1FBQ0FHLEssR0FBQUEsSztrQkFHYUUsTSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb2xvcnMgZnJvbSAnY29sb3JzL3NhZmUnO1xuXG5sZXQgbG9nID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIGNvbnNvbGUubG9nKGNvbG9ycy5iZ0N5YW4uYmxhY2soLi4uYXJncykpO1xufTtcblxubGV0IGhpZ2hsaWdodCA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gIHJldHVybiBjb25zb2xlLmxvZyhjb2xvcnMuYmdNYWdlbnRhLndoaXRlKC4uLmFyZ3MpKTtcbn07XG5cbmxldCBlcnJvciA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gIHJldHVybiBjb25zb2xlLmxvZyhjb2xvcnMuYmdSZWQud2hpdGUoLi4uYXJncykpO1xufTtcblxuXG5jb25zdCBFeHBvcnQgPSB7XG4gIGxvZyxcbiAgaGlnaGxpZ2h0LFxuICBlcnJvcixcbn1cblxuZXhwb3J0IHtcbiAgbG9nLFxuICBoaWdobGlnaHQsXG4gIGVycm9yLFxufVxuXG5leHBvcnQgZGVmYXVsdCBFeHBvcnRcblxuIl19