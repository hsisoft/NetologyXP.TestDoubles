"use strict";

class CashMachine {
	printCheck(){
		this._checkPrinted = true;
		console.log('!! Real CashMachine call !!');
	}

	newOrder(){
		this._checkPrinted = false;
		console.log('!! Real CashMachine call !!');
	}

	get checkPrinted(){
		console.log('!! Real CashMachine call !!');
		return this._checkPrinted;
	}
}

module.exports = CashMachine;