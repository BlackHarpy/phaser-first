'use strict'

import State from './state'

const paddleImage  = require('assets/img/paddle.png')
const greenBrickImage  = require('assets/img/brick_green.png')
const purpleBrickImage  = require('assets/img/brick_purple.png')
const redBrickImage  = require('assets/img/brick_red.png')
const yellowBrickImage  = require('assets/img/brick_yellow.png')
const ballImage  = require('assets/img/ball.png')
const blueBackgroundImage  = require('assets/img/bg_blue.png')
const blackBackgroundImage  = require('assets/img/bg_black.png')

export default class PreloaderState extends State {
  preload() {
    this.game.load.image('paddle', paddleImage)
    this.game.load.image('greenBrick', greenBrickImage)
    this.game.load.image('purpleBrick', purpleBrickImage)
    this.game.load.image('redBrick', redBrickImage)
    this.game.load.image('yellowBrick', yellowBrickImage)
    this.game.load.image('ball', ballImage)
    this.game.load.image('blackBackground', blackBackgroundImage)
    this.game.load.image('blueBackground', blueBackgroundImage)
  }

  create() {
    console.log('Assets loading complete...')
    this.game.state.start('main')
  }
  
}