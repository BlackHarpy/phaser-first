'use strict'

import State from './state'

const paddleImage  = require('assets/images/paddle.png')
const greenBrickImage  = require('assets/images/brick_green.png')
const purpleBrickImage  = require('assets/images/brick_purple.png')
const redBrickImage  = require('assets/images/brick_red.png')
const yellowBrickImage  = require('assets/images/brick_yellow.png')
const ballImage  = require('assets/images/ball.png')
const blueBackgroundImage  = require('assets/images/bg_blue.png')
const blackBackgroundImage  = require('assets/images/bg_black.png')

const hitBrickSFX = require('assets/sound/fx_hit_brick.wav')
const hitPaddleSFX = require('assets/sound/fx_hit_paddle.wav')
const bgMusic = require('assets/sound/bgm_electric_air.ogg')

export default class PreloaderState extends State {
  preload() {
    this.loadImages()
    this.loadAudio()
  }

  loadImages() {
    this.game.load.image('paddle', paddleImage)
    this.game.load.image('greenBrick', greenBrickImage)
    this.game.load.image('purpleBrick', purpleBrickImage)
    this.game.load.image('redBrick', redBrickImage)
    this.game.load.image('yellowBrick', yellowBrickImage)
    this.game.load.image('ball', ballImage)
    this.game.load.image('blackBackground', blackBackgroundImage)
    this.game.load.image('blueBackground', blueBackgroundImage)
  }

  loadAudio() {
    this.game.load.audio('hitBrick', hitBrickSFX)    
    this.game.load.audio('hitPaddle', hitPaddleSFX)    
    this.game.load.audio('backgroundMusic', bgMusic)    
  }

  create() {
    console.log('Assets loading complete...')
    this.game.state.start('main')
  }
  
}