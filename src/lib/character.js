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

  attacks(defender, weapon) {
    // character will attack another character called defender with a weapon 
    console.log(`${this.name} attacks ${defender.name} with a ${weapon.name}`)

    let to_hit = 10;
    to_hit = to_hit - this.atk;
    to_hit = to_hit - weapon.atk;

    const d20 = Math.floor(Math.random() * 20) + 1;
    console.log (`attack roll was ${d20} to hit value is ${to_hit}`);

    if (d20 > to_hit) {
      console.log (`${this.name} hit ${defender.name} with ${weapon.name}`);
      // who.hit(weapon)
    } else {
      console.log (`${this.name} misses ${defender.name}`);
    }
  }
}