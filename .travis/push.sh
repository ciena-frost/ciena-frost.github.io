#!/bin/sh

setup_git() {
  git clone --branch=$branch $repo
  cd ciena-frost.github.io
  git config --global user.email "ericwhite613@gmail.com"
  git config --global user.name "Eric White"
  git config credential.helper "store --file=.git/credentials"
  echo "https://${GH_TOKEN}:@github.com" > .git/credentials
  git fetch origin
  git checkout -b master origin/master
}

commit_website_files() {
  git checkout $branch
  ember install ember-cli-github-pages
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
  npm install npm
  npm install && bower install
  node generate-roadmap.js
  node generate-pages-from-markdown.js
  node generate-components.js
  git add --all
  git commit --message "[ci skip] Generating files/folders"
}

publish_gh_pages() {
  git commit -am "[ci skip] install ember gh pages"
  ember github-pages:commit --message "[ci skip] Update gh-pages" --branch="master"
  git push origin gh-pages:gh-pages
}
if [ "${ghToken:-false}" != "false" ]; then
setup_git
commit_website_files
publish_gh_pages
fi
