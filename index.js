/**
 * escape-delims <https://github.com/assemble/escape-delims>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var Delims = require('delims');
var delims = new Delims();


/**
 * Create a new instance of `EscapeDelims`:
 *
 * ```js
 * var Delims = require('escape-delims');
 * var delims = new Delims();
 * ```
 *
 * Optionally pass the "escape delimiters" to use as an array:
 *
 * ```js
 * var delims = new Delims(['<%%', '%>']);
 * ```
 *
 * @param {Object} `delims`
 * @api public
 */

function EscapeDelims(delims) {
  this.delims = delims || ['{%%', '%}'];
}


/**
 * Escape the given `str` with the specified escape-`delimiters`. Optionally
 * pass the `delimiters` to use if they have not already been defined.
 *
 * @param  {String} `str` The string with delimiters that need to be escaped.
 * @param  {Array} `delimiters` The escape delimiters to use.
 * @return {String}
 */

EscapeDelims.prototype.escape = function(str, delimiters) {
  var re = delims.templates(delimiters || this.delims).evaluate;
  return str.replace(re, '(;}%%{;)$1(;}%{;)');
};


/**
 * Un-escape previously escaped delimiters in the given `str`. Optionally
 * pass the `delimiters` to use if they have not already been defined.
 *
 * @param  {String} `str` The string with delimiters that need to be escaped.
 * @param  {Array} `delimiters` The escape delimiters to use.
 * @return {String}
 */

EscapeDelims.prototype.unescape = function(str, delimiters) {
  var d = delimiters || this.delims;

  return str
    .replace(/\(;}%%{;\)/g, d[0])
    .replace(/\(;}%{;\)/g, d[1]);
};


module.exports = EscapeDelims;