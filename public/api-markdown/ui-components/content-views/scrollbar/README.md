[ci-img]: https://travis-ci.org/ciena-frost/ember-frost-scroll.svg "Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-scroll
 
[cov-img]: https://coveralls.io/repos/github/ciena-frost/ember-frost-scroll/badge.svg?branch=master "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-scroll
 
[npm-img]: https://img.shields.io/npm/v/ember-frost-scroll.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-scroll
 
# ember-frost-scroll <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]
# Frost-scroll

This README outlines the details of collaborating on this Ember addon.

## Installation

* `ember install ember-frost-scroll`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

## Examples

```handlebars
  {{#frost-scroll class='full' on-scroll-y-end=(action 'yEndReached')}}
    {{frost-icon icon="frost/add" class="dummy-svg-huge"}}
  {{/frost-scroll}}
```
## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-scroll.git
cd ember-frost-scroll
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-scroll/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
