var apple = {
  name: "apple",
  price: 3
};
var orange = {
  name: "orange",
  price: 3
};
var banana = {
  name: "banana",
  price: 2
}
var grapes = {
  name: "grapes",
  price: 4
};

var groceries = [apple, orange, banana, grapes];
console.log(groceries);

//initial array has been created already

var grabList = document.getElementById('list');
var total = null;

// for loop that creates the grocery list user sees to start
for(i=0; i < groceries.length; i++){
  var listItem = document.createElement('li');
  listItem.innerText = "Item: " + groceries[i].name + "..." + "Price: " + groceries[i].price + "..." + "Tax: " + (parseFloat(groceries[i].price) *.06);
  grabList.appendChild(listItem);
  total += (parseFloat(groceries[i].price) * 1.06);
}

// displays the total the user sees to start

var grabTotal = document.getElementById('total');
var priceDisplayed = document.createElement('p');
priceDisplayed.innerText = "Total: " + total;
grabTotal.appendChild(priceDisplayed);

// onclick function
function add(){
  //making variables needed
  var fruitName = document.getElementById('fruit').value;
  var fruitPrice = parseFloat(document.getElementById('price').value);
  var fruitTax = fruitPrice * .06
  var fruitObject = {
    name: fruitName,
    price: fruitPrice
  };
  //creating list item
  var createsNewLi = document.createElement('li');
  createsNewLi.innerText = "Item: " + fruitName + "..." + "Price: " + fruitPrice + "..." + "Tax: " + fruitTax.toFixed(2);
  grabList.appendChild(createsNewLi);

//pushing new item into the array named "groceries"
groceries.push(fruitObject);
console.log(groceries);
//adding new price to total
total += (fruitPrice * 1.06);
//Overrides current innerText
priceDisplayed.innerText = "Total: " + total.toFixed(2);
}
