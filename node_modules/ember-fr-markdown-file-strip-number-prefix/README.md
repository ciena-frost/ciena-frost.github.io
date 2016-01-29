# Ember-fr-markdown-file

Imports md files located in <project>/markdown.  File contents can be accessed using the helper `{{fr-markdown-file 'path/in/markdown/dir'}}`.  This is primarily useful as a way to keep markdown in separate files when using markdown components such as [ ember-cli-showdown](https://github.com/gcollazo/ember-cli-showdown)

## Example usage

{{markdown-to-html markdown=(fr-markdown-file 'test')}}

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
