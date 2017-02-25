"use strict";

var assert = require('chai').assert;
var Barmen = require('../src/barmen');
var Visitor = require('../src/visitor');
var Cupboard = require('../src/cupboard');

var CupboardStub = require('../tests/fakes/cupboard-stub');
var FakeVisitor = require('../tests/fakes/FakeVisitor');
var SmsServiceMock = require('../tests/fakes/sms-service-mock');
var FakeCashMachine = require('../tests/fakes/FakeCashMachine');

suite('When barmen pours drinks', function () {
	let visitor = {};
    let visitorWithBirthday = {};
    let barmen = {};
	let smsService = {};
	let cashMachineMock = {};

    setup(function () {
		visitor = new Visitor();
		visitor.sober();

		cashMachineMock = new FakeCashMachine();
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
			visitorWithBirthday = new FakeVisitor(Date.now());
			visitorWithBirthday.sober();

		    barmen = new Barmen(alwaysFullCupboard, smsService);

			var volumeInGlass = barmen.pour("whisky", 100, visitorWithBirthday, cashMachineMock);

			assert.equal(100 * 3, volumeInGlass);
		});

		test('visitor gets a check', function () {
			barmen = new Barmen(alwaysFullCupboard, smsService);

			barmen.pour("whisky", 100, visitorWithBirthday, cashMachineMock);

			assert.equal(cashMachineMock.checkPrinted, true);
		});
    });

    suite('cupboard is empty', function () {
        test('barmen rejects for a drink', function () {

        });

        test('sms to buy drink is sent to boss', function () {

        });
    });

	suite('cupboard is closed and the key is lost', function () {
		let alwaysClosedAndLostCupboard = {};

		setup(function () {
			alwaysClosedAndLostCupboard = new CupboardStub();
			alwaysClosedAndLostCupboard.empty = false;
			alwaysClosedAndLostCupboard.open = false;
			alwaysClosedAndLostCupboard.keyIsLost = true;
		});

		test('SMS "Cupboard is closed and the key is lost" is sent to boss', function () {
		    barmen = new Barmen(alwaysClosedAndLostCupboard, smsService);

			barmen.pour("whisky", 100, visitorWithBirthday, cashMachineMock);

			assert.equal(smsService.lastSentSms, 'Cupboard is closed and the key is lost');
		});
	});

});
