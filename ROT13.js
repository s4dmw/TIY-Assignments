/**
 * The function `reverse` computes the reversal
 * of a given `String` (don't copy-pasta!)
 *
 * @param {String} S to reverse
 * @return {String}
 */
function reverse(S){
  S = String(S);
  var newstring=[];
  var newstringcounter = 0;
  var resultstring = "";
  for (count = S.length-1; count >= 0; count --) {
      newstring[newstringcounter]=S[count];
      newstringcounter ++;
  }
  for (count =0; count < S.length; count ++){
    resultstring=resultstring.concat(newstring[count]);
  }

//  console.log(resultstring); //want to see result as the function runs
  return resultstring;
}

//debuging caese
//reverse("A");
//reverse("cat");
//reverse("ward");
//reverse("books");

 console.assert(reverse("") === ""); // Really
console.assert(reverse("A") === "A"); // Jerk.
console.assert(reverse("cat") === "tac");
console.assert(reverse("dog") === "god");
console.assert(reverse("ward") === "draw");
console.assert(reverse("books") === "skoob"); // Rokey, dokey...
console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
);

/**
 * Function `encode` accepts a `String` and produces
 * the appropriate ROT13 "encoded" version, i.e. every
 * character in `phrase` is "rotated" ahead by 13 characters.
 *
 * @see String.prototype.charCodeAt
 * @see String.prototype.fromCharCode
 * @see http://en.wikipedia.org/wiki/ROT13
 *
 * // Start with just `phrase`...
 * @param {String} phrase to encode
 * // Add `N` in part 2!
 * // @param {Number} N rotation to apply, default 13
 * @return {String} encoded with ROT13
 */
function encode(phrase, N){
  phrase=String(phrase);
  var phraselength = phrase.length;
  var newphrase=[];
// leaving this for now in case i need it
//  var alphabet = {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h",
//8: "i", 9: "j", 10: "k", 11: "l", 12: "m", 13: "n", 14: "o", 15: "p", 16: "q", 17: "r",
//18: "s", 19: "t", 20: "u", 21: "v", 22: "w", 23: "x", 24: "y", 25: "z"};
  var alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" ,"z"];

  if (N == undefined) {// defaults N to 13
    N = 13;
  }
  for (count = 0; count < phrase.length; count ++){
    letterposition = alphabet.indexOf(phrase[count]);
    if (letterposition + N >= 25) {
        newphrase = newphrase.slice(0,count)+alphabet[letterposition + N - 26]+newphrase.slice(count,phraselength-1);
    }
    else {
      newphrase = newphrase.slice(0,count)+alphabet[letterposition + N]+newphrase.slice(count,phraselength-1);
    }
  }
  return newphrase;
}

/**
 * Function `decode` accepts a `phrase` and `N` and
 * decoded it appropriately, i.e. every _word_ character
 * in `phrase` is rotated backward by `N` characters.
 *
 * @param {String} phrase to decode
 * @param {Number} N rotation to apply, default 13
 * @return {String} decoded by ROT-N
 */
function decode(phrase, N){
  phrase=String(phrase);
  var phraselength = phrase.length;
  var newphrase=[];
// leaving this for now in case i need it
//  var alphabet = {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h",
//8: "i", 9: "j", 10: "k", 11: "l", 12: "m", 13: "n", 14: "o", 15: "p", 16: "q", 17: "r",
//18: "s", 19: "t", 20: "u", 21: "v", 22: "w", 23: "x", 24: "y", 25: "z"};
  var alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" ,"z"];

 if (N == undefined){ // defaults N to 13
   N = 13;
 }
  for (count = 0; count < phrase.length; count ++){
    letterposition = alphabet.indexOf(phrase[count]);
    if (letterposition - N >= 0) {
        newphrase = newphrase.slice(0,count)+alphabet[letterposition - N]+newphrase.slice(count,phraselength-1);
    }
    else {
      newphrase = newphrase.slice(0,count)+alphabet[letterposition - N + 26]+newphrase.slice(count,phraselength-1);
    }
  }
  return newphrase;
}

// Produce more examples, please...

//encode function examples:
console.assert(encode("a") === "n");
console.assert(encode("n") === "a");
console.assert(encode("it") === "vg");
console.assert(encode("cat") === "png");
console.assert(encode("poop") === "cbbc");
console.assert(encode("hello") === "uryyb");
console.assert(encode("uryyb") === "hello");

//encode(phrase, N) examples.
console.assert(encode("a",2) === "c");
console.assert(encode("z", 5) === "e");
console.assert(encode("yz", 12) == "kl");
console.assert(encode("hello", 2) === "jgnnq");

//decode function examples
console.assert(decode("a") === "n");
console.assert(decode("hello", 13) === "uryyb");
console.assert(decode("hello", 0) === "hello");
console.assert(decode("hello", 1) === "gdkkn")
console.assert(decode("a", 2) === "y");
console.assert(decode("aa", 2) === "yy");
console.assert(decode("jgnnq", 2) === "hello")
