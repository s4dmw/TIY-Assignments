// What does it do? switches view layouts for the page
// What interactive elements exist? view mode selection, the bottle outlines, add to cart
// buttons
// How do you interact with them? by clicking on them
// What visual effects are produced by interacting? the view changes from a grid to a list
// How does it do it? event listeners?
// What existing HTML elements are changed? the link classes are changed
// What new HTML elements are created?
// What CSS styles are used to produce the effect?
//
//
// change the layout of the page when the selction is clicked on
//
// add item to cart when button is clicked
//-----------------------------------------------------------------------------------------

  // jQuery function to switch to the list view
$(".cbp-vm-list").on("click", function() {
  // console.log("list button tracer bullet"); //tracer bullet
      // remove class "cbp-vm-selected"  from element with class "cbp-vm-grid"
  $(".cbp-vm-grid").removeClass("cbp-vm-selected");
    // add class "cbp-vm-selected" to element with class "cbp-vm-list"
  $(".cbp-vm-list").addClass("cbp-vm-selected");
    // remove class "cbp-vm-view-grid" and add class "cbp-vm-view-list" to element with "cbp-vm-switcher" class
  $(".cbp-vm-switcher").removeClass("cbp-vm-view-grid");
  $(".cbp-vm-switcher").addClass("cbp-vm-view-list");
});


// JQuery function to swith to the grid view
$(".cbp-vm-grid").on("click", function() {
  // console.log("grid button tracer bullet"); //tracer bullet
    //remove class "cbp-vm-selected" from element with "cbp-vm-list" class
  $(".cbp-vm-list").removeClass("cbp-vm-selected");
    //add class "cbp-vm-selected" to elemt with "cbp-vm-grid" class
  $(".cbp-vm-grid").addClass("cbp-vm-selected");
    //remove class "cbp-vm-view-list" and add class "cbp-vm-view-grid" to element with "cbp-vm-switcher" class
  $(".cbp-vm-switcher").removeClass("cbp-vm-view-list");
  $(".cbp-vm-switcher").addClass("cbp-vm-view-grid");
});



// // Vanilla javaScript below:
//
// var listButton = document.querySelector(".cbp-vm-list"); //grabs the first/only element with
//   // the class 'cbp-vm-list'
// var gridButton = document.querySelector(".cbp-vm-grid"); // grabs the first/only element with
//   // the cliass 'cbp-vm-grid'
// var switchDiv = document.querySelector(".cbp-vm-switcher"); // grabs the first/only element with
//   // the class 'cbp-vm-switcher'


// creating an event listener for 'click' on the list button
// listButton.addEventListener('click', function(){
//   // console.log("click list button"); //tracer to check for clicks on the list button
//    listButton.classList.add("cbp-vm-selected");
//       //add class of "cbp-vm-selected" to the listButton when that button is clicked
//    gridButton.classList.remove("cbp-vm-selected");
//       //remove the "cbp-vm-selected" class from the gridButton when list button is clicked
//    switchDiv.classList.remove("cbp-vm-view-grid");
//       //remove the "cbp-vm-view-grid" class from the "swticher" when list button is clicked
//    switchDiv.classList.add("cbp-vm-view-list");
//       //add the "cbp-vm-view-list" to the "switcher" when list button is clicked
// });

// gridButton.addEventListener('click', function(){
//   // console.log("click grid button"); // tracer to check for clicks on the grid button
//   gridButton.classList.add("cbp-vm-selected");
//     //add class of "cbp-vm-selected" to the gridButton when that button is clicked
//   listButton.classList.remove("cbp-vm-selected");
//     //remove the "cbp-vm-selected" class from the listButton when grid button is clicked
//   switchDiv.classList.remove("cbp-vm-view-list");
//     //remove the "cbp-vm-view-list" class from the "swticher" when grid button is clicked
//   switchDiv.classList.add("cbp-vm-view-grid");
//     //add the "cbp-vm-view-grid" to the "switcher" when grid button is clicked
// });
