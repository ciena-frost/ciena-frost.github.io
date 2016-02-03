#!/bin/sh

setup_git() {
  git clone --branch=$branch $repo
  cd ciena-frost.github.io
  git config --global user.email "ericwhite613@gmail.com"
  git config --global user.name "Eric White"
  git config credential.helper "store --file=.git/credentials"
  echo "https://${GH_TOKEN}:@github.com" > .git/credentials
  export HOMEBREW_GITHUB_API_TOKEN=${GH_TOKEN}
  git fetch origin
  git checkout -b master origin/master
}

commit_website_files() {
  git checkout $branch
  npm install frost-components/frost-css
  npm install frost-components/frost-button
  npm install frost-components/frost-tabs
  npm install frost-components/frost-link
  npm install frost-components/frost-scroll
  npm install frost-components/frost-svg
  npm install frost-components/frost-text
  npm install && bower install
  npm install path-posix
  npm install walk-sync
  npm install chalk
  npm install path
  npm install bower
  npm install sync-request
  npm install npm
  node generate-pages-from-markdown.js
  node generate-components.js
  git add --all
  git commit --message "[ci skip] Generating files/folders"
  git push
}

publish_gh_pages() {
  echo "I AM NOW ABOUT TO EXECUTE THE GH_PAGES SHELL COMMANDS"
  echo "I AM NOW ABOUT TO EXECUTE THE PUBLISH COMMAND"
  ember install ember-cli-github-pages
  git commit -am "[ci skip] install ember gh pages"
  ember github-pages:commit --message "[ci skip] Update gh-pages" --branch="master"
  git push
}

setup_git
commit_website_files
publish_gh_pages
