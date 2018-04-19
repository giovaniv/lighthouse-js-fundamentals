/*
April 18, 2018
Author: Giovani Raymundo de Vasconcelos
Write a program that prints the numbers from 100 to 200 to the console, with three exceptions:
If the number is a multiple of 3, print the string "Loopy" instead of the number.
If the number is a multiple of 4, print the string "Lighthouse" instead of the number.
If the number is a multiple of both 3 and 4, print the string "LoopyLighthouse" instead of the number.
By print, we are of course referring to console.log.
=======================================================
Refactor the code using a Function named loopyLighthouse considering that example below:
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);
Your loopyLighthouse function should log to the console all the numbers from 15 to 90,
except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples
of 2 and 5 with "BattyBeacon".
*/

// function to check if a number is multiple of another number
function isMultiple(num,mult) {
	if ( num % mult === 0 ) {
		return true;
	} else {
		return false;
	}
}

function loopyLighthouse(range, multiples, words) {
	
	if (range === null || multiples === null || words === null) {
		return undefined;
	}

	if (range.length !== 2 || multiples.length !== 2 || words.length !== 2) {
		return undefined;
	} else {

	for ( var i = range[0]; i <= range[1]; i++ ) {
		if ( isMultiple(i,multiples[0]) && isMultiple(i,multiples[1]) ) {
			console.log(words[0] + words[1]);
		}
		else if ( isMultiple(i,multiples[0]) ) {
			console.log(words[0]);
		}
		else if ( isMultiple(i,multiples[1]) ) {
			console.log(words[1]);
		}
		else { console.log(i); }
	}

	}
}

loopyLighthouse([1,10],[2,4],['par','porQuatro']);
