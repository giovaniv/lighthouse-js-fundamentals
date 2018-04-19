/*
April 18, 2018
Author: Giovani Raymundo de Vasconcelos
Write a program that prints the numbers from 100 to 200 to the console, with three exceptions:
If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are of course referring to console.log.
*/

// function to check if a number is multiple of another number
function isMultiple(num,mult) {
	if ( num % mult === 0 ) {
		return true;
	} else {
		return false;
	}
}

for ( var i = 100; i <= 200; i++ ) {
	if ( isMultiple(i,3) && isMultiple(i,4) ) {
		console.log("LoopyLighthouse");
	}
	else if ( isMultiple(i,3) ) {
		console.log("Loopy");
	}
	else if ( isMultiple(i,4) ) {
		console.log("Lighthouse");
	}
	else {
		console.log(i);
	}
}