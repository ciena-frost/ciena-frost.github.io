[ci-img]: https://travis-ci.org/ciena-frost/ember-frost-theme.svg "Build Status"
[ci-url]: https://travis-ci.org/ciena-frost/ember-frost-theme

[cov-img]: https://coveralls.io/repos/github/ciena-frost/ember-frost-theme/badge.svg?branch=master "Code Coverage"
[cov-url]: https://coveralls.io/github/ciena-frost/ember-frost-theme

[npm-img]: https://img.shields.io/npm/v/ember-frost-theme.svg "NPM Version"
[npm-url]: https://www.npmjs.com/package/ember-frost-theme

# ember-frost-theme <br /> [![Travis][ci-img]][ci-url] [![Coveralls][cov-img]][cov-url] [![NPM][npm-img]][npm-url]
SASS based default theme variables for Frost projects

# Usage


```
ember install ember-frost-theme
```


Modify your `ember-cli-build.js` to include:


```javascript
const app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/ember-frost-theme/scss'
      ]
    }
  })
```

Modify your `app.scss` to include


```sass
@import 'frost-theme';
```

You now have access to the theme variables

e.g.

`$frost-button-primary`

# Contribution

All uses of color in frost components must be aliased and included in the default frost theme with the appropriate
palette reference
