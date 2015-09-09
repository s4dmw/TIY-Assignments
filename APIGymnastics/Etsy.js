// Put `items.json` in your `APIGymnastics` directory...
var items = require('items.json');

<<<<<<< HEAD
=======
var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc
>>>>>>> master
// TODO: Setup mocha and chai...

test('this is the easy one', function(){
  expect(Array.isArray(items)).to.be.true; // What.
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray

<<<<<<< HEAD
  expect(items.length).to.equal(FILL_ME_IN); // It's haunting me now...
});

test('finding the average price', function(){
  var yourAnswer = "start with `items`; use `Array` methods";

  expect(yourAnswer).to.be.closeTo(23.63, 0.01);
});

=======
  expect(items.length).to.equal(25);
   // It's haunting me now...
 });

test('finding the average price', function(){
  var yourAnswer = "start with `items`; use `Array` methods";
  expect(avgPrice(items)).to.equal(23.63);
  expect(avgPrice(items)).to.be.closeTo(23.63, 0.01);
});

function avgPrice(items) {
  var totalPrice = 0; // starts the totalPrice sum out at 0
  for (count = 0; count < items.length; count ++) {
    //iterates through the items array and adds each price to totalPrice
    totalPrice = totalPrice + items[count].price;
  //  console.log(totalPrice); tracer bullet
  }
  var avgPrice = Math.round(totalPrice / items.length * 100)/100;
  //avg = total / # of entries - had to play with Math.round to get the decimal places right
  return avgPrice;
}

>>>>>>> master
test('finding that perfect $15 item', function(){
  /**
   * @param {Array} items to search through
   * @return {Array} of `items` with `price` between `min` and `max` USD
   */
<<<<<<< HEAD
  function pricedBetween(items, min, max){
    // Just a suggestion, really...
  }

  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    // Can you find their names _without_ code first?
=======
function pricedBetween(items, min, max){
  var itemList = []; // creates new, empty array
  for (count = 0; count < items.length; count ++) { //iterates through each element
    if (items[count].price >= min && items[count].price <= max ) {
      // looks at the price of each item, if the price falls between the min and max,
      // the "title" of that item is pushed to the itemList array
      itemList.push(items[count].title);
    }
  }
  return itemList;
}

  expect( pricedBetween(items, 14, 18) ).to.deep.equal([
    '1970s Coors Banquet Glass Beer Pitcher',
    '1970s Schlitz Malt Liquor Glass Beer Pitcher',
    'The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug',
    'Hand Painted Colorful Feather Glass',
    'Groomsman Gifts - Bottle Opener Credit Card Sized PERSONALIZED - FREE SHIPPING'
>>>>>>> master
  ]);
});

test('pond hopping', function(){
<<<<<<< HEAD
  expect( /* your answer */ ).to.deep.equal({
=======
  expect(currencyType("GBP")).to.deep.equal({
>>>>>>> master
    name: "1970s Schlitz Malt Liquor Glass Beer Pitcher",
    price: 18.00
  });
});

<<<<<<< HEAD
=======
function currencyType(type) { //returns list of items with specified currency type in
  // an object with name and price of items
  var itemList = []; //creates an empty array but it needs to be an object
  for (count = 0; count < items.length; count ++) { //iterates through each element
    if (items[count].currency_code === type){ //looks for currency type in each element
      // to match the function input paramater
      itemList.push(items[count].title); //if we have a match, the title is added to
      //the arrayl...which needs to be an object
    }
  }
  return itemList;
}


>>>>>>> master
test('just wood or _reclaimed_ wood?', function(){
  var actual = wooden(items); // Who defined `wooden`...? Oh.

  expect( actual ).to.deep.equal( /* an Array of String names... */ );
});

<<<<<<< HEAD
=======



>>>>>>> master
test('this is just SEO bait, I know it...', function(){
  var actual = octomatter(items); // Just one way to do it... Plus, "octomatter"!

  expect(actual).to.deep.equal(/* Look, I can't do _everything_ for you! */);
});

test('true craftsmen... women... people. Birds?', function(){
  expect(makerSellers(items)).to.equal(18);
});
<<<<<<< HEAD

//adding a comment to get the files to merge
=======
>>>>>>> master
