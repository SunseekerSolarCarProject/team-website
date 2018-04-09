#!/usr/bin/env bash

mkdir -p js

npm install
node_modules/.bin/bower install
node deploy.js
jekyll build
