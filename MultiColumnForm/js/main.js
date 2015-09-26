
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
// var firstName = document.getElementById("first_name"); // gets the first name input box
// var lastName = document.getElementById("last_name"); //gets the last name input box
// var email = document.getElementById("email"); //gets the email input box
// var country = document.getElementById("country"); //yep...gets the counrty input box
// var bio = document.getElementById("bio");//i'm seeing a pattern here
// var phone = document.getElementById("phone"); //gets phone number input box
// var affiliations = document.getElementById("affiliations"); //affiliations input box
// var occupation = document.getElementById("occupation"); //occupation selection box
// var catName = document.getElementById("cat_name"); //cat name input box
// var gadget = document.getElementById("gagdet"); //favorite gadget input box
//   //html code has an annoying typo...gadget box label, gagdet element id...lamo
// var talent = document.getElementById("talent"); //type of talent selction box
// var drink = document.getElementById("drink"); //favorite drink input box
// var power = document.getElementById("power"); //special power input box
// var weapon = document.getElementById("weapon"); //weapon of choice input box
// var comments = document.getElementById("comments"); //comments input box
// var submitButton = document.getElementById(".cbp-mc-submit"); //and last but not least...submit

//this pattern seems to be working but i want dump the inputs to the console when
//i click submit, not after each input -- my evil plan is to write the value of each
//input to a variable when that box/selection is changed. when the submit button is clicked
//i'll console.log all of the input and try to make it look pretty

//variables to capture the input of each field.
//i'll make them default to "no input given" or something similiar
var firstNameInput = "not provided"; //place holder for firs name value
var lastNameInput = "not provided";
var emailInput = "not provided";
var countryInput = "not selected"; //altered this one since its a selection vs inputs
var bioInput = "not provided";
var phoneInput = "not provided";
var affiliationsInput = "not provided";
var occupationInput = "not selected";
var catNameInput = "not provided";
var gadgetInput = "not provided";
var talentInput = "not selected";
var drinkInput = "not provided";
var powerInput = "not provided";
var weaponInput = "not provided";
var commentsInput = "not provided";



$("input[name='first_name']").change(function(){
  // console.log("first name tracer bullet");
  firstNameInput = this.value; //captures input of first name box
  // console.log(firstNameInput); //tracer
});

$("button[name='submit']").click(function(){
  event.preventDefault();

  console.log("First Name: ", firstNameInput);
  console.log("Last Name: ", lastNameInput);
  console.log("Email Address: ", emailInput);
  console.log("Country: ", countryInput);
  console.log("Biography: ", bioInput);
  console.log("Phone Number: ", phoneInput);
  console.log("Affiliations: ", affiliationsInput);
  console.log("Occupation: ", occupationInput);
  console.log("Cat's Name: ", catNameInput);
  console.log("Favorite Gadget: ", gadgetInput);
  console.log("Type of Talent: ", talentInput);
  console.log("Favorite Drink: ", drinkInput);
  console.log("Special Power: ", powerInput);
  console.log("Weapon of Choice: ", weaponInput);
  console.log("Comments: ", commentsInput);
});

// //setup event listeners for the input boxes to grab the inputs
// firstName.addEventListener('change', function(){
//   //console.log("changed the first name");  //tracer bullet, yo!
//   //console.log("first name: ",firstName.value); //tracer bullet...thank you Google
//   firstNameInput = firstName.value; //captures input of first name box
//   //console.log("tracer", firstNameInput); //tracer bullet
// });

// lastName.addEventListener('change', function(){
//   //console.log("changed the last name");  //tracer bullet
//   //console.log("last name: ",lastName.value); //tracer bullet
//   lastNameInput = lastName.value; //captures input of last name box
// });

// email.addEventListener('change', function(){
//   // console.log("changed the email box"); // pew pew
//   // console.log("email address: ",email.value); //more tracers
//   emailInput = email.value; //captures email address
// });

// country.addEventListener('change', function(){
//   //console.log("selected the country"); //tracers
//   //console.log("country: ", country.value); //and traers
//   countryInput = country.value; //captures country selction
// })

// bio.addEventListener('change', function(){
//   //console.log("changed the bio box"); //more tracers
//   //console.log("biography: ", bio.value); //and even more tracers
//   bioInput = bio.value //captures biography input
// });

// phone.addEventListener('change', function(){
//   phoneInput = phone.value; // captures the phone number input
// });

// affiliations.addEventListener('change', function(){
//   affiliationsInput = affiliations.value; // captures the affiliations input
// });

// occupation.addEventListener('change', function(){
//   occupationInput = occupation.value; //captures the occupation selection
// });

// catName.addEventListener('change', function(){
//   catNameInput = catName.value; //captures the cat name selection
// });

// gadget.addEventListener('change', function(){
//   gadgetInput = gadget.value; //captures the favorie gadget input
//  });

// talent.addEventListener('change', function(){
//   talentInput = talent.value; //captures the talent selection
// });

// drink.addEventListener('change', function(){
//   drinkInput = drink.value; //captures favorite drink input
// });

// power.addEventListener('change', function(){
//   powerInput = power.value; //captures special power input
// });

// weapon.addEventListener('change', function(){
//   weaponInput = weapon.value; //captures weapon of choice input
// });

// comments.addEventListener('change', function(){
//   commentsInput = comments.value; //catpures the comment box input
// });

// need to creat an eventlister for clicking the send your data button that
// logs all of the inputs to the console
// submitButton.addEventListener('click', function(){
//   //console.log("clicking the submit button") // tracer bullet for clicking submit
//   //console.log(firstNameInput); //testing
//   //console.log(firstName.value);//moar testing
//     //the following lines print the input to the console when the submit button is clicked
//   console.log("First Name: ", firstNameInput);
//   console.log("Last Name: ", lastNameInput);
//   console.log("Email Address: ", emailInput);
//   console.log("Country: ", countryInput);
//   console.log("Biography: ", bioInput);
//   console.log("Phone Number: ", phoneInput);
//   console.log("Affiliations: ", affiliationsInput);
//   console.log("Occupation: ", occupationInput);
//   console.log("Cat's Name: ", catNameInput);
//   console.log("Favorite Gadget: ", gadgetInput);
//   console.log("Type of Talent: ", talentInput);
//   console.log("Favorite Drink: ", drinkInput);
//   console.log("Special Power: ", powerInput);
//   console.log("Weapon of Choice: ", weaponInput);
//   console.log("Comments: ", commentsInput);
// });
