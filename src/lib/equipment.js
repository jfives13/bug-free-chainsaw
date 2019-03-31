'use strict';


export default class Equipment {
  // base class for players and mosters to drrive from. sets basic attributes
  constructor(options) {
    // options is an object with the defult perameters


    const opts = options || {}; 
    this.name = opts.name || 'item';
    this.move = opts.move || 0;
    this.atk = opts.atk || 0 ;
    this.dmg = opts.dmg || 0;
    this.def = opts.def || 0;
    this.life = opts.hp || 0; 
    this.symbol = opts.symbol || 'I';

    console.log('New Equipment Created Called Item; ' + this.name);
  } 
}

