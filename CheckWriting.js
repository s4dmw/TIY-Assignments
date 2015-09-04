var test = require('mocha').it,
  assert = require('chai').assert;

test('toEnglish: `0` to `9`', function(){
  assert.isDefined(toEnglish);
  assert.isFunction(toEnglish);
  assert.equal(toEnglish(0), "zero");
  assert.equal(toEnglish(1), "one");
  assert.equal(toEnglish(2), "two");
  assert.equal(toEnglish(3), "three");
  assert.equal(toEnglish(4), "four");
  assert.equal(toEnglish(5), "five");
  assert.equal(toEnglish(6), "six");
  assert.equal(toEnglish(7), "seven");
  assert.equal(toEnglish(8), "eight");
  assert.equal(toEnglish(9), "nine");

  // et cetera, et cetera, et cetera...
}); // END test(toEnglish)

test('toEnglish: `10` to `20`', function(){
  assert.equal(toEnglish(10), "ten");
  assert.equal(toEnglish(11), "eleven");
  assert.equal(toEnglish(12), "twelve");
  assert.equal(toEnglish(13), "thirteen");
  assert.equal(toEnglish(14), "fourteen");
  assert.equal(toEnglish(15), "fifteen");
  assert.equal(toEnglish(16), "sixteen");
  assert.equal(toEnglish(17), "seventeen");
  assert.equal(toEnglish(18), "eighteen");
  assert.equal(toEnglish(19), "nineteen");
  assert.equal(toEnglish(20), "twenty");
}); // END test(toEnglish)

test('toEnglish: `21` to `30`', function(){
  // this is where `toEnglish` starts to get interesting...
}); // END test(toEnglish)

/**
 * @param {Number} value to convert to English number word
 * @return {String} representing `value` in English
 */
function toEnglish(value){
  if (value == 0) {return "zero"};
  if (value == 1) {return "one"};
  if (value == 2) {return "two"};
  if (value == 3) {return "three"};
  if (value == 4) {return "four"};
  if (value == 5) {return "five"};
  if (value == 6) {return "six"};
  if (value == 7) {return "seven"};
  if (value == 8) {return "eight"};
  if (value == 9) {return "nine"};
  if (value == 10) {return "ten"};
  if (value == 11) {return "eleven"};
  if (value == 12) {return "twelve"};
  if (value == 13) {return "thirteen"};
  if (value == 14) {return "fourteen"};
  if (value == 15) {return "fifteen"};
  if (value == 16) {return "sixteen"};
  if (value == 17) {return "seventeen"};
  if (value == 18) {return "eighteen"};
  if (value == 19) {return "nineteen"};
  if (value == 20) {return "twenty"}
} // END toEnglish

test('BEAST MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(1.23), "one & 23/100s");
  assert.equal(toCheck(12.34), "twelve & 34/100s");
  assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s");
  assert.equal(toCheck(1234.56), "one thousand, two hundred thirty four & 56/100s");
  // you might need to try some values in between...
}); // END test(BEAST MODE)
