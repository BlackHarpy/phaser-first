'use strict'

interface textConfig {
  fill: string,
  align: string,
  font: string,
  anchor: any
}

export default class Text extends Phaser.Text {
  config: textConfig

  //TODO - refine constructor parameters (no any shit, but I'm tired and sleepy)
  constructor(game: Phaser.Game, x: number, y: number, text: string, config: textConfig) {
    super(game, x, y, text)
    this.config = config
    game.add.existing(this)
    this.setConfig()
    this.y = game.world.height
  }

  setConfig(): void {
    this.anchor.set(this.config.anchor.x, this.config.anchor.y)
    this.font = this.config.font    
    this.align = this.config.align
    this.fill = this.config.fill
  }
}