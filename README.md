# Frost Guide

# Moved to https://bitbucket.ciena.com/projects/BP_FROST/repos/frost-guide/browse . Keeping only for gh-pages branch

## Development Environment

### Markdown Pages

1. `npm install`
2. `bower install`
3. `npm start`
  * This command first runs `node generate-pages-from-markdown.js` which generates config/routing.js and creates `pods` matching the folders/files within the markdown directory. It then serves the frost-guide.

### Component APIs and Demos 

1. `npm install`
2. `bower install`
3. Set environment variable ghToken
  * [Create a github API personal access token](https://github.com/settings/tokens)
    * The token should have the following scopes: `public_repo, read:org, repo:status, repo_deployment, user:email`
  * Once create run `export ghToken=<token>` in your terminal; replacing `<token>` with your generated token.
    * The example above only creates the environment variable locally in the terminal. If you wish to make the environemt variable permanent you can follow these [steps](http://stackoverflow.com/questions/7501678/set-environment-variables-on-mac-os-x-lion)
4. External Build
  * Run `./generate-frost-guide-content.sh` to generate all of the guide's content.
    * The following 3 scripts will run sequentially.
      * `generate-roadmap.js` makes api calls to the Frost OSS:Kickoff Asana project to get the list of incomplete tasks and writes it in the appropriate markdown file.
      * `generate-pages-from-markdown.js` generates config/routing.js and creates `pods` matching the folders/files within the markdown directory.
      * `generate-components.js` adds the component APIs and Demos to the pods at the path indicated by the imported repo's frostGuideDirectory package.json variable.
  
    * Note that the scripts can be run individually with `node script-name.js`. However, one should remember that `generate-components.js` requires `generate-pages-from-markdown.js` to have run once. It should also be noted that running `generate-pages-from-markdown.js` removes the component's APIs and Demos.
5. Internal Build
  * Run `./generate-frost-guide-external-content.sh` to generate all of the guide's content.
    * The following 4 scripts will run sequentially.
      * `external-publish.js` removes private markdown/images files and folders
      * `generate-roadmap.js` makes api calls to the Frost OSS:Kickoff Asana project to get the list of incomplete tasks and writes it in the appropriate markdown file.
      * `generate-pages-from-markdown.js` generates config/routing.js and creates `pods` matching the folders/files within the markdown directory.
      * `generate-components.js` adds the component APIs and Demos to the pods at the path indicated by the imported repo's frostGuideDirectory package.json variable.
    * Note that the scripts can be run individually with `node script-name.js`. However, one should remember that `generate-components.js` requires `generate-pages-from-markdown.js` to have run once. It should also be noted that running `generate-pages-from-markdown.js` removes the component's APIs and Demos. 
  * Run `external=true ember <serve/build>`
    * `external=true` is a node global variable that will take out `<private> </private>` content from markdown files and search index.
  * Once done run `node external-publish.js unMark`
    * This will place the private markdown/images folders and files in back in your working directory
