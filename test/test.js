/*!
 * escape-delims <https://github.com/jonschlinkert/escape-delims>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var delims = require('..');


describe('escape delims', function () {
  it('should not transform the delimiters', function () {
    var actual = delims.escape('{%= foo %}');
    actual.should.eql('{%= foo %}');
  });

  it('should transform the delimiters', function () {
    var actual = delims.escape('{%%= foo %}');
    actual.should.eql('(;}%%{;)= foo (;}%{;)');
  });

  it('should escape custom delimiters', function () {
    var actual = delims.escape('<%%= foo %>', {delims: ['<%%', '%>']});
    actual.should.eql('(;}%%{;)= foo (;}%{;)');
  });

  it('should un-escape escaped custom delimiters', function () {
    var actual = delims.unescape('(;}%%{;)= foo (;}%{;)', {delims: ['<%%', '%>']});
    actual.should.eql('<%%= foo %>');
  });
});