var test = require('mocha').it,
  expect = require('chai').expect;

test('fromEnglish: "zero" through "nine"', function(){
  expect(fromEnglish).to.exist;
  expect(fromEnglish("zero")).to.equal(0);
  expect(fromEnglish("one")).to.equal(1);
  expect(fromEnglish("two")).to.equal(2);
  expect(fromEnglish("three")).to.equal(3);
  expect(fromEnglish("four")).to.equal(4);
  expect(fromEnglish("five")).to.equal(5);
  expect(fromEnglish("six")).to.equal(6);
  expect(fromEnglish("seven")).to.equal(7);
  expect(fromEnglish("eight")).to.equal(8);
  expect(fromEnglish("nine")).to.equal(9);
}); // END test(fromEnglish)

/**
 * @param {String} word representing an English number
 * @return {Number} value corresponding to `word`
 */
function fromEnglish(word){
    if (word == "zero") {
      return 0;
    }
    if (word == "one") {
      return 1;
    }
    if (word == "two") {
      return 2;
    }
    if (word == "three"){
      return 3;
    }
    if (word == "four"){
      return 4;
    }
    if (word == "five"){
      return 5;
    }
    if (word == "six"){
      return 6;
    }
    if (word == "seven"){
      return 7;
    }
    if (word == "eight"){
      return 8;
    }
    if (word == "nine") {
      return 9;
    }
} // END fromEnglish

test('plus: ("zero", "zero") through ("zero", "nine")', function(){
  expect(plus).to.exist;
  expect(plus("zero", "zero")).to.equal(0);
  expect(plus("zero", "one")).to.equal(1); // change just one thing!
  expect(plus("zero", "two")).to.equal(2); // ha!
  expect(plus("zero", "three")).to.equal(3);
  expect(plus("zero", "four")).to.equal(4);
  expect(plus("zero", "five")).to.equal(5);
  expect(plus("zero", "six")).to.equal(6);
  expect(plus("zero", "seven")).to.equal(7);
  expect(plus("zero", "eight")).to.equal(8);
  expect(plush("zero", "nine")).to.equal(9);
}); // END test(plus)

/**
 * @param {String} A representing an English number word
 * @param {String} B representing an English number word
 * @return {Number} the value of `A` added to `B`
 */
function plus(A, B){
  if (A == "zero"){
    if (B == "zero"){
      return 0;
    }
    if (B == "one"){
      return 1;
    }
    if (B == "two") {
      return 2;
    }
    if (B == "three") {
      return 3;
    }
  }
} // END plus

test('minus: ("zero", "zero") through ("zero", "nine")', function(){
  expect(minus).to.exist;
  expect(minus("zero", "zero")).to.equal(0);
  expect(minus("zero", "one")).to.equal(-1);
  // etc, etc, etc
}); // END test(minus)

// What about multiplication? Division? Exponents?
