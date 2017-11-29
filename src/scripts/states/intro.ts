'use strict'

import State from './state'
import Tile from '../elements/tile'

export default class IntroState extends State {
  background: Tile
  logo: Phaser.Image
  startButton: Phaser.Button

  create(): void {
    this.setBackground()
    this.setLogo()
    this.setStartButton()   
  }

  update(): void {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.goToMain()
    }
  }

  setBackground(): void {
    const w = this.game.world.width
    const h = this.game.world.height
    this.background = new Tile(this.game, 0, 0, w, h, 'blueBackground')
  }

  setLogo(): void {
    this.logo = this.game.add.image(0, 0 ,'logo')
    this.logo.anchor.x = 0.5
    this.logo.x = this.game.world.centerX
    this.logo.y = 50
  }

  setStartButton(): void {
    this.startButton = this.game.add.button(0, 0, 'startButton', this.goToMain, this, 1, 0, 2)
    this.startButton.anchor.x = 0.5
    this.startButton.x = this.game.world.centerX
    this.startButton.y = this.game.world.centerY
  }

  goToMain(): void {
    this.state.start('main')
  }
}