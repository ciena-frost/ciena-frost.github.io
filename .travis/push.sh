#!/bin/sh

setup_git() {
  git config --global user.email "ericwhite613@gmail.com"
  git config --global user.name "Eric White"
}

commit_website_files() {
  git checkout dev
  node generate-pages-from-markdown.js
  git add --all
  git commit --message "[ci skip] Generating files/folders"
  git push
}

#upload_files() {
#  
#}

setup_git
commit_website_files
#upload_files
