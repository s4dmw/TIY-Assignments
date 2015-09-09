var test = require('mocha').it,
  expect = require('chai').expect;
  assert = require('chai').assert;

test('2nd try - summing even Fibonacci numbers?', function(){
  expect(evenFibSum(0)).to.equal(0);
  expect(evenFibSum(1)).to.equal(0);
  expect(evenFibSum(2)).to.equal(2);
  expect(evenFibSum(3)).to.equal(2);
  expect(evenFibSum(10)).to.equal(44);
  expect(evenFibSum(20)).to.equal(14328);
//  expect(evenFibSum(10000)).to.equal(Infinity);

}); //END them tests...


function evenFibSum(N) { //going to try this all in one function now
  var sequence = [];
  var evenSum = 0
  if (N >= 1) {
    sequence.push(1);
  }
  if (N >= 2) {
    sequence.push(2);
    evenSum = 2;
  }
  if (N >=3) {
    sequence.push(3);
  }
  for (count = 3; count < N; count ++) {
    nextNum = sequence[1] + sequence[2];
    sequence.push(nextNum);
    if (nextNum % 2 === 0) {
      evenSum = evenSum + nextNum;
    }
//  console.log(sequence)
  sequence = sequence.slice(1,4);
//  console.log(sequence);
//  console.log(evenSum)
  }
  return evenSum;
}

<<<<<<< HEAD
// giconsole.log(evenFibSum(20));

//adding a comment to get the files to merge
=======
// console.log(evenFibSum(20));
>>>>>>> master
