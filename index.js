/**
 * week-seconds <https://github.com/datetime/week-seconds>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var daySeconds = require('day-seconds');

/**
 * Get the number of hours in a week.
 *
 * **Example:**
 *
 * ```js
 * var weekSeconds = require('week-seconds');
 *
 * weekSeconds(false);
 * //=> 604800000
 *
 * weekSeconds();
 * //=> 604800000
 *
 * weekSeconds('str');
 * //=> 604800000
 *
 * weekSeconds([1,2,3]);
 * //=> 604800000
 *
 * weekSeconds(/regex/gm);
 * //=> 604800000
 *
 * weekSeconds({});
 * //=> 604800000
 *
 * weekSeconds(true);
 * //=> 604800
 * ```
 *
 * @name weekSeconds
 * @param  {Boolean} `[bool]` when `true`, returns seconds, pass to [day-seconds][day-seconds]
 * @return {Number}
 * @api public
 */
module.exports = function weekSeconds(bool) {
  return 7 * daySeconds(bool);
};
