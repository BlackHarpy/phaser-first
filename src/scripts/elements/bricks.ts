'use strict'

interface bricksConfig {
  cols: number
  rows: number
}

export default class Paddle extends Phaser.Group {
  config: bricksConfig
  brickImages = [
    'greenBrick',
    'purpleBrick',
    'redBrick',
    'yellowBrick'
  ]

  constructor(game: Phaser.Game) {
    super(game)
    
    this.config = {
      cols: 10,
      rows: 5
    }
    game.add.existing(this)
    this.enableBody = true
    this.physicsBodyType = Phaser.Physics.ARCADE
    this.placeBricks()
  }

  placeBricks(): void {
    let i, j
    for (i = 0; i < this.config.rows; i++) {
      const img = this.brickImages[i];
      for (j = 0; j < this.config.cols; j++) {
        const brick = this.create(0, 0, img);
        brick.x = brick.width * j;
        brick.y = brick.height * i;
      }
    }
  }

  update(): void {
  }

}