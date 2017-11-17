'use strict'

import State from './state'

const paddleImage  = require('assets/img/paddle.png')

export default class MainState extends State {

  paddle: Phaser.Sprite
  paddleVelX: number
  prevX: number
  paddleHalf: number

  preload(): void {
    this.game.load.image('imgPaddle', paddleImage)
  }

  create(): void {
    this.paddleVelX = 500 / 1000
    this.prevX = this.game.input.x
    this.paddle = this.game.add.sprite(0, 0, 'imgPaddle')
    this.paddleHalf = this.paddle.width / 2
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