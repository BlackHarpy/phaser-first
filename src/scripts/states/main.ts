'use strict'

import State from './state'
import Paddle from '../elements/paddle'
import Bricks from '../elements/bricks'
import Ball from '../elements/ball'
import Tile from '../elements/tile'
import Text from '../elements/text'

export default class MainState extends State {

  paddle: Paddle
  bricks: Bricks
  ball: Ball
  background: Tile
  blackLine: Tile
  livesText: Text

  create(): void {

    //Physics system
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //Turns off collision with the bottom of the world
    this.game.physics.arcade.checkCollision.down = false

    //Set Game Elements
    const w = this.game.world.width
    let h = this.game.world.height
    this.background = new Tile(this.game, 0, 0, w, h, 'blueBackground')
    this.paddle = new Paddle(this.game, 0, 0)
    this.bricks = new Bricks(this.game)
    this.ball = new Ball(this.game, 0, 0)

    //Set paddle to center
    this.paddle.resetPosition()
    //Set ball to center
    this.ball.resetPosition(this.paddle.x, this.paddle.y, this.paddle.height)
    h = this.paddle.height
    this.blackLine = new Tile(this.game, 0, 0, w, h, 'blackBackground')
    this.blackLine.anchor.set(0, 1)
    //place at the bottom: 0, 0 is top left corner
    this.blackLine.y = this.game.world.height
    const textConfig = {
      font: "18px Arial",
      fill: "#ffffff",
      align: "right",
      anchor: {
        x: 0,
        y: 1
      }
    }
    this.livesText = new Text(this.game, 0, 0, 'Cowabunga', textConfig)

  }

  update(): void {
    //Define collisions
    //Set collision between the ball and the paddle
    this.game.physics.arcade.collide(this.ball, this.paddle);
    //Set collision between the ball and the bricks and calls 'removeBrick' function when a collision is detected
    this.game.physics.arcade.collide(this.ball, this.bricks, this.removeBrick);

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
  }
}