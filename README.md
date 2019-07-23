# quick-app

## Overview

`quick-app` is minimal developer setup (live reload + node-sass) for prototyping front-end code on 'nix systems.  It uses [live-server](https://github.com/tapio/live-server) and [node-sass](https://github.com/sass/node-sass) (with a few configuration tweaks to avoid over-watching files) for live reloading on code changes.

Sass/SCSS is traspiled from `assets/css/main.scss` to `dist/css/main.css`.

## Installation / Configuration


```shell

# clone repo
git clone https://github.com/foundling/quick-app

# remove .git repo from quick app and re-initialize it
cd quick-app
rm -rf ./.git
git init .

# give run script exec permissions
chmod +x ./run

# install dependencies
npm install

# run server
npm start

```
