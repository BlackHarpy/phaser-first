'use strict'

import State from './state'
import Tile from '../elements/tile'
import Player from '../elements/player'

export default class OverState extends State {
  gameOverText: Phaser.Text
  scoreText: Phaser.Text
  background: Tile
  backButton: Phaser.Button
  player: Player

  init(player: Player): void {
    this.player = player
  }

  create(): void {
    this.setBackground()  
    this.setBackButton()
    this.setTexts()
  }

  update(): void {
    if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.goToMain()
    }
  }

  setBackground(): void {
    const w = this.game.world.width
    const h = this.game.world.height
    this.background = new Tile(this.game, 0, 0, w, h, 'blueBackground')
  }

  setBackButton(): void {
    this.backButton = this.game.add.button(0, 0, 'backButton', this.goToMain, this, 1, 0, 2)
    this.backButton.anchor.set(0.5, 1)
    this.backButton.x = this.game.world.centerX
    this.backButton.y = this.game.world.height - 30
  }

  setTexts(): void {
    const textStyle: Phaser.PhaserTextStyle = {
      font: "40px Arial",
      fill: "#ffffff",
      align: "center"
    }

    this.gameOverText = this.game.add.text(0, 0, 'GAME OVER', textStyle)
    this.gameOverText.anchor.x = 0.5
    this.gameOverText.x = this.world.centerX
    this.gameOverText.y = 60

    if (this.player.stats.lives > 0) {
      this.gameOverText.fill = "#e0d700"
      this.gameOverText.text = 'CONGRATULATIONS'
    }

    textStyle.font = "28px Arial"

    this.scoreText = this.game.add.text(0, 0, `${this.player.stats.score} points`, textStyle)
    this.scoreText.anchor.x = 0.5
    this.scoreText.x = this.world.centerX
    this.scoreText.y =  this.world.centerY - 60
  }

  goToMain(): void {
    this.game.state.start('intro')
  }

}