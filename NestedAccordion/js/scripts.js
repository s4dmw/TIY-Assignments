// What does it do? - headers/sections accoridion down when clicked on
// What interactive elements exist? - the arrows
// How do you interact with them? - hovering over them or clicking on them
// What visual effects are produced by interacting? - arrows change
// How does it do it? addEventListener and dispatchEvent?
// What existing HTML elements are changed?
// What new HTML elements are created? li classes are changed
// What CSS styles are used to produce the effect? cbt-ntopen? cbp-nttrigger?
//
// need to somehow accoridion the h3's and h4's
// maybe addEventListener and dispatchEvent?
//
// also need to hightlight the icons in the top right corner when hovered over
//---------------------------------------------------------------------------


// What does it do?
// when i clicked
//    on a heading...
var heading = document.querySelector('.cbp-nttrigger');

function tracer() {
  console.log('tracer bullet!');
}

heading.addEventListener('click', tracer);
heading.addEventListener('click', function(){
  // the text below hides and shows.
  // Add the class "ntopen" (something) to some element
  console.log('another tracer bullet')
});
//
// the text below hides and shows.
// Add the class "ntopen" (something) to some element
