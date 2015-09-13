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

## Document Object Model (DOM)
a programming interface for HTML, XML and SVG documents. It provides a structured representation of the document  and it defines a way that the structure can be accessed from programs so that they can change the document structure, style and content. The DOM provides a representation of the document as a structured group of nodes and objects that have properties and methods. Nodes can also have event handlers attached to them, and once that event is triggered the event handlers get executed. Essentially, it connects web pages to scripts or programming languages.

## The Window object

### Properties
#####- location 
- read-only property returns a Location object with information about the current location of the document
- example: `location = "http://www.google.com";`

#####- document 
- returns a reference to the document contained in the window
- syntax: `doc = window.document`

#####- history 
- returns a reference to the History object, which provides an interface for manipulating the browser session history
- example: `history.back();     // same as clicking the browser's back button`

### Methods
#####- alert
- displays an alert dialog with the optional specified content and an OK button
- example: `window.alert("ERROR!!!");`

#####- confirm
- displays a modal dialog with an optional message and two buttons, OK (returns true) and Cancel (false)
- example: `answer = window.confirm("Are you SURE you want to do that?");

#####- open
- Loads a resource into either a new browsing context (such as a window) or one that already exists, depending on the specified parameters.
- syntax: `var windowObjectReference = window.open(strUrl, strWindowName, [strWindowFeatures]);`

#####- close
- Closes the current window, or the window on which it was called.
- syntax: `window.close();`

## The Location object
The Location interface represents the location of the object it is linked to. Changes done on it are reflected on the object it relates to.

#####- assign
- causes the window to load and display the document at the URL specified.
- syntax: `object.assign(url);`

#####- reload
- reloads the resource from the current URL. Its optional unique parameter is a Boolean, which, when it is true, causes the page to always be reloaded from the server. If it is false or not specified, the browser may reload the page from its cache.
- syntax: `object.reload(forcedReload);`

#####- replace
- replaces the current resource with the one at the provided URL. The difference from the assign() method is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.
- syntax: object.replace(url);

## The Document object
Each web page loaded in the browser has its own document object. The Document interface serves as an entry point into the web page's content and provides functionality which is global to the document

### Properties
#####- head
- Returns the <head> element of the current document. If there are more than one <head> elements, the first one is returned.
- syntax: `var objRef = document.head;`

#####- body
- Returns the <body> or <frameset> node of the current document, or null if no such element exists.
- syntax: `var objRef = document.body;`
- syntax: `document.body = objRef;`

### Methods
#####- getElementByID
- Returns a reference to the element by its ID
- syntax: `element = document.getElementById(id);`

#####- getElementByClassName
- Returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class names.
- syntax: `var elements = document.getElementsByClassName(names);`
- syntax: `var elements = rootElement.getElementsByClassName(names);`

#####- querySelector
- Returns the first element within the document that matches the specified group of selectors.
- syntax: `element = document.querySelector(selectors);`

#####- querySelectorAll
- Returns a list of the elements within the document that match the specified group of selectors.
- syntax: `elementList = document.querySelectorAll(selectors)`

#####- write
- Writes a string of text to a document stream opened by document.open().
- syntax: `document.write(markup);`

#####- writeIn
- Writes a string of text followed by a newline character to a document.
- sytax: `document.writeln(line);`

## The HTMLElement Type
The HTMLElement interface represents any HTML element. Some elements directly implement this interface, others implement it via an interface that inherits it.

### Properties
#####- id
- represents the element's identifier, reflecting the id global attribute.
- syntax: `var idStr = elt.id;`

#####- className
- gets and sets the value of the class attribute of the specified element.
- syntax: `var cName = elementNodeReference.className;`
- syntax: `elementNodeReference.className = cName;`

#####- innerHTML
- sets or gets the HTML syntax describing the element's descendants.
- syntax: `var content = element.innerHTML;`

#####- outerHTML
- gets the serialized HTML fragment describing the element including its descendants. It can be set to replace the element with nodes parsed from the given string.
- syntax: `var content = element.outerHTML;`

#####- children
- read-only property that returns a live HTMLCollection of the child elements of Node.
- syntax: `var elList = elementNodeReference.children;`

#####- firstChild
-read-only property returns the object's first child Element, or null if there are no child elements.
- syntax: `var childNode = elementNodeReference.firstElementChild;`


## HTMLCollection
The HTMLCollection interface represents a generic collection (array-like object) of elements (in document order) and offers methods and properties for selecting from the list.

### Methods
#####- item 
- HTMLCollection.item( ) gets an element by position.
- example:
```
var c = document.images;  
var img0 = c.item(0);     
var img1 = c[1]; 
```

## NodeList
collections of nodes such as those returned by Node.childNodes and the document.querySelectorAll method.

### Methods
#####- item
- Returns a node from a NodeList by index.
- syntax: `nodeItem = nodeList.item(index)`


## DOM Events
DOM Events are sent to notify code of interesting things that have taken place. Each event is represented by an object which is based on the Event interface, and may have additional custom fields and/or functions used to get additional information about what happened. Events can represent everything from basic user interactions to automated notifications of things happening in the rendering model.

* How does an `Event` "bubble"? Can I make it stop?
  - Events bubble (propagate) upward/outward from the target <tag> through the parents up to the <html> level.
  - Bubbling can be stopped with event.stopPropagation()

* What does the `target` property of an `Event` refer to?
  - The deepest element which triggered the event is called the target or, the originating element.

* Besides `click`, what _other_ event types can I trigger with my mouse?
  - contextmenu - The right button of the mouse is clicked (before the context menu is displayed).
  - dblclick - A pointing device button is clicked twice on an element.
  - mousedown - A pointing device button (usually a mouse) is pressed on an element.
  - mouseenter - A pointing device is moved onto the element that has the listener attached.
  - mouseleave - A pointing device is moved off the element that has the listener attached.
  - mousemove - A pointing device is moved over an element.
  - mouseout - A pointing device is moved off the element that has the listener attached or off one of its children.
  - mouseover - A pointing device is moved onto the element that has the listener attached or onto one of its children.
  - mouseup - A pointing device button is released over an element.
  - show - A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute
  - dragEvents can also be triggered with a mouse
    - drag, dragdrop, dragend, dragenter, dragexit, draggesture, dragleave, dragover, dragstart, drop

* What types of events can be triggered on a `<form>` element?
 - reset - a form is rest
 - submit - a form is submitted

#####- click
- The click event is fired when a pointing device button (usually a mouse button) is pressed and released on a single element.
- applies to: any html element 
- example: 
```
var headers = document.querySelectorAll(".cbp-nttrigger");
headers[0].addEventListener('click', function(){
    console.log("clicky clicky");
  });
