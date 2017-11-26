'use strict'

interface playerStats {
  lives: number,
  score: number
}

export default class Player {
  stats: playerStats

  constructor() {
    this.stats = {
      lives: 3,
      score: 0
    }
  }
}