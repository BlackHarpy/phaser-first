/// <reference path="../../node_modules/phaser-ce/typescript/phaser.d.ts"/>
/// <reference path="../../node_modules/phaser-ce/typescript/pixi.d.ts"/>
'use strict'

import 'pixi'
import 'p2'
import 'phaser'

import Preloader from './states/preloader'
import MainState from './states/main'

export default class App extends Phaser.Game {
    constructor(config: Phaser.IGameConfig) {
      super(config)
      this.state.add('preloader', Preloader)
      this.state.add('main', MainState)
      this.state.start('preloader')
    }
  }

window.onload = () => {
    const config: Phaser.IGameConfig = {
        width:           640, 
        height:          400,
        renderer:        Phaser.AUTO,
        parent:          'content',
        resolution:      1,
        forceSetTimeOut: false
      }
      new App(config)
}