'use strict'

import State from './state'

const paddleImage  = require('assets/img/paddle.png')
const greenBrickImage  = require('assets/img/brick_green.png')
const purpleBrickImage  = require('assets/img/brick_purple.png')
const redBrickImage  = require('assets/img/brick_red.png')
const yellowBrickImage  = require('assets/img/brick_yellow.png')
const ballImage  = require('assets/img/ball.png')

//TODO: Divide elements into modules

export default class MainState extends State {

  //Paddle configs
  paddle: Phaser.Sprite
  paddleVelX: number
  prevX: number
  paddleHalf: number

  //Bricks config
  bricks: Phaser.Group
  numCols: number
  numRows: number

  //Ball config
  ball: Phaser.Sprite
  ballIsShot: boolean
  ballIniVelX: number
  ballIniVelY: number


  preload(): void {
    this.game.load.image('paddle', paddleImage)
    this.game.load.image('greenBrick', greenBrickImage)
    this.game.load.image('purpleBrick', purpleBrickImage)
    this.game.load.image('redBrick', redBrickImage)
    this.game.load.image('yellowBrick', yellowBrickImage)
    this.game.load.image('ball', ballImage)
  }

  create(): void {

    //Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.physics.arcade.checkCollision.down = false;

    this.numCols = 10
    this.numRows = 4

    this.paddleVelX = 500 / 1000
    this.prevX = this.game.input.x
    this.paddle = this.game.add.sprite(0, 0, 'paddle')

    //Paddle physics
    this.game.physics.arcade.enable(this.paddle);
    this.paddle.body.enable = true;
    this.paddle.body.immovable = true;

    this.paddleHalf = this.paddle.width / 2

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

    this.resetPaddle()
  }

  update(): void {
    const isLeftDown: boolean = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)
    const isRightDown: boolean = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)

    if (this.prevX != this.game.input.x) {
      this.paddle.x = this.game.input.x
    } else if (isRightDown && !isLeftDown) {
      this.paddle.x += this.paddleVelX * this.game.time.physicsElapsedMS
    } else if (isLeftDown && !isRightDown) {
      this.paddle.x -= this.paddleVelX * this.game.time.physicsElapsedMS
    } 

    this.prevX = this.game.input.x
    
    if (this.paddle.x - this.paddleHalf < 0)
      this.paddle.x = 0 + this.paddleHalf
    if (this.paddle.x + this.paddleHalf > this.game.world.width)
      this.paddle.x = this.game.world.width - this.paddleHalf
  }

  resetPaddle(): void {
    this.paddle.anchor.setTo(0.5, 1)
    this.paddle.x = this.game.world.centerX
    this.paddle.y = this.game.world.height - this.paddle.height
  }
}