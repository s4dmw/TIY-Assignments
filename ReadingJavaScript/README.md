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
Arithmetic operators take numbererical operands, perform operations on them, and return a single numberical value. Multiple operands and operators can be used (eg. `5+5-3` will return 7).

#####- addition `+`
- example: `2 + 2` returns a value of 4

#####- subtraction `-`
- example: `5-3` returns a value of 2

#####- mulitplication `*`
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
- exmple: `7<=3` returns false


#### Assignment Operators
Assignment operators assign a value to the left operand based on the value of the right operand.
- example: `x=7`
- example: `y="text string"`
- example: `z=true`

#### Unary Operators
Unary operators have only one operand.

#####- the `typeof` oeperator returns a string indicating the type of the operand
- example: `typeof 3` returns 'number'
- example: `typeof "text"` returns 'string'

## Built-in Constants
#####- undefined 
- a value of undefined

#####- NaN 
- Not a Number
- example: `3/"text"` returns NaN

#####- Infinity
- numberic value representing Infinity
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


#### Blocks
A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets `{}`.

-example: 
```
if (x == y) { //this curly bracket starts the block
 z = x + y;
 a = x / y;
} //this curly bracket closes the block
```


  if, else
 while, do-while
