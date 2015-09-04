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

 console.assert(reverse("") === ""); // Really?

console.assert(reverse("A") === "A"); // Jerk.

console.assert(reverse("cat") === "tac");

console.assert(reverse("ward") === "draw");

console.assert(reverse("books") === "skoob"); // Rokey, dokey...

console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
);
