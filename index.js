/*!
 * week-seconds <https://github.com/tunnckoCore/week-seconds>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var daySeconds = require('day-seconds');

module.exports = function weekSeconds(ms) {
  return 7 * daySeconds(ms);
};
