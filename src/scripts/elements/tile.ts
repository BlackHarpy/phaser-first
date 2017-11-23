'use strict'

export default class Tile extends Phaser.TileSprite {
  constructor(game: Phaser.Game, x: number, y: number, w: number, h: number, key: string) {
    super(game, x, y, w, h, key)
    game.add.existing(this)
   
  }
}