Overview
--------

All functionality from app development is available as well as a dummy application for development/testing.

### Project structure

Addon projects consist of 4 main parts:
- The `addon` directory: code for the addon
- The `app` directory: code that merges with the consuming app's namespace
- The `tests` directory: contains standard testing and a `dummy/app` directory with a development application
- The `index.js` and `ember-cli-build.js` files: `index.js` manages the addon build for a consuming app while
`ember-cli-build.js` manages the build for the dummy app

#### Addon namespaces

Addons are given a separate namespace within Ember apps.  For instance, the component in the frost-button project
could be imported using `import Component from 'frost-button/pods/components/frost-button/component'`.  To add a
component into the app namespace the component can be re-exported in the addon's app directory - e.g.:

app/frost-button.js
```
export { default } from 'frost-button/pods/components/frost-button/component';
```

This re-export allows the component to be referenced in a consuming app's templates directly - e.g.:

```
{{frost-button}}
```

#### Addon conventions

Addon projects are generated with:
- A component and template (e.g. `frost-button/addon/pods/components/frost-button/component.js + template.hbs`)
- A component SCSS (e.g. `frost-button/addon/styles/addon.scss + _frost-button.scss`) with bourbon and frost-css imported
- A re-export of the component into the app namespace
- A demo route for the component (e.g. `frost-button/tests/dummy/app/pods/demo/route.js + controller.js + template.hbs`)
- Default routing for the demo (`/`)
- Standard tooling, including SCSS compilation, mocha and mirage testing, jscs, etc.

### Running an existing project
```bash
git clone <project>
cd <project>
npm install && bower install
ember server
```

Open a browser to http://<server>:4200 to view the project.

### Creating an addon project

```bash
ember addon <frost-addon>
cd <frost-addon>
ember install frost-cli
ember frost init // Answer yes (press enter) for all prompts
rm -rf node_modules bower_components
npm install && bower install
ember server
```

Open a browser to http://<server>:4200 to view the addon demo.

### Testing an addon

Run `ember test` or alternatively run `ember server` and open a browser to `<server>:4200/tests?coverage`

### Publishing an addon

Frost addons are published internally to
[Artifactory](https://artifactory.ciena.com/webapp/#/artifacts/browse/tree/General/blueplanet-npm-local).
This is currently a manual process (e.g. `npm publish`)
