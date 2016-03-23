[ci-img]: https://travis-ci.org/ciena-frost/ember-frost-password.svg "Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-password

[cov-img]: https://coveralls.io/repos/github/ciena-frost/ember-frost-password/badge.svg?branch=master "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-password

[npm-img]: https://img.shields.io/npm/v/ember-frost-password.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-password

# ember-frost-password <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

## Installation
```
ember install ember-frost-password
```

## API
| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `revealable` | `boolean` | `false` | **default**: Nothing to see here |
| | | `true` | Make password input revealable |
| `disabled` | `boolean` | `false` | **default**: Type to your heart's content |
| | | `true` | :no_entry_sign: Can't update this! :notes: |
| `onInput` | `string` | `<action-name>` | triggers associated action when the input value is changed |
| `value` | `string` | `<value-text>` | what text to put in input |

## Examples

### Handle Changes to Value
```handlebars
{{frost-password 
  onInput=(action 'closure')
}}
```

### Make Password Revealable
```handlebars
{{frost-password
  revealable=true
}}
```

### Disable Input
```handlebars
{{frost-password
  disabled=true
  value='Disabled'
}}
```

### Make Input Read Only Input
```handlebars
{{frost-password
  readOnly=true
  value='Read Only'
}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-password.git
cd ember-frost-password
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-password/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
