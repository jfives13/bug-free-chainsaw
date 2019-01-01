'use strict';

import Character from './character';

export default class Player extends Character {
	constructor (options){
		let opts = options || {};
		super(opts);


		console.log(this.name);
	}
}