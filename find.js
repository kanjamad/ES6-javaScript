/*
- find helper's purpose is to search through an array 
- and look for a particular element in the array.
- As soon as the record is found with the given criteria the help will help or will
return that record.
*/

//  I want to walk through aaray and find the user with the name Alex.
let users = [
	{
		name: 'Jill'
	},
	{
		name: 'Alex'
	},
	{
		name: 'Bill'
	}
];

let user;

for (let i = 0; i < users.length; i++) {
	if (users[i].name === 'Alex') {
		user = users[i];
	}
}

user;

// ES6
// The find helper will iterate through the array until it finds the first element that returns true
let users = [
	{
		name: 'Jill'
	},
	{
		name: 'Alex'
	},
	{
		name: 'Bill'
	}
];

users.find(function(user) {
	// don't forget return statement
	return user.name === 'Alex';
});

// Example
// So now my car's array has three car objects each of which has a property This model equal to Buick Camaro and focus.
// ??So I want to iterate through this array and find the car with a property of focus in particular.

function car(model) {
	this.model = model;
}

var cars = [ new car('Buick'), new car('Camaro'), new car('Focus') ];

cars.find(function(car) {
	return car.model === 'Focus';
});

// Example

let posts = [ { id: 1, title: 'New Post' }, { id: 2, title: 'Old Post' } ];

let comment = { postId: 1, content: 'Great Post' };

function postForComment(posts, comment) {
	return posts.find(function(post) {
		return post.id === comment.postId;
	});
}

postForComment(posts, comment);

// what resource you want to show on the screen at any given time.

const posts = [
	{ id: 1, title: 'Post title' },
	{ id: 2, title: 'Post title' },
	{ id: 3, title: 'Post title' },
	{ id: 4, title: 'Post title' },
	{ id: 5, title: 'Post title' },
	{ id: 6, title: 'Post title' }
];

const postId = getIdFromURL();

posts.find((post) => post.id === postId);
