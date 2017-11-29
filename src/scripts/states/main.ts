'use strict'

import State from './state'
import Player from '../elements/player'
import Paddle from '../elements/paddle'
import Bricks from '../elements/bricks'
import Ball from '../elements/ball'
import Tile from '../elements/tile'
import Text from '../elements/text'

export default class MainState extends State {

  player: Player

  //Sprites Elements
  paddle: Paddle
  bricks: Bricks
  ball: Ball
  background: Tile
  blackLine: Tile

  //Texts
  livesText: Text
  scoreText: Text
  
  //Audio elements
  sfxHitBrick: Phaser.Sound
  sfxHitPaddle: Phaser.Sound
  bgmMusic: Phaser.Sound

  create(): void {
    this.player = new Player()
    this.setPhysicsSystem()   
    this.createGameElements()

    //Set paddle to center
    this.paddle.resetPosition()
    //Set ball to center
    this.ball.resetPosition(this.paddle.x, this.paddle.y, this.paddle.height)

    this.setTexts()
    this.setSounds()
  }

  setPhysicsSystem(): void {
    //Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Turns off collision with the bottom of the world
    this.game.physics.arcade.checkCollision.down = false
  }

  createGameElements(): void {
    //Get World size
    const w = this.game.world.width
    const h = this.game.world.height

    //0, 0 is top left corner
    this.background = new Tile(this.game, 0, 0, w, h, 'blueBackground')
    this.paddle = new Paddle(this.game, 0, 0)
    this.bricks = new Bricks(this.game)
    this.ball = new Ball(this.game, 0, 0)

    //Check if ball falls out
    this.ball.checkWorldBounds = true;
    this.ball.events.onOutOfBounds.add(this.loseLife, this);

    const pHeight = this.paddle.height

    this.blackLine = new Tile(this.game, 0, 0, w, pHeight, 'blackBackground')
    this.blackLine.anchor.set(0, 1)
    this.blackLine.y = h
  }

  setTexts(): void {
    //bring Text config interface here
    const textConfig = {
      style: {
        font: "18px Arial",
        fill: "#ffffff",
        align: "right"
      },
      anchor: {
        x: 0,
        y: 1
      }
    }
    this.livesText = new Text(this.game, 0, this.game.world.height, `Lives: ${this.player.stats.lives}`, textConfig)
    textConfig.style.align = 'right'
    textConfig.anchor = {
      x: 1,
      y : undefined
    }
    this.scoreText = new Text(this.game, this.game.world.width, this.game.world.height, `${this.player.stats.score} points`, textConfig)
  }

  setSounds(): void {
    this.sfxHitBrick = this.game.add.audio('hitBrick')
    this.sfxHitPaddle = this.game.add.audio('hitPaddle')
  }

  update(): void {
    //Define collisions
    //Set collision between the ball and the paddle
    this.game.physics.arcade.collide(this.ball, this.paddle, this.hitPaddle, null, this);
    //Set collision between the ball and the bricks and calls 'removeBrick' function when a collision is detected
    this.game.physics.arcade.collide(this.ball, this.bricks, this.removeBrick, null, this);

    this.paddle.move()
    this.ball.move(this.paddle.x)
  }

  //for debug purposes
  // render(): void {
  //     this.game.debug.bodyInfo(this.ball, 16, 24)
  // }

  removeBrick(ball: Ball, brick: Phaser.Sprite): void {
    //Removes collisioned brick
    brick.kill()
    this.player.stats.score += 10
    this.scoreText.text = `${this.player.stats.score} points`
    this.sfxHitBrick.play()
  }

  hitPaddle(): void {
    //Plays sound when the ball hits the paddle
    this.sfxHitPaddle.play()
  }

  loseLife(): void {
    this.player.stats.lives--
    //Set paddle to center
    this.paddle.resetPosition()
    //Set ball to center
    this.ball.resetPosition(this.paddle.x, this.paddle.y, this.paddle.height)
    this.livesText.text = `Lives: ${this.player.stats.lives}`
  }
}