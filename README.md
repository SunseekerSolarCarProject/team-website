# Sunseeker Solar Car Project - Team Website

This repository contains the source for the Sunseeker Solar Car Project's Team Website. You can visit the website at: [https://www.wmich.edu/sunseeker](https://www.wmich.edu/sunseeker)

## Requirements

- Jekyll
- NodeJS and npm
- Bower

## Installing and Configuring

Once you have cloned the repository onto your machine, you will want to do the following to get the website up and running.

Firstly, install all of the dependencies, like so:

```sh
$ npm install
$ bower install
```

That's it, you are now ready to run the website locally, like so:

```sh
$ jekyll serve watch
```

## Good to knows

To make our JavaScripts a little nicer to work with, we utilize Browserify. That being so, we have a node script which must be run to compile the JavaScript files. This script can be run with the following:

```sh
$ node deploy.js
```

This script must be run after each modification made to any of the JavaScript files.
