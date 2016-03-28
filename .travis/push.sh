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
  npm install && bower install
  ./generate-frost-guide-content.sh
  git add --all
  git commit --message "[ci skip] Generating files/folders"
  git push
}

publish_gh_pages() {
  npm install && bower install
  ember github-pages:commit --message "[ci skip] Update gh-pages" --branch master
  git push
}
if [ "${ghToken:-false}" != "false" ]; then
setup_git
commit_website_files
publish_gh_pages
fi
