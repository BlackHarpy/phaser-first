'use strict'

import State from './state'
import Paddle from '../elements/paddle'
import Bricks from '../elements/bricks'
import Ball from '../elements/ball'

const paddleImage  = require('assets/img/paddle.png')
const greenBrickImage  = require('assets/img/brick_green.png')
const purpleBrickImage  = require('assets/img/brick_purple.png')
const redBrickImage  = require('assets/img/brick_red.png')
const yellowBrickImage  = require('assets/img/brick_yellow.png')
const ballImage  = require('assets/img/ball.png')

export default class MainState extends State {

  paddle: Paddle
  bricks: Bricks
  ball: Ball

  create(): void {

    //Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.checkCollision.down = false;

    //Set Game Elements
    this.paddle = new Paddle(this.game, 0, 0)
    this.bricks = new Bricks(this.game)
    this.ball = new Ball(this.game, 0, 0)

    //Set paddle to center
    this.paddle.resetPosition()
  }
}