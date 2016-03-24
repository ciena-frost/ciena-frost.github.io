# Frost guide

## Installation
1. npm install && bower install
2.  Install all required modules for scripts
  ```bash
  npm install frost-components/frost-css
  ember install frost-components/frost-svg
  npm install path-posix
  npm install walk-sync
  npm install chalk
  npm install path
  npm install bower
  npm install sync-request
  npm install sync-exec
  npm install marked
  npm install highlight
  npm install tosource
  npm install remove-markdown-and-html
  npm install fs-finder
  npm install npm
  ```

3. Set environment variable ghToken
  * [Create a github API personal access token](https://github.com/settings/tokens)
    * The token should have the following scopes: `public_repo, read:org, repo:status, repo_deployment, user:email`
  * Once create run `export ghToken=<token>` in your terminal; replacing `<token>` with your generated token.
    * The example above only creates the environment variable locally in the terminal. If you wish to make the environemt variable permanent you can follow these [steps](http://stackoverflow.com/questions/7501678/set-environment-variables-on-mac-os-x-lion)
4. Run scripts
  * For now you must delete all pods `application, components, and contributing`, as these contain non-generated code. The reason for this is due to Mac and Linux compatability. And we have yet to rename all folders on Github to lowercase(Mac is case-insensitive).
  * Run `./generate-frost-guide-content.sh`
  * Or optionally run `node generate-pages-from-markdown.js` or `node generate-components.js`
    * `node generate-pages-from-markdown.js` generates the routing.js file and creates `pods` matching the folders/files within the markdown directory 
    * `node generate-components.js` generates the component pages with their respective demos. _This script can take a while. Which is why they're separated_


1. Generating the Asana Roadmap
  * Create a personal access token by going to the “apps” tab of your profile settings then click "Manage Developer Apps"
  * Set the environment variable `asanaToken` equal to your personal access token
2. In the `package.json` change the value of `"roadmapLastUpdate": "2016-03-23",` to the current date
3. Run `node generate-roadmap.js`
