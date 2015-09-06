var test = require('mocha').it,
  expect = require('chai').expect;

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

  // ...ad nauseum.
}); // END test(fibonacci)

function fibonacci(N) {
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

/*
test('just even numbers?', function(){
  expect(evens([ ]).to.deep.equal([ ]);
  expect(evens([ 1 ]).to.deep.equal([ ]);
  expect(evens([ 1, 1, 1 ]).to.deep.equal([ ]);
  expect(evens([ 2 ]).to.deep.equal([ 2 ]);
  expect(evens([ 1, 2 ]).to.deep.equal([ 2 ]);
  // More tests, perhaps?
}); // END test(evens)

test('summing lists of Number', function(){
  assert.equal(sum([ ]), 0);
  assert.equal(sum([ 1 ]), 1);
  assert.equal(sum([ 1, 1 ]), 2);
  // ...et cetera, et cetera, et cetera.
}); // END test(sum)

// You expect me to write `sum`, too?

test('summing even Fibonacci numbers?', function(){
  expect( sum(evens(fibonacci(0))) ).to.equal(FILL_ME_IN); // nice.
  // There really should be more code in here...
}); // END test(dat CHAIN tho)
*/
