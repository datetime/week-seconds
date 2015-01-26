## [![npm][npmjs-img]][npmjs-url] [![mit license][license-img]][license-url] [![build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![deps status][daviddm-img]][daviddm-url]

> Get the number of seconds/milliseconds in a week.

## Install
```bash
npm install week-seconds
npm test
```


## API
> For more use-cases see the [tests](./test.js)

### [weekSeconds](./index.js#L47)
> Get the number of seconds/milliseconds in a week.

- `[bool]` **{Boolean}** when `true`, returns seconds, pass to [day-seconds][day-seconds]
- `return` **{Number}**

**Example:**

```js
var weekSeconds = require('week-seconds');

weekSeconds(false);
//=> 604800000

weekSeconds();
//=> 604800000

weekSeconds('str');
//=> 604800000

weekSeconds([1,2,3]);
//=> 604800000

weekSeconds(/regex/gm);
//=> 604800000

weekSeconds({});
//=> 604800000

weekSeconds(true);
//=> 604800
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014-2015 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/week-seconds
[npmjs-img]: https://img.shields.io/npm/v/week-seconds.svg?style=flat&label=week-seconds

[coveralls-url]: https://coveralls.io/r/datetime/week-seconds?branch=master
[coveralls-img]: https://img.shields.io/coveralls/datetime/week-seconds.svg?style=flat

[license-url]: https://github.com/datetime/week-seconds/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/datetime/week-seconds
[travis-img]: https://img.shields.io/travis/datetime/week-seconds.svg?style=flat

[daviddm-url]: https://david-dm.org/datetime/week-seconds
[daviddm-img]: https://img.shields.io/david/datetime/week-seconds.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/datetime/week-seconds/graphs/contributors

***

_Powered and automated by [kdf](https://github.com/tunnckoCore), January 26, 2015_

[day-seconds]: https://github.com/datetime/day-seconds