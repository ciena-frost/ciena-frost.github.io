
<!--Table of Contents-->
<!--(#generation)-->
<!--(#links)-->
<!--(#third-example)-->
<!---End Table of Contents-->


## Generation
  1. Fork the [repository](https://github.com/ciena-frost/ciena-frost.github.io)
  2. Create Folder and markdown files with a prefix of *[0-9][0-9]-* (Eg. 01-Overview/02-roadmap.md). The prefix dictates the order the tabs on the sidebar
  3. Push changes and create a Pull Request

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
