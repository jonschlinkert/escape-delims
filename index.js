/**
 * escape-delims <https://github.com/assemble/escape-delims>
 * Generate markdown documentation for GitHub projects.
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var replace = require('frep');
var Delims = require('delims');
var delims = new Delims();


/**
 * ```js
 * var delims = require('escape-delims');
 * ```
 *
 * @method `delims`
 * @param {Object} `options` Default options to use.
 * @api public
 */

function delimiters (options) {
  this.init(options);
  return this;
}


/**
 * Initialize defaults.
 *
 * @api private
 */

delimiters.init = function(opts) {
	opts = opts || {};
  opts.delims = opts.delims || ['{%%', '%}'];
  this.delims = opts.delims;
  this.regex = delims.templates(this.delims).evaluate;
};


delimiters.escape = function(str, options) {
	this.init(options);
	return replace.strWithArr(str, [
    {
      pattern: this.regex,
      replacement: '(;}%%{;)$1(;}%{;)'
    }
  ]);
};


delimiters.unescape = function(str, options) {
	this.init(options);

  return replace.strWithArr(str, [
    {
      pattern: /\(;}%%{;\)/g,
      replacement: this.delims[0]
    },
    {
      pattern: /\(;}%{;\)/g,
      replacement: this.delims[1]
    }
  ]);
};


module.exports = delimiters;