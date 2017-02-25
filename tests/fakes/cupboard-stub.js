"use strict";

class CupboardStub {
	constructor() {
		this._isEmpty = false;
		this._isOpen = true;
		this._isKeyLost = false;
	}

	isOpen() {
		return this._isOpen;
	};

	isKeyLost() {
		return this._isKeyLost;
	};

	hasDrink(drinkName, volume) {
		return !this._isEmpty;
	};

	getDrink(drinkName, volume) {
		return volume;
	}

	set empty(value) {
		this._isEmpty = value;
	}

	set open(value) {
		this._isOpen = value;
	}

	set keyIsLost(value) {
		this._isKeyLost = value;
	}
}

module.exports = CupboardStub;