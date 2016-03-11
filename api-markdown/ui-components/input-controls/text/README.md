[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-text.svg "Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-text

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-text.svg "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-text

[npm-img]: https://img.shields.io/npm/v/ember-frost-text.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-text

# ember-frost-text <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

## Installation
```
ember install ember-frost-text
```

## API

| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `autofocus` |`boolean` | `false` | **default**: Nothing to see here, just your average text input |
| | | `true` | Look at me! |
| `disabled` | `boolean` | `false` | **default**: Type to your heart's content |
| | | `true` | :no_entry_sign: Can't update this! :notes: |
| `on-input` | `string` | `<action-name>` | triggers associated action when the input value is changed |
| `value` | `string` | `<value-text>` | what text to put in input |

## Examples 

### Focus on Input
```handlebars
{{frost-text
  autofocus=true
}}
```

### Handle Changes to Value
```handlebars
{{frost-text
  on-input=(action 'closure')
}}
```

### Bind Value
```handlebars
{{frost-text
  value=boundText
}}
```

### Disable Input
```handlebars
{{frost-text
  disabled=true
  value="Disabled"
}}
```

### Make Input Read Only
```handlebars
{{frost-text
  readOnly=true
  value="Read Only"
}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-text.git
cd ember-frost-text
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-text/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
