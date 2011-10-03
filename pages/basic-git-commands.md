# Introduction to Basic Git Commands


## What is git?
[Git](http://git-scm.com/) is a version control system. While there are numerous uses for Git, we will highlight using it to manage the changes you make to your project. Check out the links at the bottom for some more ideas and uses for Git.

## Basic Commands

Git stores everything in a Git repository.  To retrieve a Git repository, there are two options.  You can either initialize a new repository in a project's directory or you can clone one from a public Git repository.

### Initialize a New Repository

To create a repository for an existing directory of files, `cd` into the home directory of your project and initialize the repository:

    git init

### Clone an Existing Repository

To create a copy of an existing project, you must run the `git clone` command with the URL for the project you want

    git clone git://github.com/radiant/radiant.git

## Working in Repository

Think of git as taking snapshots of your files.  You can edit and manipulate your files to how you want them, then you can send them to the staging area, and then you can take a snapshot of these files.

To add a list of files (README and test.rb) you can use:

    git add README test.rb

Or you can add all files in the directory:

    git add .

Lastly you want to commit the code to the repository:

    git commit -m 'first commit'

The `-m` option allows you to append a message with the commit. Preferably something useful so that you can know what that commit is about.

To view the status of your files in your directory:

    git status

This will tell you what files have been modified since the last time they were committed.

## Tools

A great tool to use is a git history viewer. Git comes in with a built in viewer. If you `cd` into your repository and run the `gitk` command you will be presented with a nice GUI to view your git history. This is a very barebones viewer. If you want to have one that feels more native to your OS and have some more functionalities I would look at [GitX](https://github.com/pieter/gitx/wiki/) for Mac and [tortoisegit](http://code.google.com/p/tortoisegit/) for Windows.

## Links

  * [[GitHub Help Section|http://help.github.com]]
  * [[Git Reference Site|http://gitref.org/]]
  * [[VIDEO: Railscasts on Git|http://railscasts.com/episodes/96-git-on-rails]]
  * [[VIDEO: PeepCode on Git|http://peepcode.com/products/git]]
  * [[BOOK and VIDEO: Getting Good with Git|http://rockablepress.com/books/getting-good-with-git/]]