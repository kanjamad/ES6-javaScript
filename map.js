// Write a loop iterates over a list of numbers doubles the value of each number in the array and then pushes that doubled number into a new array.
// The key; we're going to put each doubled the value into a new array.

let numbers = [1, 2, 3];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

doubledNumbers;


// ???
/* Why do I choose to make a new array for these double numbers?
=> In large complex javaScript applications. We want to avoid mutating or changing data wherever possible.
=> Avoid 
for(let i = 0; i< numbers.length; i++){
  numbers[i] = numbers[i] * 2;
}
=> The reason for that is that if I have my numbers array like kind of in this little snippet of code right here.But I'm also using that numbers right in some other snippet of code across on the other side of the application.
=> So wherever possible we want to avoid mutating an array in place instead we will
return a new array

*/

// map
// map is used whenever you want to modify records in some list of data.
// The key; using the map helper to create a breand new array. So we are not mutating the existing array.
// Each numbers in the array is being passed into the anonymous function that I'm passing in.
// Whatever this function returns is placed into a new array. 

let doubled = numbers.map(function (number) {
    // So alway to make sure that place the return keyword inside of map function
    // otherwise map will return null;
    return number * 2;
});

doubled;


// Example 1
let cars = [{
        model: 'Buick',
        price: 'CHEAP'
    },
    {
        model: 'Camaro',
        price: 'expensive'
    }

];

// One of the most common uses of map that we're going to be looking of collecting properties of an array of  object.
// So if I want to go iterate over cars array and I want to find the price of each car. 
// I just car about the different price that I have for all this object in this array.


let prices = cars.map(function (car) {
    return car.price
});

prices;


/*
where the map helper is used in practical programming? ? ?
* map is one of the most commonly used array helpers for Front End web development.
* Rendering lists of data.
* The primary goal was to essentially just render a list of data

=> To get some data to show on the screen to get the posts we might load some amount of data from our back end server would be maybe like an array of objects where each object represents a single post.
=> I want to take each object representing a post.
//I want to transform it in some fashion and produce some
//HTML to show on the screen.
//I could use the map helper for that to great effect.
// So when I map over the post array I'm not going to mutate the existing array.
//I 'm not going to change the post array.
//Instead for each friend update or for each post that I have all read the update.
//I 'll say  who made the post. What is the image what 's the content.
//And I can produce some amount of HTML to place on the screen for that individual post model.

*/



//Example 2
/*
Plucking Values
Using map, create a new array that contains the 'height' property of each object. Assign this new array to the variable 'heights'. Don't forget to use the 'return' keyword in the function.

*/
var images = [{
        height: '34px',
        width: '39px'
    },
    {
        height: '54px',
        width: '19px'
    },
    {
        height: '83px',
        width: '75px'
    },
];

var heights = images.map(function (image) {
    return image.height
});

heights;

// Example 3

/*
Calculating Values with Map
Using map, create a new array that contains the distance/time value from each trip. In other words, the new array should contain the (distance/time) value. Assign the result to the variable 'speeds'

 */

var trips = [{
        distance: 34,
        time: 10
    },
    {
        distance: 90,
        time: 50
    },
    {
        distance: 59,
        time: 25
    }
];

var speeds = trips.map(function (trip) {
    return trip.distance / trip.time;

});

speeds;

//  example 3.1
var trips = [{
        distance: 34,
        time: 10
    },
    {
        distance: 90,
        time: 50
    },
    {
        distance: 59,
        time: 25
    }
];

var speeds = trips.map(trip => trip.distance / trip.time);

speeds;