[ci-img]: https://travis-ci.org/ciena-frost/ember-frost-icons.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-icons

[cov-img]: https://coveralls.io/repos/github/ciena-frost/ember-frost-icons/badge.svg?branch=master "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-icons

[npm-img]: https://img.shields.io/npm/v/ember-frost-icons.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-icons

# ember-frost-icons <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]
A collection of icons for frost

## Installation
```
ember install ember-frost-icons
```

## API

| Name   | Description |
| ------ | ----------- |
| `icon` | the name of the icon to display |

## Examples

### Add
```handlebars
{{frost-icon icon="frost/add" }}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-icons.git
cd ember-frost-icons
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-icons/tests/dummy`. This allows you to easily change the background color and see how the icons look against various backgrounds.

To run the server run `npm start` from the root of the repository and visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to lint the code, execute the test suite, and output code coverage.
