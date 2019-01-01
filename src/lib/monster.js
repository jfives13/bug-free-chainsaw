'use strict';

import Character from './character';

export default class Monster extends Character {
	constructor (options){
		let opts = options || {};
		console.log (opts)
		super(opts);

		
		console.log ('a Monster is created');
	}
}