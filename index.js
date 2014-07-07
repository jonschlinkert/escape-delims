/**
 * escape-delims <https://github.com/assemble/escape-delims>
 * Generate markdown documentation for GitHub projects.
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var replace = require('frep');
var delims = module.exports;


delims.escape = function(str) {
  return replace.strWithArr(str, [
    {
      pattern: /\{%%([^%]+)%}/g,
      replacement: '(;}%%{;)$1(;}%{;)'
    }
  ]);
};

delims.unescape = function(str) {
  return replace.strWithArr(str, [
    {
      pattern: /\(;}%%{;\)/g,
      replacement: '{%'
    },
    {
      pattern: /\(;}%{;\)/g,
      replacement: '%}'
    }
  ]);
};
