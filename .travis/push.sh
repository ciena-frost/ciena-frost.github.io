#!/bin/sh

setup_git() {
  git clone --branch=$branch $repo
  cd ciena-frost.github.io
  git config --global user.email "ericwhite613@gmail.com"
  git config --global user.name "Eric White"
  git config --global push.default simple
  npm set progress=false
  git config credential.helper "store --file=.git/credentials"
  echo "https://${GH_TOKEN}:@github.com" > .git/credentials
  git fetch origin
  git checkout -b master origin/master
}

commit_website_files() {
  git checkout $branch
  ember install ember-cli-github-pages
  npm install npm
  npm install eslint@2.2.0
  npm install eslint-config-standard
  npm install eslint-config-frost-standard
  npm install babel-eslint
  npm install && bower install
  ./generate-frost-guide-content.sh
  git add --all
  git commit --message "[ci skip] Generating files/folders"
}

publish_gh_pages() {
  npm install && bower install
  external=true ember github-pages:commit --message "[ci skip] Update gh-pages" --branch master
  git push
  git checkout dev
  node external-publish.js unMark
  git add --all
  git commit --message "[ci skip] Put back internal content"
  git push
}
if [ "${ghToken:-false}" != "false" ]; then
setup_git
commit_website_files
publish_gh_pages
fi
