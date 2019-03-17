'use strict';

import Equipment from './lib/equipment'
import Monster from './lib/monster'
import Player from './lib/player';


const player = new Player ({
  name: 'Jonah', 
  move: 5,
  atk: 1,
  def: 0,
  life: 5,
  symbol: 'j'
});

const sword = new Equipment({
  name: 'Sword', 
  atk: 2,
  dmg: 3,
  symbol: 'S'
});

const axe = new Equipment({
  name: 'Axe', 
  atk: 1,
  dmg: 4,
  symbol: 'A'
});

const spear = new Equipment({
  name:'Spear',
  atk: 4,
  dmg: 1,
  symbol: 'Sp'
});

const unlucky_crusher = new Equipment({
  name:'Unlucky Crusher',
  atk: -9,
  dmg: 9,
  symbol: 'Uc'
});


// jonah.attacks (goblin, sword)
const goblin = new Monster ({
  name: 'Goblin', 
  move: 5,
  atk: 1,
  def: 0,
  life: 2,
  symbol: 'g'
});

global.characters = {
  goblin,
  player
};


global.equipment = {
  sword,
  axe,
  spear,
  unlucky_crusher
};

