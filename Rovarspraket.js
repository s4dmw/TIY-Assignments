/**
 * write a function `max` that takes two `Numbers` as arguments
 * and returns the largest of them. HINT: Use `if-else`...!
 */
console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);

// Why would you do this?
console.assert(max("aaa",0) === 0);

// Okay, that's just silly...
console.assert(isNaN(max("aaa","bbb")));

/**
 * @param {Number} A to compare to B
 * @param {Number} B to compare to A
 * @return {Number} the greater of A or B
 */
function max(A, B){
  if (A > B) {
    return A;
  }
  else {
    return B;
  }
}
/**
 * Write a function `maxOfThree` that takes _three_
 * `Numbers` as arguments and returns the largest of them.
 */
console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);

// Look, that's just mean...
 console.assert(maxOfThree("aaa",0,1) === 1);

// Who's running this picture, anyway?
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * @param {Number} A
 * @param {Number} B
 * @param {Number} C
 * @return {Number} greatest of A, B, and C
 */
function maxOfThree(A, B, C){
  if (A > B && A > C){
    return A;
  }
  if (B > C && B > A){
    return B;
  }
  else {
    return C;
  }
}
  /**
   * Write a function `isVowel` that takes a character
   * (i.e. a `String` of length 1) and returns a `Boolean`
   * indicating whether the input is a vowel or not.
   */

  // What a cruel, cruel master you are...
  console.assert(isVowel(0) === false);

  console.assert(isVowel("B") === false);
  console.assert(isVowel("b") === false);
  console.assert(isVowel("a") === true);
  console.assert(isVowel("E") === true);

  // What should _this_ do?
   console.assert(isVowel("AEIOU") === false);

  /**
   * @param {String} char of length 1
   * @return {Boolean} whether `char` is an English vowel
   */
  function isVowel(char){
    vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    for (count=0; count < 9; count ++) {
      if (char == vowels[count]) {
        return true;
      }
    }
    return false;
  }


  /**
   * The `disemvowel` function combats the Internet
   * Trolls by handily removing all of the vowels from
   * their angry, hurtful comments. It's Super-Effective!
   *
   * @param {String} comment to disemvowel
   * @return {String} cmmnt dsmvwld
   */

  function disemvowel(comment){
    stringlength = comment.length;
    comment = String(comment);
    vowels = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
    for (counter = stringlength; counter > 0; counter--) {
      for (count=0; count < 9; count ++) {
        if (comment[counter] == vowels[count]) {
          comment = comment.slice(0,counter)+comment.slice(counter+1,stringlength)
        }
      }
    }
    return comment;
  }

  // Shorter test cases might be appreciated...
  console.assert(disemvowel('LOL') === "LL");

  console.assert(disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!"
  );
