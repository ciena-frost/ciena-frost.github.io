/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app')
var Funnel = require('broccoli-funnel')

module.exports = function (defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-mocha': {
      useLintTree: false
    },
    sassOptions: {
      includePaths: [
        'bower_components/bourbon/app/assets/stylesheets',
        'node_modules/frost-css/styles'
      ]
    },
    'ember-prism': {
      'theme': 'coy',
      'components': ['scss', 'sass', 'javascript', 'handlebars', 'markdown', 'css', 'git', 'bash', 'json'],
      'plugins': ['line-highlight']
    }
  })

  var font = new Funnel('vendor/google/fonts/roboto', {
    srcDir: '/',
    include: ['**/*.woff2', '**/stylesheet.css'],
    destDir: '/assets/fonts'
  })

  app.import('vendor/jquery-scrollspy/scrollspy.js');

  return app.toTree(font)
}