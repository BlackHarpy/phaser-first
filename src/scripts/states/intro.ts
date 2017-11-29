'use strict'

import State from './state'
import Tile from '../elements/tile'

export default class IntroState extends State {
  background: Tile
  logo: Phaser.Image

  create(): void {
    const w = this.game.world.width
    const h = this.game.world.height
    this.background = new Tile(this.game, 0, 0, w, h, 'blueBackground')
    this.logo = this.game.add.image(0, 0 ,'logo')
    this.logo.anchor.x = 0.5
    this.logo.anchor.y = 0.5
    this.logo.x = this.game.world.centerX
    this.logo.y = this.game.world.centerY
  }

  update(): void {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      this.goToMain()
    }
  }

  goToMain(): void {
    this.state.start('main')
  }
}