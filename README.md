# Frost guide

## Getting Started

Before you install anything, you'll have to add a couple environment variables to ensure that the server can do its thing.

You'll have to populate the following environment variables to continue. This process will look something like this...

```
export BITBUCKET_USER=<your user> #example cc40625 please don't use mine :)
export BITBUCKET_PASS=<your password>
```

Now you can begin.

```
npm install && bower install;
npm start; #runs ember build && ./bin/www
```

I did a quick set up of Express to be the server side. Mostly to handle resources from [bitbucket](https://bitbucket.ciena.com/projects) and send back index.html in appropriate cases for Ember to take care of.

## Contributing to the Documentation

### Information Routes

This includes everything except `app/pods/frost-components/*`. Adding to these will mostly be editing both the `controller.js`, as well as the `template.hbs` for the respected route. Any tweaks or suggestions can be made via PR.

### Component Routes

#### Getting Started
This is a bit trickier, but is abstracted enough so you can add content without understanding the underlying architecture.

A brief run through of how the `frost-components.details` route works.

The component name is passed through as a path parameter. Which means the router recognizes the following url

```
/frost-components/:name
```

Some of the logic with routing components is a bit tricky. So **components must be named how they appear on BitBucket**. This is essential as the server side logic of retrieving the information content is based on the name passed in.

```
`frost-${name}` //Ember
`fr-${name}`    //React
```
#### Adding or Removing Components

Components can be **added or removed** by editing `app/pods/application/menu.js`. In there you'll find an ES6 module devoted to the list of possible routes.

Near the bottom you'll find the following snippet.

```
{
	alias: 'Components',
	type: 'category',
	route: 'frost-components',
	items: [{
		alias: 'Accordion'
	}, {
		alias: 'Button'
	}, {
		alias: 'Collapsible'
	}, {
		alias: 'Combo Box'
	}, {
		alias: 'Context Menu'
	}, {
		alias: 'Core'
	}, {
		alias: 'File Chooser'
	}, {
		alias: 'Help Tour'
	}, {
		alias: 'Info Pod'
	}, {
		alias: 'Link'
	}, {
		alias: 'List'
	}, {
		alias: 'Modal'
	}, {
		alias: 'Notification'
	}, {
		alias: 'Password'
	}, {
		alias: 'Progress'
	}, {
		alias: 'Radio'
	}, {
		alias: 'Scroll'
	}, {
		alias: 'Table'
	}, {
		alias: 'Tabs'
	}, {
		alias: 'Text'
	}, {
		alias: 'Toggle'
	}].map(function(e) {
		e.model = e.alias.toLowerCase().replace(' ', '-');
		e.route = 'frost-components.details';
		e.type = 'route';
		return e;
	})
```

The **nomenclature** of adding a component is capitalized. Dashes in the BitBucket repository name, ex. `frost-accordian`, will be `alias`ed as `Frost Accordian` as seen above. The application will handle the rest.

Each component has four tabs. Description, Ember API, React API, and Demo.

Ember API, React API, and the demo will be handled by the program. If the content doesn't exist, an error message will show in its place.

As for the **Description** tab, this is where you'll have to get involved.

In the directory `public/docs/components`, you will create a folder representing your component in the naming style mentioned above, with lower case letters and dashes separating words. The main file will be your `description.md`.

There is full creative control on populating this file. As for assets referenced in the mentioned markdown file, the path must be given in such a way that makes sense to the server.

An example is given in `public/docs/components/accordion`, with use of the file `favicon.ico`:

```
# Frost-Accordion

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent rutrum commodo elit et lacinia. Donec ut purus sagittis, porttitor turpis ac, laoreet enim. Aliquam ut pharetra justo, vitae porta nunc. Nulla ultrices ac leo quis ullamcorper. Aliquam nec nisl sed justo suscipit commodo ut ac sapien. Vivamus accumsan viverra varius. Nullam quis magna elit. Phasellus nulla dui, faucibus quis sapien non, malesuada laoreet risus. Donec felis massa, maximus vitae massa nec, consectetur laoreet mi. Maecenas eget nunc ligula. Mauris sed arcu ultrices, porta odio eget, condimentum turpis. Ut eget molestie quam. Sed suscipit in lorem eu condimentum. Mauris egestas auctor nisl.

!["Favicon"](docs/components/accordion/favicon.ico "Favicon")

```

### Questions or Concerns

Feel free to contact me directly through email, jabber, or slack.
 - Seena Rowhani
