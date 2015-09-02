console.assert(add(0, 0) === 0);
console.assert(add(0, 1) === 1);
console.assert(add(0, 2) === 2);
console.assert(add(0, 3) === 3);
console.assert(add(0, 4) === 4);
console.assert(add(0, 5) === 5);
console.assert(add(0, 6) === 6);
console.assert(add(0, 7) === 7);
console.assert(add(0, 8) === 8);
console.assert(add(0, 9) === 9);
console.assert(add(1, 0) === 1);
console.assert(add(1, 1) === 2);
console.assert(add(1, 2) === 3);
console.assert(add(1, 3) === 4);
console.assert(add(1, 4) === 5);
console.assert(add(1, 5) === 6);

/**
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
function add(A, B){
return A+B;
} // END add


console.assert(minus(0, 0) === 0);
console.assert(minus(0, 1) === -1);
console.assert(minus(0, 2) === -2);
console.assert(minus(0, 3) === -3);
console.assert(minus(0, 4) === -4);
console.assert(minus(0, 5) === -5);
console.assert(minus(0, 6) === -6);
console.assert(minus(0, 7) === -7);
console.assert(minus(0, 8) === -8);
console.assert(minus(0, 9) === -9);


function minus(A, B){
  return A-B;
}


console.assert(times(0, 0) === 0);
console.assert(times(1, 1) === 1);
console.assert(times(2, 2) === 4);

function times(A, B){
  return A*B;
}

console.assert(divide(0, 1) === 0);
console.assert(divide(1, 1) === 1);
console.assert(divide(2, 1) === 2);
console.assert(divide(1, 0) === Infinity);
console.assert(divide(2, 0) === Infinity);


function divide(A, B){
  return A/B;
}
