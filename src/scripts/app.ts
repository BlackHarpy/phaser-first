/// <reference path="../../node_modules/phaser-ce/typescript/phaser.d.ts"/>
/// <reference path="../../node_modules/phaser-ce/typescript/pixi.d.ts"/>

import 'pixi'
import 'p2'
import 'phaser'

class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create })
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'assets/phaser.png')
    }

    create() {
        const logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo')

        const textAlign = {
            font: "15px Arial", 
            fill: "#19de65" ,
            align:  'left',
            boundsAlignH: 'center',
            boundsAlignV: 'bottom'
        }
        const text = this.game.add.text(0, 0, 'Hello World!', textAlign)
        
        text.setTextBounds(16, 16, 768, 568)
        logo.anchor.setTo(0.5, 0.5)
    }

}

window.onload = () => {
    const game = new SimpleGame()
};