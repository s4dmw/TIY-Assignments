 var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

test('getting a list of multiples of 3', function(){
  assert.isDefined(threes);
  assert.isFunction(threes);
  expect(threes(0)).to.eql([]);
  expect(threes(3)).to.eql([]);
  expect(threes(6)).to.eql([3]);
  expect(threes(10)).to.eql([3, 6, 9]);
  expect(threes(20)).to.eql([3, 6, 9, 12, 15, 18]);
  expect(threes(50)).to.eql([3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39,
   42, 45, 48]);
}); // END test 3s


function threes(N) {//return a list of muliples of 3 below N.
  var multiplesOfThree = []
  for (count = 1; count < N; count ++) {
    if (count % 3 === 0){
      multiplesOfThree.push(count);
    }
  }
  return multiplesOfThree;
}


test('getting a list of multiples of 5', function(){
  assert.isDefined(fives);
  assert.isFunction(fives);
  expect(fives(0)).to.eql([]);
  expect(fives(10)).to.eql([5]);
  expect(fives(20)).to.eql([5, 10, 15]);
  expect(fives(30)).to.eql([5, 10, 15, 20, 25]);
  expect(fives(50)).to.eql([5, 10, 15, 20, 25, 30, 35, 40, 45]);
}); // END test 5s


function fives(N) {//return a list of muliples of 5 below N.
  var multiplesOfFive = []
  for (count = 1; count < N; count ++) {
    if (count % 5 === 0){
      multiplesOfFive.push(count);
    }
  }
  return multiplesOfFive;
}

/* now we want to make a function that returns a list of numbers that multiples of 3's
and/or 5's below N.
*/

test('merging the threes and fives', function(){
  assert.isDefined(threesAndFives);
  assert.isFunction(threesAndFives);
  expect(threesAndFives(0)).to.eql([]);
  expect(threesAndFives(5)).to.eql([3]);
  expect(threesAndFives(10)).to.eql([3, 5, 6, 9]);
  expect(threesAndFives(20)).to.eql([3, 5, 6, 9, 10, 12, 15, 18]);
  expect(threesAndFives(30)).to.eql([3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27]);
  expect(threesAndFives(50)).to.eql([3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27,
    30, 33, 35, 36, 39, 40, 42, 45, 48]);
 }); // END test threesAndFives

function threesAndFives(N) {
  var multiplesOfThreeAndFive = [];
  for (count = 1; count < N; count ++) {
    if (count % 3 === 0 || count % 5 === 0) {
      multiplesOfThreeAndFive.push(count);
    }
  }
  return multiplesOfThreeAndFive;
}


test('summing up the numbers in the arrays', function(){
  assert.isDefined(threesAndFives);
  assert.isFunction(threesAndFives);
  expect(sum(0)).to.eql(0);
  expect(sum(5)).to.eql(3);
  expect(sum(10)).to.eql(23);
  expect(sum(20)).to.eql(78);
  expect(sum(50)).to.eql(543);
  expect(sum(100)).to.eql(2318);
  expect(sum(1000)).to.eql(233168);
}); // END test sum

function sum(N) {
  var multiplesOfThreeAndFive = [];
  for (count = 1; count < N; count ++) {
    if (count % 3 === 0 || count % 5 === 0) {
      multiplesOfThreeAndFive.push(count);
    }
  }
  var sum = 0
  for (count = 0; count < multiplesOfThreeAndFive.length; count ++) {
    sum = sum + multiplesOfThreeAndFive[count];
  }
  return sum;
}
//adding a comment so i can get these files merged
