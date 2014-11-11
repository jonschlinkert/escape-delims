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
 * var EscapeDelims = require('escape-delims');
 * var escapeDelims = new EscapeDelims();
 * ```
 *
 * Optionally pass the "escape delimiters" to use as an array:
 *
 * ```js
 * var escapeDelims = new EscapeDelims(['<%%', '%>']);
 * ```
 *
 * @param {Object} `delims` Delimiters to use.
 * @api public
 */

function EscapeDelims(from, to) {
  this.from = from || ['{%%', '%}'];
  this.to = to || this.from;
}

/**
 * Escape the given `str`, optionally passing a delimiter `syntax`
 * to use if not defined in the constructor.
 *
 * **Example:**
 *
 * ```js
 * escapeDelims.escape('<%%= first %><%= last %>', ['<%%', '%>']);
 * //=> '(;^__^;) first (;\^_\^;)<%= last %>'
 * ```
 *
 * @param  {String} `str` The string with delimiters that need to be escaped.
 * @param  {Array} `syntax` The delimiter syntax to escape.
 * @return {String} String with escaped delimiters.
 * @api public
 */

EscapeDelims.prototype.escape = function(str, from) {
  var re = delims.templates(from || this.from).evaluate;
  return str.replace(re, '(;^__^;)$1(;^_^;)');
};

/**
 * Un-escape previously escaped delimiters in the given `str`. Optionally
 * pass the `syntax` to use if they have not already been defined.
 *
 * **Example:**
 *
 * ```js
 * escapeDelims.unescape('(;^__^;) first (;\^_\^;)<%= last %>', ['<%%', '%>']);
 * //=> '<%%= first %><%= last %>'
 * ```
 * @param  {String} `str` The string with delimiters that need to be escaped.
 * @param  {Array} `syntax` The delimiter syntax to un-escape, e.g. `['<%%', '%>']`
 * @return {String} String with un-escaped delimiters.
 * @api public
 */

EscapeDelims.prototype.unescape = function(str, to) {
  var d = to || this.to;
  return str
    .replace(/\(;\^__\^;\)/g, d[0])
    .replace(/\(;\^_\^;\)/g, d[1]);
};


module.exports = EscapeDelims;