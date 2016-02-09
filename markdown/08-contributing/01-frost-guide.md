## Editing an Existing Page
  1. Fork the [repository](https://github.com/ciena-frost/ciena-frost.github.io)
  2. Edit the markdown file inside the markdown directory that corresponds to the page you wish to edit.  
  3. Push your changes to your fork and create a Pull Request.

## Adding a New Page
  1. Fork the [repository](https://github.com/ciena-frost/ciena-frost.github.io)
  2. Create Folder and markdown files inside the markdown directory with a prefix of *[0-9][0-9]-* (Eg. 01-Overview/02-roadmap.md). The prefixes dictate the order of the tabs on the navigation sidebar.
  3. Push your changes to your fork and create a Pull Request.
  
## Editing Scrollspy Tabs
The scrollspy is the table of contents on the right side of every page. Each one is automatically built from the Atx-style headers in the page's corresponding markdown file.
  
```markdown
# This header would appear in the scrollspy
## This header would appear in the scrollspy 
```
If you wish to add a header that does not get appear in the scrollspy, you can use Setext-style headers.
```markdown
This header would not appear in the scrollspy
=============================================
This header would not appear in the scrollspy
---------------------------------------------
```
  
## Creating component pages
To create a component page you must add also create markdown files and folders where you wish to have your content appear. The markdown file will act as the description for the component page.

  The package.json of the component must have the frostGuideDirectory where the value is equal to the markdown file location in the markdown folder(stripped of prefix and file extension *.md* ):

```json
...
"frostGuideDirectory": "ui-components/button-controls/button",
...
```


## Run a new build
  If there are changes in components README or demo page that you wish appear on this site follow these steps:
  1. Fork the [repository](https://github.com/ciena-frost/ciena-frost.github.io)
  2. Increment the version number in package.json
  3. Push the changes
  4. Create a pull request
