# Phaser Boilerplate

A boilerplate for making Phaser games with Typescript and Webpack.

I'm supposed to add an explanation of the things I did to make it work :)

## Requirements

This was made using Node v8.9.1.

## Running the Project

First, install dependencies

`$ npm install` 

The server runs in Typescript using ts-node with no need of compiling first (only the game script gets built so it can be added to the HTML file). After that you can run the app in `http://localhost:3000/`

`$ npm run serve` 

To only build the game app script

`$ npm run build` 

And to run a simple test for serving the index file

`$ npm run test`

## Creating the boilerplate

### Add build Phaser files

* Phaser: Game framework
* Pixi: Rendering Engine
* P2: Physics Engine

### Typescript Definitions

* Import definitions for Phaser and Pixi

### Webpack configuration

* Path aliases
* Expose Loader: To add modules as global entities.