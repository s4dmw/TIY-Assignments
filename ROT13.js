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
function encode(phrase){
  phrase=String(phrase);
  var phraselength = phrase.length;
  var newphrase=[];
  var newphrasecounter = 0;
  var resultphrase = "";
//  var alphabet = {0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h",
//8: "i", 9: "j", 10: "k", 11: "l", 12: "m", 13: "n", 14: "o", 15: "p", 16: "q", 17: "r",
//18: "s", 19: "t", 20: "u", 21: "v", 22: "w", 23: "x", 24: "y", 25: "z"};

var alphabet = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
 "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y" ,"z"];

console.log("input phrase = "+phrase);

  for (count = 0; count < phrase.length; count ++){
    letterposition = alphabet.indexOf(phrase[count]);
    console.log(phrase[count]);
    if (letterposition > 12) {
        console.log("count = " + count);
        console.log("letter = " + phrase[count]);
        console.log("letter position = " + alphabet.indexOf(phrase[count]));
        newphrase = newphrase.slice(0,count)+alphabet[letterposition - 13]+newphrase.slice(count,phraselength-1);
        console.log(newphrase);
    }
    else {
      console.log("count = " + count);
      console.log("letter = " + phrase[count]);
      console.log("letter position = " + alphabet.indexOf(phrase[count]));
      newphrase = newphrase.slice(0,count)+alphabet[letterposition + 13]+newphrase.slice(count,phraselength-1);
      console.log(newphrase);
    }
//    console.log(newphrase);
  }
//  console.log(newphrase);
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
    // YOUR CODE HERE
}

// Produce more examples, please...
console.log(encode("uryyb"));
//console.log(encode("uryyb"));
//console.assert(encode("hello") === "uryyb");
//console.assert(encode("uryyb") === "hello");

//console.assert(encode("hello", 2) === "jgnnq")
//console.assert(decode("jgnnq", 2) === "hello")
