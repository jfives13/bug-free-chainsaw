'use strict';

export default class Character {
  // base class for players and mosters to drrive from. sets basic attributes
  constructor(options) {
    // options is an object with the defult perameters

    const opts = options || {}; 
    this.name = opts.name || 'Hero';
    this.move = opts.move || 5;
    this.atk = opts.atk || 1;
    this.def = opts.def || 0;
    this.life = opts.life || 5; 
    this.symbol = opts.symbol || 'X';

    console.log('New Character Created Called; ' + this.name);
  }

  attacks(who, weapon) {
    // character will attack another character called who with an item with
    console.log(`${this.name} attacks ${who.name} with a ${weapon.name}`)

    let atk_val = 10;
    atk_val = atk_val + this.atk;
    atk_val = atk_val + weapon.atk;

    const d20 = Math.floor(Math.random() * 20) + 1;
    console.log (`attack roll was ${d20} to hit value is ${atk_val}`);

    if (d20 <= atk_val) {
      console.log (`${this.name} hit ${who.name} with ${weapon.name}`);
    } else {
      console.log (`${this.name} misses ${who.name}`);
    }
  }
}