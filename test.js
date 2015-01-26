/**
 * week-seconds <https://github.com/datetime/week-seconds>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var weekSeconds = require('./index');

describe('week-seconds:', function() {
  it('should get the number of milliseconds in a week, when no arguments', function(done) {
    assert.strictEqual(weekSeconds(), 604800000);
    done();
  });

  it('should get the number of seconds in a week, when true', function(done) {
    assert.strictEqual(weekSeconds(true), 604800);
    done();
  });

  it('should get the number of milliseconds in a week, when otherwise', function(done) {
    assert.strictEqual(weekSeconds(), 604800000);
    assert.strictEqual(weekSeconds(false), 604800000);
    assert.strictEqual(weekSeconds(null), 604800000);
    assert.strictEqual(weekSeconds([1,2,3]), 604800000);
    assert.strictEqual(weekSeconds({obj:true}), 604800000);
    assert.strictEqual(weekSeconds('str'), 604800000);
    done();
  });

  it('should response be typeof number', function(done) {
    assert(typeof weekSeconds() === 'number');
    done();
  })
});
