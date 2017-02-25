"use strict";

var assert = require('chai').assert;
var Barmen = require('../src/barmen');
var Visitor = require('../src/visitor');
var Cupboard = require('../src/cupboard');

var FakeVisitor = require('../tests/FakeVisitor');

suite('When barmen pours drinks', function () {
    let visitorWithBirthday = {};
    let barmen = {};

    setup(function () {
		visitorWithBirthday = new FakeVisitor();
		visitorWithBirthday.sober();
    });

    suite('cupboard is full', function () {
        test('barmen pours 200 milliliters of whisky in my glass', function () {

        });

        test('barmen pours x2 volume on a Thursday', function () {

        });

    });

    suite('cupboard is empty', function () {
        test('barmen rejects for a drink', function () {

        });

        test('sms to buy drink is sent to boss', function () {

        });
    });

});
