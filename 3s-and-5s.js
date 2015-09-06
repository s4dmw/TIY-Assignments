 var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

test('getting a list of multiples of 3', function(){
  assert.isDefined(threes);
  assert.isFunction(threes);
  expect(threes(0)).to.eql([]);
  expect(threes(3)).to.eql([3]);
  expect(threes(6)).to.eql([ 3, 6 ]);
  expect(threes(10)).to.eql([3, 6, 9]);
  expect(threes(20)).to.eql([3, 6, 9, 12, 15, 18]);
  expect(threes(50)).to.eql([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39,
   42, 45, 48]);
}); // END test 3s


function threes(N) {//return a list of muliples of 3 below N.
  var multiplesOfThree = []
  for (count = 1; count <= N; count ++) {
    if (count % 3 === 0){
      multiplesOfThree.push(count);
    }
  }
  return multiplesOfThree;
}
