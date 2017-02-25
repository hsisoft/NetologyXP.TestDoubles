"use strict";

var Visitor = require('../../src/visitor');

class FakeVisitor extends Visitor{
	constructor(dateOfBirth){
		super();
		super.birthdayDate = dateOfBirth;
	}

	hasBirthdayToday(){
		return super.hasBirthdayToday();
	}
}

module.exports = FakeVisitor;
