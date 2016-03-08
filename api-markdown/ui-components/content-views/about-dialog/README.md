[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-about-dialog.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-about-dialog

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-about-dialog.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-about-dialog

[npm-img]: https://img.shields.io/npm/v/ember-frost-about-dialog.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-about-dialog

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-about-dialog
simple about dialog






## Installation
```
ember install ember-frost-about-dialog
```

## API
| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `isAboutVisible` | `boolean` | `true` | Displays about dialog |
|  |  | `false` | Hides about dialog |
| `dialogType` | `string`|  | Name of company |
| `dialogTitle` | `string`|  | Name of product |
| `dialogMessage` | `string`|  | Message for about dialog |
| `dialogServerMessage` | `string`|  | Message from the server |
| `dialogCopyrightText` | `string`|  | Copyright text |
| `dialogLicenseText` | `string`|  | License text |



## Examples
Triggered by pressing a button
```handlebars
{{#frost-button priority='primary' size='medium' on-click=(action "toggleAboutDialog" 'company')}}Company{{/frost-button}}
```

Corresponding action that sets the fields.
```
  actions: {
    toggleAboutDialog (type) {
      this.set('isAboutVisible', true)
      this.set('dialogType', type)
      this.set('dialogTitle', 'Product Name')
      this.set('dialogMessage', 'Product tag line bacon ipsum color ametr turducken tial')
      this.set('dialogServerMessage', ['Server Version: 5.0.0 257541', 'Client Version: 5.0.0'])
      this.set('dialogCopyrightText', 'Copyright &copy; 2016 Company, all rights reserved.')
      this.set('dialogLicenseText', [
        'This is example license text, overriding the default license text in frost-about-dialog component.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      ])
    }
```    

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-about-dialog.git
cd ember-frost-about-dialog
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-about-dialog/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
