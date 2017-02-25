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
			this._smsService.send("Please, order a keg of " + drinkName);
			console.error("Sorry. Not enough " + drinkName);
        }

		if ((!this._cupboard.isOpen())&&(this._cupboard.isKeyLost())) {
			this._smsService.send('Cupboard is closed and the key is lost');
//			throw new Error('Sorry. cupboard is closed and the key is lost');
			console.error("Sorry. cupboard is closed and the key is lost");
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