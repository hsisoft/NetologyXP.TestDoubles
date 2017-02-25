"use strict";

var CashMachine = require('../../src/cashMachine');

class FakeCashMachine extends CashMachine{
	constructor(){
		super();
	}

	printCheck(){
		this._checkPrinted = true;
	}

	newOrder(){
		this._checkPrinted = false;
	}

	get checkPrinted(){
		return this._checkPrinted;
	}
}

module.exports = FakeCashMachine;
