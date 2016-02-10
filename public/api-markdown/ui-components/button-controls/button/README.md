[ci-img]: https://travis-ci.org/ciena-frost/ember-frost-button.svg "Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-button

[cov-img]: https://coveralls.io/repos/github/ciena-frost/ember-frost-button/badge.svg?branch=master "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-button

[npm-img]: https://img.shields.io/npm/v/ember-frost-button.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-button

# ember-frost-button <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

 * [Installation](#Installation)
 * [API](#API)
 * [Examples](#Examples)
 * [Development](#Development)

## Installation
```
ember install ember-frost-button
```

## API

| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `autofocus` |`boolean` | `false` | **default**: Nothing to see here, just your average button |
| | | `true` | Look at me! |
| `disabled` | `boolean` | `false` | **default**: Click to your heart's content |
| | | `true` | :no_entry_sign: Can't click this! :notes: |
| `on-click` | `string` | `<action-name>` | triggers associated action when the button is clicked |
| `icon` | `string` | `<icon-name>` | the name of a frost icon from `ember-frost-icons` |
| `text` | `string` | `<button-text>` | text do display on the button |
| `subtext` | `string` | `<button-subtext>` | subtext do display on the button underneath main `text` |
| `size` | `string` | `small` | The smallest button you ever did see |
| | | `medium` | **default**: Not quite as small as `small`, but not very big either |
| | | `large` | Now *that's* what I call a button! |
| | | `extra-large` | My grandma, what a big button you have! <br /> Recommended when `icon`, `text`, and `subtext` are used together |
| `priority` | `string` | `primary` | Call-to-action :telephone: |
| | | `secondary` | **default**: Run of the mill, garden variety  |
| | | `tertiary` | Low-key, subdued  |
| | | `confirm` | An alias for `primary`  |
| | | `normal` | An alias for `secondary`  |
| | | `cancel` | An alias for `tertiary`  |

## Examples

### Text
```handlebars
{{frost-button
  autofocus
  disabled=isDisabled
  on-click=(action 'closure')
  priroty='primary'
  size='small'
  text='Text'
}}
```

### Icon
```handlebars
{{frost-button
  icon='frost/add'
  on-click=(action 'closure')
  priority='tertiary'
  size='medium'
}}
```

### Icon Text
```handlebars
{{frost-button
  icon='frost/add'
  on-click=(action 'closure')
  priority='secondary'
  size='large'
  text='Text'
}}
```

### Info
```handlebars
{{frost-button
  icon='frost/add'
  on-click=(action 'closure')
  priority='primary'
  size='extra-large'
  subtext='Subtext'
  text='Main Text'
}}
```

## Development
### Setup
```
git clone git@github.com:ciena-frost/ember-frost-button.git
cd ember-frost-button
npm install && bower install
```

### Development Server
A dummy application for development is available under `ember-frost-button/tests/dummy`.
To run the server run `ember server` (or `npm start`) from the root of the repository and
visit the app at http://localhost:4200.

### Testing
Run `npm test` from the root of the project to run linting checks as well as execute the test suite
and output code coverage.
