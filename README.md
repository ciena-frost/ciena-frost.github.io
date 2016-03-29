# Frost Guide

## Development Environment

### Markdown pages

1. npm install
2. bower install
3. npm start
  * This command first runs `node generate-pages-from-markdown.js` which generates config/routing.js and creates `pods` matching the folders/files within the markdown directory. It then serves the frost-guide.

### Component APIs and Demos 

1. npm install
2. bower install
3. Set environment variable ghToken
  * [Create a github API personal access token](https://github.com/settings/tokens)
    * The token should have the following scopes: `public_repo, read:org, repo:status, repo_deployment, user:email`
  * Once create run `export ghToken=<token>` in your terminal; replacing `<token>` with your generated token.
    * The example above only creates the environment variable locally in the terminal. If you wish to make the environemt variable permanent you can follow these [steps](http://stackoverflow.com/questions/7501678/set-environment-variables-on-mac-os-x-lion)
4. Run `./generate-frost-guide-content.sh` to generate all of the guide's content.
  * The following 3 scripts will run sequentially.
    * `node generate-roadmap.js` makes api calls to the Frost OSS:Kickoff Asana project to get the list of incomplete tasks and writes it in the appropriate markdown file.
    * `node generate-pages-from-markdown.js` generates config/routing.js and creates `pods` matching the folders/files within the markdown directory.
    * `node generate-components.js` adds the Component APIs and Demos to the pods at the path indicated by the imported repo's frostGuideDirectory package.json variable.
