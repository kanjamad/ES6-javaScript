//ES5
let colors = ['red', 'blue', 'green']

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}


//ES6
colors.forEach(function (color) {
    console.log(color)
});



//========> Example 1

// Create an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
let sum = 0;

// Loop over the array, incrementing the sum variable
numbers.forEach(function (number) {
    sum += number;
});

// print the sum variable
sum;


//========> Example 1.1

// Create an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
let sum = 0;

function adder(number) {
    sum += number;
}
// Loop over the array, incrementing the sum variable
// I am not doing something like  numbers.forEach(adder())  adder()then parentheses after it.
// So if I do this right here the result is going to be I'm going to immediately call adder and then pass the result to forEach 
numbers.forEach(adder);

// print the sum variable
sum;




/*
Why  use forEach?

In short whenever you want to call some method multiple times passing in a different argument each time consider using that forEach helper.


*/



// Example 2

function handlePosts() {
    var posts = [{
            id: 23,
            title: 'Daily JS News'
        },
        {
            id: 52,
            title: 'Code Refactor City'
        },
        {
            id: 105,
            title: 'The Brightest Ruby'
        }
    ];


    /*
    // ES5
    for (var i = 0; i < posts.length; i++) {
        savePost(posts[i]);
    }
    */


    posts.forEach(function (post) {
        savePost(post)
    });
}


// =====> Example 3
var images = [{
        height: 10,
        width: 30
    },
    {
        height: 20,
        width: 90
    },
    {
        height: 54,
        width: 32
    }
];
var areas = [];

images.forEach(function (image) {
    areas.push((image.height * image.width))
});



// =====> Example 3.1
var images = [{
        height: 10,
        width: 30
    },
    {
        height: 20,
        width: 90
    },
    {
        height: 54,
        width: 32
    }
];
var areas = [];

function cal(image) {
    areas.push((image.height * image.width));
}

images.forEach(cal);