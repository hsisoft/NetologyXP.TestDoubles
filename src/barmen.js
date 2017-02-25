'use strict';

class Barmen {
	constructor(cupboard, smsService) {
		this._cupboard = cupboard;
		this._smsService = smsService;
	}

    pour(drinkName, volume, visitor, cashMachine) {
		cashMachine.newOrder();

		if (volume < 0) {
			throw new Error('Invalid volume of ' + drinkName);
		}

	    if (!this._cupboard.hasDrink(drinkName, volume)) {
			this._smsService.send("Hello. We have run out of " + drinkName + ". Please buy several bottles.");
            throw new Error('Sorry. Not enough ' + drinkName);
        }

        if (visitor.hasBirthdayToday()){
			cashMachine.printCheck();
			return 3 *
                this._cupboard.getDrink(drinkName, volume);
        }

		cashMachine.printCheck();
        return this._cupboard.getDrink(drinkName, volume);
    }
}

module.exports = Barmen;