```

#####- scroll
- The scroll event is fired when the document view or an element has been scrolled.
- applies to: any html element
- example:
```
var headers = document.querySelectorAll(".cbp-nttrigger");
headers[0].addEventListener('scroll', function(){
    console.log("scrolling!");
  });
```

#####- change
- The change event is fired for `<input>`, `<select>`, and `<textarea>` elements when a change to the element's value is committed by the user. Unlike the input event, the change event is not necessarily fired for each change to an element's value.
- applies to: input, select, and textarea elements
- example:
```
var firstName = document.getElementById("first_name"); // gets the first name input box
var firstNameInput = "not provided"; //place holder for firs name value
firstName.addEventListener('change', function(){
    firstNameInput = firstName.value; //captures input of first name box
};
```

#####- submit
- The submit event is fired when a form is submitted.
- applies to: form elements only
- example:
```
document.getElementById("form").addEventListener("submit", function(){
  alert("form was submitted")
};
```

#####- load
- The load event is fired when a resource and its dependent resources have finished loading.
- applies to: any html element
- example:
```
document.addEventListener("load", function(){
  alert("page was loaded")
};
```

#####- unload
- The unload event is fired when the document or a child resource is being unloaded.
- applies to: any html element
- example:

--------
Next document some of the common event types that we'll encounter: `click`, `scroll`, `change`, `submit`, `load`, and `unload`. Not all HTML elements can listen to all events, so make special note of which HTML elements those event types apply to. Give an example of each in use, selecting an element from the document and attaching an event listener to it.

#### BEAST MODE

There are a bunch of keyboard-related events in the DOM specification, too. I bet they'll come in handy soon enough. Document those as well, and explain how I might listen to a _specific_ key combination. For example, how do I make JavaScript listen for _just_ an `Enter` key or maybe `Command` and `+` together?

