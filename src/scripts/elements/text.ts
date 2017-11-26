'use strict'

interface anchorConfig {
  x: number,
  y: number
}

interface textConfig {
  style: {
    fill: string,
    align: string,
    font: string,
  },  
  anchor: anchorConfig
}

export default class Text extends Phaser.Text {
  config: textConfig

  constructor(game: Phaser.Game, x: number, y: number, text: string, config: textConfig) {
    super(game, 0, 0, text, config.style)
    this.config = config
    game.add.existing(this)
    this.setAnchor(config.anchor)
    this.x = x
    this.y = y
  }

  setAnchor(anchor: anchorConfig): void {
    if (anchor.y) {
      this.anchor.set(anchor.x, anchor.y)    
    } else {
      this.anchor.set(anchor.x)
    }
  }
}