'use strict'

import State from './state'
import Paddle from '../elements/paddle';

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

  //Bricks config
  bricks: Phaser.Group
  numCols: number
  numRows: number

  //Ball config
  ball: Phaser.Sprite
  ballIsShot: boolean
  ballIniVelX: number
  ballIniVelY: number

  create(): void {

    //Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.checkCollision.down = false;

    this.numCols = 10
    this.numRows = 4

    this.paddle = new Paddle(this.game, 0, 0)

    //Bricks group
    const brickImages = [
      'greenBrick',
      'purpleBrick',
      'redBrick',
      'yellowBrick'
    ];
    this.bricks = this.game.add.group()
    this.bricks.enableBody = true;
    this.bricks.physicsBodyType = Phaser.Physics.ARCADE;

    let i, j
    for (i = 0; i < this.numRows; i++) {
      const img = brickImages[i];
      for (j = 0; j < this.numCols; j++) {
        const brick = this.bricks.create(0, 0, img);
        // place the brick accordingly
        brick.x = brick.width * j;
        brick.y = brick.height * i;
      }
    }

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