// console.log("tracer bullet") //making sure index.html is running main.js


// function to open/close h3 elements
// $("h3").on("click", function(){
//   console.log("h3 tracer bullet");
//   $("li").removeClass("closed");
// });

$("h3").click(function(){
  console.log("h3 click");
  $(this).toggleClass("closed");
});
