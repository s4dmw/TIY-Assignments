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
//  var word
  var numArray ={0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve",
13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen",
19: "nineteen", 20: "twenty"};

/*  if (value == 0) {word = "zero"};
  if (value == 1) {word = "one"};
  if (value == 2) {word = "two"};
  if (value == 3) {word = "three"};
  if (value == 4) {word = "four"};
  if (value == 5) {word = "five"};
  if (value == 6) {word = "six"};
  if (value == 7) {word = "seven"};
  if (value == 8) {word = "eight"};
  if (value == 9) {word = "nine"};
  if (value == 10) {word = "ten"};
  if (value == 11) {word = "eleven"};
  if (value == 12) {word = "twelve"};
  if (value == 13) {word = "thirteen"};
  if (value == 14) {word = "fourteen"};
  if (value == 15) {word = "fifteen"};
  if (value == 16) {word = "sixteen"};
  if (value == 17) {word = "seventeen"};
  if (value == 18) {word = "eighteen"};
  if (value == 19) {word = "nineteen"};
  if (value == 20) {word = "twenty"}
*/
return numArray[value];
} // END toEnglish

test('BEAST MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(1.23), "one & 23/100s");
  assert.equal(toCheck(12.34), "twelve & 34/100s");
  assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s");
  assert.equal(toCheck(1234.56), "one thousand, two hundred thirty four & 56/100s");
  // you might need to try some values in between...
}); // END test(BEAST MODE)
