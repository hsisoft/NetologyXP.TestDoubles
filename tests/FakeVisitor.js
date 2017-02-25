"use strict";

var Visitor = require('../src/visitor');

class FakeVisitor extends Visitor{
	constructor(dateOfBirth){
		super();
		super.birthdayDate = dateOfBirth;
	}
}

module.exports = FakeVisitor;
