'use strict';

class Slot {
  // Slot represents a place for equipment on a character
  constructor(options) {
    const opts = options || {};
    this.name = opts.name || 'un-named slot';
    console.log ('new slot created called' + this.name);
  }

  equip(item) {
    // equips an item to a slot
    console.log (`${item.name} was equipped to ${this.name}`);
  }
  unequip(item) {
    // equips an item to a slot
    console.log (`${item.name} was unequipped from ${this.name}`);
  }
}

export default class Character {
  // base class for players and mosters to drrive from. sets basic attributes
  constructor(options) {
    // options is an object with the defult perameters

    const opts = options || {}; 
    this.name = opts.name || 'Hero';
    this.move = opts.move || 5;
    this.atk = opts.atk || 1;
    this.def = opts.def || 0;
    this.hp = opts.hp || 5; 
    this.symbol = opts.symbol || 'X';
    this.dead = false;
    this.inventory = {
      bag: opts.bag || [],
      head: new Slot({name: 'Head'}),
      body: new Slot({name: 'Body'}),
      legs: new Slot({name: 'Legs'}),
      feet: new Slot({name: 'Feet'}),
      main_hand: new Slot({name: 'Main Hand'}),
      off_hand: new Slot({name: 'Off Hand'})
    };

    console.log('New character created called' + this.name);
  }

  attacks(defender, weapon) {
    // character will attack another character called defender with a weapon 
    console.log(`${this.name} attacks ${defender.name} with a ${weapon.name}`)

    let to_hit = 10;
    to_hit = to_hit - this.atk;
    to_hit = to_hit - weapon.atk;

    const d20 = Math.floor(Math.random() * 20) + 1;
    console.log (`Attack roll was ${d20} to hit value is ${to_hit}`);

    if (d20 > to_hit) {
      console.log (`${this.name} hit ${defender.name} with ${weapon.name}`);
      defender.hit(weapon.dmg);
    } else {
      console.log (`${this.name} misses ${defender.name}`);
    }
  }

  hit(damage) {
    // determine that the damage to be applied to the character
    let final_damage = damage - this.def;
    if (final_damage < 0) {
      final_damage = 0;
    }
    console.log(`Hit for ${damage} damage, the defence was ${this.def} so the final damage is ${final_damage}`);
    this.apply_damage(final_damage);
  }

  apply_damage(damage_points)  {
    // determine how much life is remaining after an attack
    this.hp = this.hp - damage_points;
    console.log(`Hitpoints remaining are ${this.hp}`);
    if (this.hp <= 0) { 
      this.die();
    }
  }

  die() {
  }

  pickup(item)  {
    // pickup an item
    console.log(`${this.name} picks up ${item.name}`);
  }

  drop(item)  {
    // drop an item
    console.log(`${this.name} dropped ${item.name}`);
  }
}

