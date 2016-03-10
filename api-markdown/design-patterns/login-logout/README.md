[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-login.svg "CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-login

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-login.svg "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-login

[npm-img]: https://img.shields.io/npm/v/ember-frost-login.svg "Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-login

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-login


## Installation
```
ember install ember-frost-login
```

## API
| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `logo` | `string` | `<icon-name>` | the name of a logo svg you will use |
| `brandingStrip` | `string` | `<icon-name>` | the name of a branding strip svg you will use |
| `on-enter` | `string` | `<action-name>` | triggers associated action when Enter key is pressed |


## Examples
```handlebars
{{#frost-login logo='myLogo' brandingStrip='myBrand' on-enter='submitLogin' as |section|}}
  {{#if section.form}}
  {{frost-bunsen-form
    model=loginFormModel
    onChange=(action "loginFormValueChanged")
    onValidation=(action 'onValidation')
    value=loginFormValue
  }}
  {{/if}}
  {{#if section.actions}}
    {{frost-button
      disabled=(not valid)
      on-click=(action "submitLogin")
      priority="primary"
      size="medium"
      text="Login"
    }}
  {{/if}}
{{/frost-login}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-login.git
cd ember-frost-login
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-login/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
