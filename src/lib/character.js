'use strict';


class Character {
	//base class for players and mosters to drrive from. sets basic attributes
	constructor (options){
		//options is an object with the defult perameters


		let opts = options || {}; 
		this.name = opts.name || 'Hero';
		this.move = opts.move || 5 ;
		this.atk = opts.atk || 1 ;
		this.def = opts.atk || 0 ;
		this.life = opts.life || 5 ; 
		this.symbol = opts.hero || 'H' ;

		console.log('New Character Created Called; ' + this.name);
	}
	attacks (who,with) {
		//character will attack another character called who with an item with
		console.log(`${this.name} attacks ${who.name} with a ${with.name}`)
	}
}


/**

let jonah = new Character ({
	name: 'jonah', 
	move: 5,
	atk: 1,
	def: 0,
	life: 5,
	symbol: 'j'
});

jonah.attacks (goblin, sword)

**/