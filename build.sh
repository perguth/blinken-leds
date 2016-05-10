#!/bin/bash
rm -rf dist
mkdir dist
browserify index.js -o dist/bundle.js
cp index.html dist/index.html
cp style.css dist/style.css
