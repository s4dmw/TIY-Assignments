var items = require('items.json');

console.log(Array.isArray(items));
console.log(items.length);
//console.log(items[0].title + " : " + items[0].price);

//var newList = [];
//for (count = 0; count < items.length; count ++) {
//  if (items[count].price >= 14 && items[count].price <= 18 ) {
//    newList.push(items[count].title);
//  }
//}

///console.log(newList);

function currencyType(type) { //returns list of items with specified currency type in
  // an object with name and price of items
  var itemList = []; //creates an empty object
  for (count = 0; count < items.length; count ++) { //iterates through each element
    if (items[count].currency_code === type){
      itemList.push(items[count].title);
    }
  }
  return itemList;
}

console.log(currencyType("GBP"));
