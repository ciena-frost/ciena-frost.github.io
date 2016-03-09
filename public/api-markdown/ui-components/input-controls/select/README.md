[ci-img]: https://img.shields.io/travis/ciena-frost/ember-frost-select.svg "Travis CI Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-select

[cov-img]: https://img.shields.io/coveralls/ciena-frost/ember-frost-select.svg "Coveralls Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-select

[npm-img]: https://img.shields.io/npm/v/ember-frost-select.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-select

[![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]

# ember-frost-select
the drop-down select widget to rule them all






## Installation
```
ember install ember-frost-select
```

## API
| Attribute | Type | Value | Description |
| --------- | ---- | ----- | ----------- |
| `selected` | `number` or `array` | `1` or `[1, 2]` | The indices of the pre-selected values corresponding to values in the passed-in data. |
| `selectedValue` | `any` or `array`, if using multi-select | `'bar'` or `['bar', 'buzz']` | A value to choose in the drop down programmatically, or an array of values if using multi-select. Takes precedence over `selected` attribute. |
| `data` | `array` | `[{"label: "foo", "value": "bar"}]` |  An array of "label"/"value" key/value pairs representing the rows in the select drop-down. |
| `on-change` | `string` | `<action-name>` | The action callback to call when the value of the select component changes |
| `on-input` | `string` | `<action-name>` | The action callback to call when the value of the filter changes as the user types |

## Examples
Assuming the following data is available in the consuming context:
```javascript
data = [
  {
    "label": "foo",
    "value": "bar"
  },
  {
    "label": "fizz",
    "value": "buzz"
  }
]

singleSelected = 1
multipleSelected = [1, 2]
```

### Simple single select
```
{{frost-select
  data=data
  selected=singleSelected
  on-change=(action 'yourCallbackAction')
}}}
```

### Multi select
```
{{frost-multi-select
  data=data
  on-change=(action 'yourCallbackAction')
  selected=multipleSelected
}}}
```

### Simple single select w/ external filtering
```
{{frost-select
  data=data
  on-change=(action 'yourCallbackAction')
  on-input=(action 'yourInputFilterCallbackAction')
}}}
```

### Selecting by value
##### Single value
To select values from the drop down programmatically, you can use the `selectedValue` attribute
```javascript
var selectedValue = "bar"
```
And in your HTMLbars template

```
{{frost-select
  data=data
  selectedValue=selectedValue
}}
```
will select

##### Multiple Values
If you are using multi-select, an array will be treated as multiple values to choose. In the example,
the `selectedValue` attribute
```javascript
var selectedValue = ["bar", "buzz"]
```

will select both values `"bar"` and `"buzz"`.

NOTE: Changing `selectedValue` will overwrite any previous selections. However, changing `selectedValue` to be undefined, or a value that can be evaluated to be equal to the previous value (using lodash's `isEqual` function) will not cause values to be overwritten.

##Contributing
This following outlines the details of collaborating on this Ember addon:

### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember server`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
