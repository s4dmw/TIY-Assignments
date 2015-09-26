// console.log("tracer bullet") //making sure index.html is running main.js


// open/close accordions with h3 headers
$("h3").click(function(){
  // console.log("h3 click");
  $(this).toggleClass("closed");
});

// open/close accordions with h4 headers
$("h4").click(function(){
  $(this).toggleClass("closed");
});

// open/close accordions with h2 headers
$("h2").click(function(){
  $(this).toggleClass("closed");
});
