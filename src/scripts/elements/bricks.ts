'use strict'

//For bricks positioning
interface bricksConfig {
  cols: number
  rows: number
}

export default class Bricks extends Phaser.Group {
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
      rows: 4
    }

    //Add group to game
    game.add.existing(this)
    //Enable physics
    this.enableBody = true
    this.physicsBodyType = Phaser.Physics.ARCADE
    this.placeBricks()
  }

  placeBricks(): void {
    //Create brick lines
    let i, j
    for (i = 0; i < this.config.rows; i++) {
      //Each line is a different color
      let img = this.brickImages[i];
      for (j = 0; j < this.config.cols; j++) {
        let brick = this.create(0, 0, img)
        //Set brick position next to another
        brick.x = brick.width * j
        brick.y = brick.height * i
        //Prevents brick from moving when it gets a collision
        brick.body.immovable = true
      }
    }
  }
}