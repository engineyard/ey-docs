# The Engine Yard Wiki

This repo holds all the content (and other bits) for the Engine Yard wiki, located at [EY Wiki][ey-wiki].

The inspiration of this wiki came from the awesome guys at [Basho][basho] who have the [Basho Wiki][basho-wiki] setup with Gollum.

We are using [Gollum][gollum] and [Gollum-Site][gol-site] to generate the wiki. Gollum is a great piece of open source software released by the GitHub team that lets you maintain and build wikis from the contents of a Git repo.

`gollum-site` generates html from pages written in any format supported by Gollum (ASCIIDoc, Creole, Markdown, Textile, etc.).

<A name="contrib">
## How to Contribute

Part of the reason we switched to Gollum and GitHub for the EY Wiki was to make it easier for people to contribute. Just treat it like a code repo: If you have anything to change or add, simply:

1. [Fork this repo][forking]

2. [Build a local copy][build]

3. Create a new Branch:

        git checkout -b <branch-name>

4. Add your changes

5. Run the specs and fix any formatting issues

        rake spec

6. Commit changes to your branch

7. [Send us a pull request][pull-req]

If it's a small or obvious change, we're likely to merge it right away.  If we have questions, we'll communicate with you using the pull request's issue page.

The [Gollum README][gol-read] provides a great introduction to using the wiki system.

<A name="build">
## Building the Wiki Locally

If you want to build and view the Riak Wiki locally, here is what you need to do:

1. Clone this repo:

        git clone git://github.com/engineyard/ey_wiki.git

2. Ensure that you have [Bundler][bundler] installed:

        gem install bundler

3. Install all pre-requisite gems:

        bundle install

4. Generate the site and start a local server (This will take a minute. Don't fret.)

        gollum-site generate   # Will generate the files
        gollum-site serve      # Will start the gollum-site server

5. Navigate to <http://localhost:8000/> (Default) to access a fully-functional copy of the EY Wiki.


<A name="feedback">
## Issues, Questions, Comments, Etc.

* Create a new [Issue][issues]

[issues]:     https://github.com/engineyard/ey_wiki/issues "EY-Wiki Issues Page"
[forking]:    http://help.github.com/forking/ "Github Forking Guide"
[pull-req]:   http://help.github.com/pull-requests/ "Github Pull-Requests Guide"
[build]:      #build "Building the Wiki"
[bundler]:    https://github.com/carlhuda/bundler/ "Bundler"
[gol-read]:   https://github.com/github/gollum/blob/master/README.md "Gollum README"
[gollum]:     https://github.com/github/gollum "Gollum Repo"
[gol-site]:   https://github.com/dreverri/gollum-site "Gollum-Site Repo"
[basho-wiki]: http://wiki.basho.com "Basho Wiki"
[basho]:      http://basho.com "Basho"
[ey-wiki]:    http://docs.engineyard.com "EY Wiki"