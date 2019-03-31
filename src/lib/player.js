'use strict';

import Character from './character';

export default class Player extends Character {
  constructor(options) {
    const opts = options || {};
    super(opts);


    console.log(this.name);
  }
  die()  {
    super.die();
    console.log('You died. x_x')
  }
}