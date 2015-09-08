# About JavaScript

## Basic Literal Types
JavaScript uses the following Primitive (Basic Literal Types):
#####- null
- `null` has only one value which is empty(or no) value.

#####- undefined
- `undefined` is a property who's value is undefined.

#####- Boolean
- `Boolean` has two values, true or false. These values can be the result of logial comparisons.
- example: `7 < 3` returns `false`

#####- Number
- A `Number` can have any numerical value (integers, fractional numbers, ratios).
- examples: `0, 1.2, 55, -12`

#####- String
- Strings are pretty much any character wrapped in quotes (single or double).
- example: `"this is a string"`

## Operators
#### Arithmetic Operators
Arithmetic operators take numerical operands, perform operations on them, and return a single numerical value. Multiple operands and operators can be used (eg. `5+5-3` will return 7).

#####- addition `+`
- example: `2 + 2` returns a value of 4

#####- subtraction `-`
- example: `5-3` returns a value of 2

#####- multiplication `*`
- example: `12*3` returns a value of 36

#####- division `/`
- example: `33/11` returns a value of 3

#### Comparison Operators
Comparison operators compare two operands and return a Boolean value (true or false).

#####- equal `==`
- example: `3==7` returns false

#####- strict equal `===` - equal and of the same type
- example: `3==="three"` returns false

##### strict not equal `!==` - true if not equal but are same type, or not the same type
- example: `3!=="three"` returns true

#####- not equal `!=`
- example: `3!=7` returns true

#####- greater than `>`
- example: `3>7` returns false

#####- greater than or equal `>=`
- example: `7>=3` returns true

#####- less than `<`
- example: `3>7` returns true

#####- less than or equal `<=`
- example: `7<=3` returns false


#### Assignment Operators
Assignment operators assign a value to the left operand based on the value of the right operand.
- example: `x=7`
- example: `y="text string"`
- example: `z=true`

#### Unary Operators
Unary operators have only one operand.


#####- the `typeof` operator returns a string indicating the type of the operand
- example: `typeof 3` returns 'number'
- example: `typeof "text"` returns 'string'

## Built-in Constants
#####- undefined
- a value of undefined

#####- NaN
- Not a Number
- example: `3/"text"` returns NaN

#####- Infinity
- numeric value representing Infinity
- example: `3/0` returns Infinity


## Special Characters
#####- backspace `\b`
- example: `console.log("This line has a backspace\b in it")` returns "This line has a backspac in it"

#####- new line `\n`
- example: `console.log("This line has a newline \n in it")`
returns "This line has a newline

 in it"

#####- carriage return `\r`
- example: `console.log("This line has a carriage return \r in it")` returns "in itine has a carriage return"
- what the what? carriage return goes back to the beginning of THAT line

#####- tab `\t`
- example: `console.log("This line has a tab \t in it")` returns "This line has a tab 	 in it"

#####- backslash character `\\`
- example: `console.log("This line has a backslash \\ in it")` returns "This line has a backslash \ in it"

## Functions
Functions are sets of statements that perform tasks or calculate values. To use a function, you must define it somewhere in the scope from which you wish to call it.

#### Function Definition
A function must be defined with a function name and the arguments are passed to the function during invocation. Once invoked, that function will complete the commands inside of it.


-example:
```
function addition (A, B) {
      return A+B;

    }
```
//when invoked, function takes the arguments A and B and returns their sum

#### Function Invocation
A function must be invoked, with the arguments in parantheses, in order to run.

-example: `console.log(addition(4, 3));` will return 7

//the above example invokes the addition function from the previous example with the arguments 4 and 3. The function returns a value of 7 which is printed to the screen with console.log.


##all of the entries from the 03 assignment are in the 03 branch...guessing i'll have to resolve that later...


##Arrays
An Array is a collection of literal types.
-array indexes start with zero
-example: [1, 2, true, null, "text"]

#####- creating an array
-example: `var x = [1, 2, 3, 4];` creates an array with those number in it
-example: `var y = [];` creates an empty array

#####- Accessing the array
-example: `console.log(x);` will return [1, 2, 3, 4] when used with the array example above
-example: `console.log(x[0]);` will return the number in the 0 postion, which is 1

#####- length
- the length function returns the number of elements in an array
- example: `console.log(x.length);` will return 4 when used with the array example above

### [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)

#### [`Array.prototype.pop`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

* _params:_ none
* _returns:_ the last element
* _side-effects_: removes the element returned

##### Example
```var x = [1, 2, 3, 4, 5]; //creates an array
x.pop();  // removes the last element of the array
console.log(x); // returns [1, 2, 3, 4]

#### [`Array.prototype.push`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

* _params:_ the elements to add to the end of the array
* _returns:_ the number of elements in the array
* _side-effects_: adds the parameters to the end of the array

##### Example
```var x = [1, 2, 3, 4, 5]; //creates an array
x.push(6, 7); //adds 6 and 7 to the end of the array and returns the length of the array - 7
console.log(x); // returns [1, 2, 3, 4, 5, 6, 7]

