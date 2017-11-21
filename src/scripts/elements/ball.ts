'use strict'

interface ballConfig {
  isShot: boolean
  iniVelX: number
  iniVelY: number
}

export default class Paddle extends Phaser.Sprite {
  config: ballConfig

  constructor(game: Phaser.Game, x: number, y: number) {
    super(game, x, y, 'ball')

    //Add sprite to the game
    game.add.existing(this)    

    this.game.physics.arcade.enable(this)
    this.body.enable = true
    // Bounce rate 1 means mirroring velocity
    this.body.bounce.set(1)

    //Set collision with the world bounds
    this.body.collideWorldBounds = true;

    //Set ball configurations
    this.config = {
      isShot: false,
      iniVelX: 200,
      iniVelY: -300
    }
   
  }

  update(): void {
 
  }

  move(x: number): void {
    if (!this.config.isShot) {
      this.x = x
    }
  }

  //Paddle stats
  resetPosition(x: number, y: number, height: number): void {
    this.anchor.set(0.5, 1)
    this.x = x
    this.y = y - height
    this.config.isShot = false
    this.body.velocity.set(0)
  }

}