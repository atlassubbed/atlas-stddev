const mean = require("atlas-mean");
const rms2 = require("atlas-mean-square");

module.exports = (arr, mu2) => {
  if (mu2 === void 0) // then compute
    mu2 = rms2(arr), arr = mean(arr);
  return Math.sqrt(mu2 - arr*arr)
}
