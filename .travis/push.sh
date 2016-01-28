#!/bin/sh

setup_git() {
  git config --global user.email "ericwhite613@gmail.com"
  git config --global user.name "Eric White"
}

commit_website_files() {
  git add .
  git checkout –b temp #makes a new branch from current detached HEAD
  git branch –f dev temp #update master to point to the new <temp> branch
  git branch –d temp #delete the <temp> branch
  git push origin master #push the re-established history
  git commit --message "[ci skip]"
  git push
}

#upload_files() {
#  
#}

setup_git
commit_website_files
#upload_files