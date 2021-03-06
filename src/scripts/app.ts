/// <reference path="../../node_modules/phaser-ce/typescript/phaser.d.ts"/>
/// <reference path="../../node_modules/phaser-ce/typescript/pixi.d.ts"/>
'use strict'

import 'pixi'
import 'p2'
import 'phaser'

import Preloader from './states/preloader'
import MainState from './states/main'
import IntroState from './states/intro'
import OverState from './states/over'

export default class App extends Phaser.Game {
    constructor(config: Phaser.IGameConfig) {
      super(config)
      this.state.add('preloader', Preloader)
      this.state.add('intro', IntroState)      
      this.state.add('main', MainState)
      this.state.add('over', OverState)
      this.state.start('preloader')
    }
  }

window.onload = () => {
    const config: Phaser.IGameConfig = {
        width:           960, 
        height:          600,
        renderer:        Phaser.AUTO,       //Reseach further about Phaser.WEBGL_MULTI multi-texture rendering
        parent:          'content',
        resolution:      1,
        forceSetTimeOut: false
      }
      new App(config)
}