'use strict'

import State from './state'
import Paddle from '../elements/paddle'
import Bricks from '../elements/bricks'

const paddleImage  = require('assets/img/paddle.png')
const greenBrickImage  = require('assets/img/brick_green.png')
const purpleBrickImage  = require('assets/img/brick_purple.png')
const redBrickImage  = require('assets/img/brick_red.png')
const yellowBrickImage  = require('assets/img/brick_yellow.png')
const ballImage  = require('assets/img/ball.png')

//TODO: Divide elements into modules

export default class MainState extends State {

  //Paddle configs
  paddle: Paddle
  bricks: Bricks

  //Ball config
  ball: Phaser.Sprite
  ballIsShot: boolean
  ballIniVelX: number
  ballIniVelY: number

  create(): void {

    //Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.checkCollision.down = false;

    this.paddle = new Paddle(this.game, 0, 0)
    this.bricks = new Bricks(this.game)

     // create the ball
     this.ball = this.game.add.sprite(0,0, 'ball');
     // enable the physics system
     this.game.physics.arcade.enable(this.ball);
     this.ball.body.enable = true;
     // set bounce rate (1 means mirroring velocity)
     this.ball.body.bounce.set(1);
     // make it collide with the world bounds
     this.ball.body.collideWorldBounds = true;
     // add a custom member variable
     this.ballIsShot = false;
     this.ballIniVelX = 200;
     this.ballIniVelY = -300;

     this.paddle.resetPosition()
  }
}