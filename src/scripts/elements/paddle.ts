'use strict'

interface paddleConfig {
  velX: number                  //Paddle velocity for keyboard input
  prevX: number                 //Stores the mouse's previous position
  paddleHalf: number            //Stores paddle's half for future usage
}

export default class Paddle extends Phaser.Sprite {
  config: paddleConfig

  constructor(game: Phaser.Game, x: number, y: number) {
    super(game, x, y, 'paddle')
    
    //Add Paddle to game
    game.add.existing(this)
    this.config = {
      velX:  500 / 1000,          //500px / sec
      prevX: game.input.x,
      paddleHalf: this.width / 2
    }

    //Enable Paddle physics
    game.physics.arcade.enable(this);
    this.body.enable = true;
    this.body.immovable = true;     //Won't recieve any impact from other bodies
  }

  move(): void {
    //Get input from left and right keys
    const isLeftDown: boolean = this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)
    const isRightDown: boolean = this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)

    //Check for mouse position
    if (this.config.prevX != this.game.input.x) {
      this.x = this.game.input.x
      //Else it checks for keyboard input
    } else if (isRightDown && !isLeftDown) {
      this.x += this.config.velX * this.game.time.physicsElapsedMS
    } else if (isLeftDown && !isRightDown) {
      this.x -= this.config.velX * this.game.time.physicsElapsedMS
    } 

    //Save current mouse position to check if it has changed on next update cycle
    this.config.prevX = this.game.input.x
    
    //Set the paddle to stick to world bounds
    if (this.x - this.config.paddleHalf < 0)
      this.x = 0 + this.config.paddleHalf
    if (this.x + this.config.paddleHalf > this.game.world.width)
      this.x = this.game.world.width - this.config.paddleHalf
  }

  resetPosition(): void {
    //Set middle point of paddle
    this.anchor.setTo(0.5, 1)
    this.x = this.game.world.centerX
    this.y = this.game.world.height - this.height
  }

}