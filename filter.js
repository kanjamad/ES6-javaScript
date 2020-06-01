// Any time you want to do any type of filtering of a list.


// Example 1
let products = [{
        name: 'cucumber',
        type: 'vegetable'
    },
    {
        name: 'banana',
        type: 'fruit'
    },
    {
        name: 'celery',
        type: 'vegetable'
    },
    {
        name: 'orange',
        type: 'fruit'
    },
];

/*Maybe our users clicks a little checkbox and they say only show me fruit and of all the products we have.
I only want to see fruit.
*/


let filteredProducts = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
}

filteredProducts;



//================> ES6 filter <==================
products.filter(function (product) {
    // do not forget to put in your 
    // return statement in here
    return product.type === 'fruit';
});



/*
1. return statement
do not forget to put in your return statement.
So if for get will end up with an empty array because you're going to return undefined 
every single time from the iterator function.

2. so no need to use an IF statement to kind of produce a true or false value
*/



// Example 2
/*
I want to write a filter where I only keep items when a type is vegetable that quantity is greater than
zero and the price is less than 10.
 */


// Type is 'vegetable', quantity is greater than 0, price is less than 10

let products = [{
        name: 'cucumber',
        type: 'vegetable',
        quantity: 0,
        price: 1
    },
    {
        name: 'banana',
        type: 'fruit',
        quantity: 10,
        price: 15
    },
    {
        name: 'celery',
        type: 'vegetable',
        quantity: 30,
        price: 9
    },
    {
        name: 'orange',
        type: 'fruit',
        quantity: 3,
        price: 5
    },
];

//Type is 'vegetable', quantity is greater than 0, price is less than 10
products.filter(function (product) {
    // step 1 return
    return product.type === 'vegetable' && product.quantity > 0 && product.price < 10
});


// Example 3
let post = {
    id: 4,
    title: 'New Post'
};

let comments = [{
        postId: 4,
        content: 'awesome post'
    },
    {
        postId: 3,
        content: 'it was ok'
    },
    {
        postId: 4,
        content: 'neat'
    }
];