$("nav a").click(function(data){  //wait for a click on the <a>'s in the <nav>
    //toggle the class  ("active") to the <a> that you clicked on and
    // removes all classes of any of the sibling <a>'s
  $(this).toggleClass("active").siblings().removeClass();
    // use the href attribute of "this" (the <a> you clicked on) to find
    // the <section> by "id"...toggle that class ("active") and remove the class
    // any sibling elements
  $($(this).attr("href")).toggleClass("active").siblings().removeClass();
});
