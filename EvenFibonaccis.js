var test = require('mocha').it,
  expect = require('chai').expect;
  assert = require('chai').assert;

test('generating the Fibonacci sequence', function(){
  expect(fibonacci(-1)).to.deep.equal([ ]);
  expect(fibonacci(0)).to.deep.equal([ ]);
  expect(fibonacci(1)).to.deep.equal([ 1 ]);
  expect(fibonacci(2)).to.deep.equal([ 1, 2 ]);
  expect(fibonacci(3)).to.deep.equal([1, 2, 3]);
  expect(fibonacci(4)).to.deep.equal([1, 2, 3, 5])
  expect(fibonacci(5)).to.deep.equal([1, 2, 3, 5, 8]);
  expect(fibonacci(6)).to.deep.equal([1, 2, 3, 5, 8, 13]);
  expect(fibonacci(7)).to.deep.equal([1, 2, 3, 5, 8, 13, 21]);
  expect(fibonacci(8)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34]);
  expect(fibonacci(10)).to.deep.equal([1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);



  // ...ad nauseum.
}); // END test(fibonacci)

function fibonacci(N) {  //returns the fibonacci sequence for "N"
  sequence = [];
  if (N >= 1) {
    sequence.push(1);
  }
  if (N >= 2) {
    sequence.push(2);
  }
  for (count = 2; count < N; count ++) {
    sequence.push(sequence[(count - 2)] + sequence[(count - 1)]);
  }
  return sequence;
}


test('just even numbers?', function(){
  expect(evens([ ])).to.deep.equal([ ]);
  expect(evens([ 1 ])).to.deep.equal([  ]);
  expect(evens([ 1, 1, 1 ])).to.deep.equal([ ]);
  expect(evens([ 2 ])).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2 ])).to.deep.equal([ 2 ]);  // More tests, perhaps?
  expect(evens([ 1, 2, 3, 5, 8 ])).to.deep.equal([ 2, 8 ]);
  expect(evens([ 1, 2, 3, 5, 8, 13, 21, 34])).to.deep.equal([ 2, 8, 34 ]);
  expect(evens(fibonacci(8))).to.deep.equal([ 2, 8, 34 ]);
}); // END test(evens)

function evens(N) {  //returns the even numbers of a given array N
  var evens = [];
    var length = N.length;
  for (count = 0; count < length; count ++){
    if (N[count] % 2 == 0) {
      evens.push(N[count]);
    }
  }
  return evens;
}




test('summing lists of Number', function(){
  assert.equal(sum([ ]), 0);
  assert.equal(sum([ 1 ]), 1);
  assert.equal(sum([ 1, 1 ]), 2);
  assert.equal(sum([2, 8]), 10);
  assert.equal(sum([2, 8, 34]), 44);
  assert.equal(sum(evens(fibonacci(0))), 0);
  assert.equal(sum(evens(fibonacci(1))), 0);
  assert.equal(sum(evens(fibonacci(2))), 2);
  assert.equal(sum(evens(fibonacci(3))), 2);
  assert.equal(sum(evens(fibonacci(8))), 44);


}); // END test(sum)

function sum (N) {
  var sum = 0
  for (count = 0; count < N.length; count ++) {
    sum = sum + N[count];
  }
  return sum;

}

// oops, kinda already did the testing below...but i'll do it again just for "fun"

test('summing even Fibonacci numbers?', function(){
  expect( sum(evens(fibonacci(0))) ).to.equal(0);
  expect(sum(evens(fibonacci(1)))).to.equal(0);
  expect(sum(evens(fibonacci(2)))).to.equal(2);
  expect(sum(evens(fibonacci(3)))).to.equal(2);
  expect(sum(evens(fibonacci(10)))).to.equal(44);
  expect(sum(evens(fibonacci(20)))).to.equal(14328); //getting hard to do in my head
  expect(sum(evens(fibonacci(50)))).to.equal(26658145586);
  expect(sum(evens(fibonacci(100)))).to.equal(1.5005088278427221e+21); // lol
  expect(sum(evens(fibonacci(1000)))).to.equal(1.8412729310978296e+209); // wtf is this #?
  expect(sum(evens(fibonacci(10000)))).to.equal(Infinity); //uh oh






}); // END test(dat CHAIN tho)
