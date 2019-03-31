'use strict';

import Character from './character';

export default class Monster extends Character {
  constructor(options) {
    const opts = options || {};
    super(opts);

    
    console.log ('a Monster is created');
  }
  die() {
    super.die();
    console.log (`You killed ${this.name}.`)
  }
}
