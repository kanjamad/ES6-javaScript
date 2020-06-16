/*Reduce we pass in an initial value. So initial value will take the place.
The second argument to reduce.
*/

let numbers = [ 10, 20, 30 ];
let sum = 0;

// loop
for (let i = 0; i < numbers.length; i++) {
	sum += numbers[i];
}

//reduce
numbers.reduce(function(sum, number) {
	return sum + number;
}, 0);

//So the initial value was that second argument that it passed to reduce.In this
//case I provided an initial value of zero.

/*
So in summary the really weird thing about Reduce is that we 'd pass in an initial value and then this initial value is sent our iterator function for every single run through it.

We are condensing down our entire collection of elements into a single value.In this
case sixty

We decide what the initial value is based on what we 're trying to do with this reduce function.

numbers.reduce(function (sum, number) {
    return sum + number;
}, -30);

numbers.reduce(function (sum, number) {
    return sum + number;
}, 1000);
*/

// ========================

//Example: So I want to take every object out of your hand I want to collect all the values off of each
var primaryColors = [ { color: 'red' }, { color: 'yellow' }, { color: 'blue' } ];

// ['red', 'yellow', 'blue']

//previous or accumulator or mem

primaryColors.reduce(function(previous, primaryColor) {
	previous.push(primaryColor.color);

	return previous;
}, []);

/*
Step One: => whenever we're using the reduce helper is we need to think about what that default or starting argument for that starting value. The second argument reduces. 
    So in the last example we start with zero because we were summing up a list of numbers and so it made sense to start with the number of 0 and then we can just add on each element each time.
*/

//This time around we want to end up with an array of strings.
//because our return value is going to be an array. I think that it makes a lot of sense to start off with an array
// The first argument is this object that keeps getting carried through whith kind of like return value that keeps on coming through every iteration
//  The second argument is the object in the array

// ======================
// What the purpose of reduce?
// => we use reduce to sum numbers
// Question? Are thses balanced parenthese?

// Example:Giving a string that contains some number of parentheses. Are the expresstion correctly balanced?
// "()()()"
// "(((())))"
// ")))"
// ")("

function balancedParens(string) {
	// turn string into array (because use method with array of data)
	// How we gonaa decide what our initial valus is? we will create a counter will be an integer number
	// Every time we see opening parenthese we will increment this counter by 1
	// Every time we see closing parenthese we will decrease this counter by 1
	//Then at the very end after our entire reduce runs if we have
	return !string.split('').reduce(function(previos, char) {
		if (previos < 0) {
			return previos;
		}
		if (char === '(') {
			return ++previos;
		}
		if (char === ')') {
			return --previos;
		}
		return previos;
	}, 0);
}

balancedParens('(((())))');
balancedParens(')(');
