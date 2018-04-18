var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("\n==== while =====");
var i = 0;
while (i < ingredients.length) {
	console.log(ingredients[i]);
	i++;
}

console.log("\n===== for =====");
// Write a for loop that prints out the contents of ingredients:
for ( i = 0; i < ingredients.length; i++ ) {
	console.log(ingredients[i]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\n===== backwards for =====");
for ( i = ingredients.length - 1; i >= 0; i-- ) {
	console.log(ingredients[i]);
}