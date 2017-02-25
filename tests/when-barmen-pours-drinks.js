"use strict";

var assert = require('chai').assert;
var Barmen = require('../src/barmen');
var Visitor = require('../src/visitor');
var Cupboard = require('../src/cupboard');

var CupboardStub = require('../tests/fakes/cupboard-stub');
var FakeVisitor = require('../tests/fakes/FakeVisitor');

suite('When barmen pours drinks', function () {
    let visitorWithBirthday = {};
    let barmen = {};
	let smsService = {};

    setup(function () {
		visitorWithBirthday = new FakeVisitor();
		visitorWithBirthday.sober();

		smsService = new SmsServiceMock();
    });

    suite('cupboard is full', function () {
		let alwaysFullCupboard = {};

		setup(function () {
			alwaysFullCupboard = new CupboardStub();
			alwaysFullCupboard.empty = false;
		});

        test('barmen pours 200 milliliters of whisky in my glass', function () {

        });

        test('barmen pours x2 volume on a Thursday', function () {

        });

		test('barmen pours x3 volume on a visitors birthday', function () {
			barmen = new Barmen(alwaysFullCupboard, smsService);

			var volumeInGlass = barmen.pour("whisky", 100, visitor, new Calendar());

			assert.equal(100 * 2, volumeInGlass);
			calendarStub.restore();
		});

    });

    suite('cupboard is empty', function () {
        test('barmen rejects for a drink', function () {

        });

        test('sms to buy drink is sent to boss', function () {

        });
    });

});
