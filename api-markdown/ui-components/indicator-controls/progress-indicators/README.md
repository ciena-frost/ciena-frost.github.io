[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-loading.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-loading

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-loading.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-loading

[npm-img]: https://img.shields.io/npm/v/ember-frost-loading.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-loading

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-loading






## Installation
```
ember install ember-frost-loading
```

## API
| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `type` | `string` || **default**: ripple effect loading indicator |
| | | `ring` | ring effect loading indicator |

## Examples
### Ring
```handlebars
{{frost-loading type='ring'}}
```

### Ripple
```handlebars
{{frost-loading}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-loading.git
cd ember-frost-loading
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-loading/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
