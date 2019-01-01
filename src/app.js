'use strict';

import Equipment from './lib/equipment'
import Monster from './lib/monster'
import Player from './lib/player';


let player = new Player ({
	name: 'Jonah', 
	move: 5,
	atk: 1,
	def: 0,
	life: 5,
	symbol: 'j'
});

let sword = new Equipment({
	name: 'Sword', 
	atk: 1,
	dmg: 3,
	symbol: 'S'
});


//jonah.attacks (goblin, sword)

let goblin = new Monster ({
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
	sword
};