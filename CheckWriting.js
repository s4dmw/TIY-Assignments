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
  assert.equal(toEnglish(21), "twenty one");
  assert.equal(toEnglish(22), "twenty two");
  assert.equal(toEnglish(23), "twenty three");
  assert.equal(toEnglish(24), "twenty four");
  assert.equal(toEnglish(25), "twenty five");
  assert.equal(toEnglish(26), "twenty six");
  assert.equal(toEnglish(27), "twenty seven");
  assert.equal(toEnglish(28), "twenty eight");
  assert.equal(toEnglish(29), "twenty nine");
  assert.equal(toEnglish(30), "thirty");
  assert.equal(toEnglish(99), "ninety nine");
}); // END test(toEnglish)

/**
 * @param {Number} value to convert to English number word
 * @return {String} representing `value` in English
 */
function toEnglish(value){

  var numArray ={0: "zero", 1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten", 11: "eleven", 12: "twelve",
13: "thirteen", 14: "fourteen", 15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen",
19: "nineteen", 20: "twenty", 30: "thirty", 40: "forty", 50: "fifty", 60: "sixty", 70: "seventy",
<<<<<<< .merge_file_SxBwJ5
80: "eighty", 90: "ninety", 100: "one hundred", 200: "two hundred", 300: "three hundred",
400: "four hundred", 500: "five hundred"};
=======
80: "eighty", 90: "ninety"};
>>>>>>> .merge_file_E9T4K3

  if (value <= 20) {
    return numArray[value];
  }
  if (value % 10 == 0) {
    return numArray[value];
  }
  if (value > 20 && value < 100){
    tens = Math.trunc(value/10) * 10;
    ones = value - tens;
    return numArray[tens] + " " + numArray[ones];
  }

} // END toEnglish








test('BEAST MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(0.00), "zero & 00/100s")
  assert.equal(toCheck(0.45), "zero & 45/100s")
  assert.equal(toCheck(1.23), "one & 23/100s");
  assert.equal(toCheck(12.34), "twelve & 34/100s");
  assert.equal(toCheck(20.30), "twenty & 30/100s");
  assert.equal(toCheck(30.32), "thirty & 32/100s")
  assert.equal(toCheck(55.05), "fifty five & 05/100s");
  // you might need to try some values in between...
}); // END test(BEAST MODE)

function toCheck(value) {
  var cents = Math.round((value - Math.trunc(value)) * 100);
  if (cents < 10) {
    cents = "0"+cents;
  }
  var dollars = toEnglish(Math.trunc(value));


  return dollars + " & " + cents + "/100s";

}

test('NIGHTMARE MODE: toCheck', function(){
  assert.isFunction(toCheck);
  assert.equal(toCheck(123.45), "one hundred twenty three & 45/100s");
  assert.equal(toCheck(1234.56), "one thousand, two hundred thirty four & 56/100s");
<<<<<<< .merge_file_SxBwJ5
});

=======
  // you might need to try some values in between...
}); // END test(BEAST MODE)
>>>>>>> .merge_file_E9T4K3



/*
saving this just incase....it would suck if i have to type it all again!
  if (value == 0) {word = "zero"};
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
