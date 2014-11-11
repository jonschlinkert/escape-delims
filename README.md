# escape-delims [![NPM version](https://badge.fury.io/js/escape-delims.svg)](http://badge.fury.io/js/escape-delims)

> Escape and un-escape delimiters in templates. Tested with Lo-Dash, underscore and Handlebars syntax, but could be used with other template engines/syntaxes as well. This is similar to the process used by Yeoman on escaped templates in generators.

Originally from [grunt-readme](https://github.com/assemble/grunt-readme) and [verb](https://github.com/assemble/verb), the escape syntax has been changed to mirror Yeoman's escape syntax for familiarity to users.

## Install
### Install with [npm](npmjs.org)

```bash
npm i escape-delims --save
```

## Run tests

```bash
npm test
```

## API

Create a new instance of `EscapeDelims`:

```js
var Delims = require('escape-delims');
var delims = new Delims();
```

Optionally pass the "escape delimiters" to use as an array:

```js
var delims = new Delims(['<%%', '%>']);
```

**Params:**

* `delims` **{Object}**: Delimiters to use.


### .escape

Escape the given `str` with the specified escape-`delimiters`. Optionally
pass the `delimiters` syntax to escape if they have not already been defined.

**Example:**

```js
delims.escape('<%%= first %><%= last %>', ['<%%', '%>']);
//=> '{% first %}<%= last %>'
```

**Params:**

* `str` **{String}**: The string with delimiters that need to be escaped.
* `delimiters` **{Array}**: The delimiter syntax to escape.
* `return` **{String}** String with escaped delimiters.


### .unescape

Un-escape previously escaped delimiters in the given `str`. Optionally
pass the `delimiters` to use if they have not already been defined.

**Example:**

```js
delims.unescape('{% first %}<%= last %>', ['<%%', '%>']);
//=> '<%%= first %><%= last %>'
```

**Params:**

* `str` **{String}**: The string with delimiters that need to be escaped.
* `delimiters` **{Array}**: The delimiter syntax to un-escape, e.g. `['<%%', '%>']`
* `return` **{String}** String with un-escaped delimiters.


## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/jonschlinkert/verb) on November 11, 2014._