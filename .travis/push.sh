#!/bin/sh

setup_git() {
  git config --global user.email "ericwhite613@gmail.com"
  git config --global user.name "Eric White"
}

commit_website_files() {
  git add .
  git commit --message "[ci skip]"
  git push
}

#upload_files() {
#  
#}

setup_git
commit_website_files
#upload_files