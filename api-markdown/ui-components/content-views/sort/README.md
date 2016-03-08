[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-sort.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-sort

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-sort.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-sort

[npm-img]: https://img.shields.io/npm/v/ember-frost-sort.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-sort

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-sort
the drop-down select widget to rule them all






## Installation
```
ember install ember-frost-sort
```

## API
| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `sortableProperties` | `array` | `[{"label: "foo", "value": "bar"}]` | Array of sortable attributes. |
| `sortParams` | `array` | `[{"direction: "asc/desc", "value": <attr-name>}]` |  Array that specifies the sort order. |
| `on-change` | `string` | `<action-name>` | The action to call when the value of the select item changes. |

## Examples
```handlebars
{{frost-sort sortableProperties=sortAttributes on-change=(action 'sort') sortParams=sortOrder}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-sort.git
cd ember-frost-sort
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-sort/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
