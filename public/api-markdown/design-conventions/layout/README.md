[ci-img]: https://travis-ci.org/ciena-frost/ember-frost-css-core.svg "Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-css-core

[cov-img]: https://coveralls.io/repos/github/ciena-frost/ember-frost-css-core/badge.svg?branch=master "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-css-core

[npm-img]: https://img.shields.io/npm/v/ember-frost-css-core.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-css-core

# ember-frost-css-core <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]
SASS based normalization and convenience classes for Frost projects

## Usage

```
ember install ember-frost-css-core
```

Modify your `ember-cli-build.js` to include:


```javascript
const app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/ember-frost-css-core/scss'
      ]
    }
  })
```

Modify your `app.scss` to include

```sass
@import 'frost-core';
```

You now have access to the core variables

e.g.

`$frost-z-index-modal`

## Contribution

This following outlines the details of collaborating on this Ember addon:

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
