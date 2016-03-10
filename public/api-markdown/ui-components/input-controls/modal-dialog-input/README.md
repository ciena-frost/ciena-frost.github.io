[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-modal-input.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-modal-input

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-modal-input.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-modal-input

[npm-img]: https://img.shields.io/npm/v/ember-frost-modal-input.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-modal-input

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-modal-input






## Installation

```
ember install ember-frost-modal-input
```

## API
| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `title` | `string` | | Optional custom title |
| `subtitle` | `string` | |  Optional custom subtitle |
| `titleComponent` | `string` | | Optional title component to replace standard title/subtitle styles |

## Examples
### Controller
Inject the modal-forms service into the parent controller
```js
modalForms: Ember.inject.service('modal-forms'),
isModalActive: Ember.computed.readOnly('modalForms.isModalActive'),
```

Change the active state of the modal in your component
```js
willInsertElement () {
  this.get('modalForms').setModalActive(true)
},

willDestroyElement () {
  this.get('modalForms').setModalActive(false)
}
```

### Template
Custom classes are applied to the parent template, based on state of the modal
```handlebars
{{liquid-modal class=(if isModalActive 'form-container' '')}}
```

#### Default title component template
```handlebars
{{#frost-modal-input title='Test title' subtitle='Subtitle'}}
    // Custom modal content
{{/frost-modal-input}}
```

#### Custom title component template
```handlebars
{{#frost-modal-input titleComponent='myTitleComponent'}}
  // Custom modal content
{{/frost-modal-input}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-modal-input.git
cd ember-frost-modal-input
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-modal-input/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
