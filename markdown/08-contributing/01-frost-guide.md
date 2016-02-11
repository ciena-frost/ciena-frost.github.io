## Editing an Existing Page
  1. Fork the [repository](https://github.com/ciena-frost/ciena-frost.github.io)
  2. Edit the markdown file inside the markdown directory that corresponds to the page you wish to edit.
  3. Push the changes to the fork.
  4. Create a Pull Request.

## Adding a New Page
  1. Fork the [repository](https://github.com/ciena-frost/ciena-frost.github.io)
  2. Create Folder and markdown files inside the markdown directory with a prefix of *[0-9][0-9]-* (Eg. 01-Overview/02-roadmap.md). The prefixes dictate the order of the tabs on the navigation sidebar.
  3. Push the changes to the fork.
  4. Create a Pull Request.

## Editing Scrollspy Tabs
The scrollspy is the table of contents on the right side of every page. Each one is automatically built from the Atx-style headers in the page's corresponding markdown file.

```markdown
# This header would appear in the scrollspy
## This header would appear in the scrollspy
```
If you wish to add a header that does not appear in the scrollspy, you can use Setext-style headers.
```markdown
This header would not appear in the scrollspy
=============================================
This header would not appear in the scrollspy
---------------------------------------------
```

## Creating Component Pages
Just like regular pages, component pages require the creation of markdown files and folders where you wish to have your content appear. The markdown file will act as the content of the description tab for the component page.

The package.json file in the component's repository must have a frostGuideDirectory attribute where the value is equal to the markdown file location in the markdown folder (stripped of prefix and file extension *.md* ):

```json
...
"frostGuideDirectory": "ui-components/button-controls/button",
...
```

## Updating Component Pages
Updates of the content in the API and Demo tabs has to be done in the component's repository. However, the changes made to the README or demo page in a frost component repository will not be reflected on this site until a new build is triggered. Follow these instructions to trigger a new build:

  1. Fork the [repository](https://github.com/ciena-frost/ciena-frost.github.io)
  2. Increment the version number in the package.json file located in the root directory.

  ```json
  {
    "name": "frost-guide",
    -- "version": "0.0.1",
    ++ "version": "0.0.2",
    ...
  ```

  3. Push the change to the fork.
  4. Create a pull request.

## Adding images
Images must be placed in the *~/public/assets/images* folder (please make subdirectories for individual pages).

Referencing the image in markdown:
```markdown
Inline-style:
![alt text](assets/images/test.png)
Reference-style:
![alt text][logo]
[logo]: assets/images/test.png "Logo Title Text 2"
```