#### [`Array.prototype.shift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

* _params:_ none
* _returns:_ the first element of the array
* _side-effects_: removes the first element of the array

##### Example
```var x = [1, 2, 3, 4, 5]; //creates an array
x.shift(); //removes the first elment (1), and returns that element
console.log(x); // returns [2, 3, 4, 5]

#### [`Array.prototype.unshift`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

* _params:_ elements to add to the front of the array
* _returns:_ the new length of the array
* _side-effects_: adds elements to the front of the array

##### Example
```var x = [3, 4, 5]; //creates an array
x.unshift(1, 2); //adds (1, 2) to the array and returns the new length (5)
console.log(x); // returns [1, 2, 3, 4, 5]

#### [`Array.prototype.indexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

* _params:_ element to locate in the array
* _returns:_ index of the element you want to locate
* _side-effects_: none

##### Example
```var x = [1, 2, 3, 4, 5]; //creates an array
console.log(x.indexOf(2)); //returns the index/location (1) of the element 2

#### [`Array.prototype.reverse`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

* _params:_ none
* _returns:_ returns the array with reversed order
* _side-effects_: reverses the order of the elements in the array

##### Example
```var x = [1, 2, 3, 4, 5]; //creates an array
x.reverse(); //reverses the array and returns [5, 4, 3, 2, 1]
console.log(x); // returns [5, 4, 3, 2, 1]

#### [`Array.prototype.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

* _params:_ Optional. Specifies a function that defines the sort order. If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
* _returns:_ returns the array with the sorted order
* _side-effects_: sorts the elements in the array

##### Example
```var x = [5, 4, 3, 2, 1]; //creates an array
x.sort(); //sors the order of the array and returns [1, 2, 3, 4, 5]
console.log(x); // returns [1, 2, 3, 4, 5]


## Statements
#### Block Statements
A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets `{}`.

-example:
```
if (x == y) { //this curly bracket starts the block
 z = x + y;
 a = x / y;
} //this curly bracket closes the block
```

#### Conditional Statements
#####- if...else
-example:
```
if (x == 1) {  // if first condition is met, the first statement is performed, then the loop is broken
  y = 2;
  }
else if (x == 2) { //first condition not met, if this one is, the statement is performed and loop broken
  y = 3;
else { //if neither conditions are met, this statement is performed
  y = 4;
}
```

#####- switch and case
A switch statement allows a program to evaluate an expression and attempt to match the expression's value to a case label. If a match is found, the program executes the associated statement.
-example:
```
switch (name) { //
  case "David":
    console.log("Interesting, that's my name too");
    break;
  case "Shelley":
    console.log(It's always a pleasure to see you Shelley");
    break;
  case "Andrew":
    console.log("Hi Andrew, long time no see");
    break;
  default:
    console.log("Hi " + name + " it's nice to meet you");
    break;
}
```

##Loops and Iteration
#####- while statement
-executes its statements while its condition is true.
-example:
```
while (x = 3) { //while the condition is true, the commands in the statement will be performed
 y ++;
}
```

#####- do...while statement
-executes its statements until the the while condition is false.
-example:
```
do {
  y ++;
} while (x = 3);
```



#### Reading JavaScript 

Start investigating [the DOM on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model) and add some documentation to your "Reading JavaScript" file. Pay particular attention to the following:

* the `Window` object
  * properties like `location`, `document`, `history`
  * what kind of things are stored in those properties (warning: rabbit holes)
  * methods like `alert`, `confirm`, `reload`, `open` and `close`
* the `Location` object
  * all the properties here are important
  * what happens when you mess around with them?
* the `Document` object
  * properties like `head` and `body`
  * methods like
    * `getElementById` and `getElementsByClassName`
    * `querySelector` and `querySelectorAll`
    * `appendChild` and the `create*` family
    * `write` and `writeln`
* the `HTMLElement` type
  * properties like
    * `id` and `className`
    * `innerHTML` and `outerHTML`
    * `children`, `parent`, `nextSibling`, and `firstChild`
  * methods like
    * `addEventListener` and `dispatchEvent`
    * the `*Attribute` family
* the `HTMLCollection` and `NodeList` types
  * how they differ from `Array`
  * how they can be used _like_ an `Array`
  * the `item` method
 
* **Reading JavaScript: DOM EDITION**
   * [ ] the `Window` object
   * [ ] the `Location` object
   * [ ] the `Document` object
   * [ ] the `HTMLElement` type
   * [ ] the `HTMLCollection` and `NodeList` types
