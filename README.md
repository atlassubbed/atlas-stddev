# atlas-stddev

Calculates the standard deviation of a set of data points.

[![Travis](https://img.shields.io/travis/atlassubbed/atlas-stddev.svg)](https://travis-ci.org/atlassubbed/atlas-stddev)

---

## install

```
npm install --save atlas-stddev
```

## why

Breaking up [atlas-dataset](https://github.com/atlassubbed/atlas-dataset#readme) into standalone functions. This module calculates the standard deviation of an array of numbers:

<p align="center">
  <img alt="sigma(V) = sqrt(<V^2> - <V>^2)" src="docs/stddev.png">
</p>

## examples

#### from an array of numbers

```javascript
const stddev = require("atlas-stddev")
console.log(stddev([-2,-1,0,1,2]))
// 1.4142135623730951
```

#### from pre-computed mean and mean square

```javascript
...
const mean = 0;
const rmsSquared = 2;
console.log(stddev(mean, rmsSquared)) // fast
// 1.4142135623730951
```

## caveats

The caller is expected to sanitize input. Any invalid input will not work; the only valid signatures are:

```javascript
stddev(<Number>, <Number>)
stddev(<Array<Number>>)
```