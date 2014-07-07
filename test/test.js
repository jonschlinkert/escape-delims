/*!
 * escape-delims <https://github.com/jonschlinkert/escape-delims>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var expect = require('chai').expect;
var delims = require('../');

describe('escapeDelims', function () {
  describe('when delimiters are escaped', function () {
    it('should not escape the delimiters', function () {
      var actual = delims.escape('{%= foo %}');
      expect(actual).to.eql('{%= foo %}');
    });
  });

  describe('when delimiters are escaped', function () {
    it('should escape the delimiters', function () {
      var actual = delims.escape('{%%= foo %}');
      expect(actual).to.eql('(;}%%{;)= foo (;}%{;)');
    });
  });
});