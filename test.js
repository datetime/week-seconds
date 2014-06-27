/*!
 * week-seconds <https://github.com/tunnckoCore/week-seconds>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var weekSeconds = require('./');

it('should get the number of seconds in a week', function () {
  assert.strictEqual(weekSeconds(), 604800);
});
it('should get the number of milliseconds in a week', function () {
  assert.strictEqual(weekSeconds(true), 604800000);
});
it('should response be typeof number', function () {
  assert(typeof weekSeconds() === 'number');
})
