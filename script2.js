/*can make a second div for total to keep
at bottom stylistically if I'd like. Having trouble
with toFixed on  the  total with tax showing on webpage */
var apple = {
  name: "apple",
  price: 1
};
var orange = {
  name: "orange",
  price: 2
};
var banana = {
  name: "banana",
  price: 1
};
var coconut = {
  name: "coconut",
  price: 3
};

var groceryItems = [];

groceryItems.splice(0, 0, apple, orange, banana, coconut);

// groceryItems is currently [apple, orange, banana, coconut]

var total = 0;
var tax = 0;
groceryItems.forEach(function(x) {
  console.log("Name: " + x.name);
  console.log("Price: " + x.price);
  total += x.price;
  tax += x.price * 0.06;
});

  console.log(groceryItems);


console.log("Total: " + total);
console.log("Tax: " + tax);
console.log("Price with Tax: " + (total + tax));

//var createP = document.createElement('p');
var grabsContainer = document.getElementById('container');
// item.innerText = groceryItems[0].name + groceryItems[0].price;
// grabsContainer.appendChild(item);

//below is forEach attempt, but not working properly still

groceryItems.forEach(function(CurrentValue, index, array){
var createP = document.createElement('p');
createP.innerText = "item: " + groceryItems[index].name + "  ||  " + "price: " + groceryItems[index].price;
grabsContainer.appendChild(createP);
})

var createH2 = document.createElement('h2');
createH2.innerText = "Total with Tax: " + (total + tax);
grabsContainer.appendChild(createH2);

// done with a for loop for practice
//for(var i = 0; i < groceryItems.length; i++){
//   var createP = document.createElement('p');
//   createP.innerText = "item: " + groceryItems[i].name + "  ||  " + "price: " + groceryItems[i].price;
//   grabsContainer.appendChild(createP);
// }

/* using below to test onclick event
function add(){
  document.write("working");
}; */

function add(){
var fruitName =  document.getElementById("name").value;
var fruitPrice = Number(document.getElementById("price").value).toFixed(2);
var createP = document.createElement('p');
// var object = {
//   name: fruitName,
//   price: fruitPrice;
// };
//groceryItems.push(object);
grabsContainer.appendChild(createP);
createP.innerText = "item: " + fruitName + " || " + fruitPrice;
createH2.innerText = "Total with Tax: " + (total + tax + (fruitPrice * 1.06))
};
