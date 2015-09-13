
// For this challenge, you'll focus on the JavaScript that would take a user's input and
// turn it into output. You need to find a way to capture input from the form. You then
// want to output that input to the console using console.log.
//
// This is a tough problem, so tackle it as a group, practicing breaking down baby steps.
// Youll need the Event reference on MDN to find the correct event to listen for and how to
// make it do your bidding (instead of its default behavior).
//
// When turning in this assignment, make sure you put your scripts.js code in the repo,
// but also put the result of the output as a comment in your WIP Issue. Just for good
// measure, drop a few of those comments and be sure to use code fences!
// -------------------------------------------------------------------------------------

// need to grab input from input boxes and selections from the drop down menus and
// print them to the console when the "send your data" button at the bottom is pushed.
//
// will start with getting it to work on one input field then refactor for the whole page.

// setup an even listener that grabs the input from the "first name" box and log it
// to the console.
var firstName = document.getElementById("first_name"); // gets the first name input box
var lastName = document.getElementById("last_name"); //gets the last name input box

//setup event listeners for the input boxex to grab text
firstName.addEventListener('change', function(){
  console.log("changed the first name");  //tracer bullet yo
  console.log(firstName.value); //tracer bullet...thank you Google
});

lastName.addEventListener('change', function(){
  console.log("changed the last name");  //tracer bullet yo
  console.log(lastName.value); //tracer bullet...thank you Google
});



// var submitButton = document.querySelector(".cbp-mc-submit");
//
// submitButton.addEventListener('click', function(){
//   console.log("clicking the submit button")
// });
