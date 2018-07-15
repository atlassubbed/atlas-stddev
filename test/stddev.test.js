const { describe, it } = require("mocha")
const { expect } = require("chai")
const rewire = require("rewire");
const stddev = rewire("../src/stddev")

let revert;

describe("stddev", function(){

  beforeEach(function(){
    revert && revert();
  })

  const data = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
  const mu = data.reduce((p,c) => p+c,0)/data.length
  const rms2 = data.reduce((p,c) => p+c*c,0)/data.length
  const std = Math.sqrt(rms2 - mu*mu)

  it("should return the standard deviation of the dataset", function(){
    expect(stddev(data)).to.equal(std);
  })
  it("should use the provided mean and mean square to circumvent computation", function(){
    let calledMean = false, calledRms2 = false;
    revert = stddev.__set__({
      mean: () => calledMean = true,
      rms2: () => calledRms2 = true
    })
    expect(stddev(mu, rms2)).to.equal(std);
    expect(calledRms2).to.be.false
    expect(calledMean).to.be.false
  })
})
