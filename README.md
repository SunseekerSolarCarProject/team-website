# Solar Car Website

This is the website for the WMU sunseeker solar car team

## Prerequisite

You must download [node.js](https://nodejs.org/en/)

It is recomended that you install [xampp](https://www.apachefriends.org/index.html) for testing

## Setup

After cloning this repo run `npm install` in the directory

To start a test server run `npm start` and open `localhost:4200`

All editable data is located in one of the ts files in the `_data` folder

Images are stored in the `assets/_images` folder

## Build

When done making changes run the `npm run build` 

The built file will be generated in the dist folder

**The contents of the dist file are the only thing that gets loaded to the server**

To test the built dist folder copy it in the htdocs file of xampp and open localhost/dist
