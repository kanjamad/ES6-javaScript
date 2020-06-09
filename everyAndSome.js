//Now for this for loop there we're going to make we're kind of going to we're going to imagine for a second that perhaps we want to run a program on each of these computers that requires at least 16 gigabytes of RAM to be installed.


let computers = [{
        name: 'Apple',
        ram: 24
    },
    {
        name: 'Compad',
        ram: 4
    },
    {
        name: 'Acer',
        ram: 32
    }
];


// we don't want to know you know maybe I don't want to know exactly which computers can run the program.
//I just want to know do I have any computers that can run the program.


let allComputersCanRunProgram = true;
let onlySomeCopmutersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
    let computer = computers[i];

    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeCopmutersCanRunProgram = true;
    }
}

allComputersCanRunProgram;
onlySomeCopmutersCanRunProgram;



// ES6 every
//Whenever you're using any of these helpers you always need to make sure that you're using the return keyword

computers.every(function (computer) {
    return computer.ram > 16;
});


/* every and some

Now the difference between every and some 

* Every we look at all the values that get returned and we kind of imagine that there is AND operator between each one 

* Some there is an OR operator between any value.

-- some ---
So with some we 're seeing do any records in this array satisfy this criteria.
Do any records have greater than 16 gigabytes of RAM?
*/

computers.some(function (computer) {
    return computer.ram > 16;
})
//Again do not forget to put this return key word in here.

// ==================================

/* Example: 
I want to write a helper using every or some. 
And I just want to find all of the names in this array with a length of greater than four.
So at least four characters
*/

let names = [
    'Alexandria',
    'Matthew',
    'Joe'
];


names.every(function (name) {
    return name.length > 4;
})

/*So does every name have a length rather than four.

And so we can very clearly see not  everyone has greater than four Joe three characters

and so we get what I would expect to see which is a value of false.
*/




// some
// Does it lead to one of these names have a length greater than four.

names.some(name => name.length > 4);
// ==================================


// Why in the world would I ever use every Or some.
/*
=>
So let's look at a practical example of this.

Let's imagine for a moment that we are building a log in or a sign up form for an application.

So like for form you probably have like a username and password input.

Now when the user submits the form when they actually click OK log me in or sign me up or whenever that

button might say before we actually submit that form to the server and try to sign the user in or sign

them up or whatever it might be.

Chances are we're going to want to validate the inputs and make sure that the user like you know actually

type something in.

We want make sure they actually put something in and if they did not then perhaps we need to say you

know show an error message to the user or deny them the ability to log in or whatever it might be.

Base it would just want to make sure they put in some information.
*/

function Field(value) {
    this.value = value;
}

Field.prototype.validate = function () {
    return this.value.length > 0;
}

let username = new Field("2cool");
let password = new Field("my_password");
let birthdate = new Field("10/10/2010");

//username.validate() && password.validate() && birthday.validate();

let fields = [username, password, birthdate];

let formIsValid = fields.every(function (field) {
    return field.validate();
});

if (formIsValid) {
    // allow user to submit
} else {
    // show an error message
}

//Example : Finding Submitted Users
// Given an array of users, return 'true' if every user has submitted a request form. Assign the result to the variable 'hasSumbmitted'

var users = [{
        id: 21,
        hasSubmitted: true
    },
    {
        id: 62,
        hasSubmitted: false
    },
    {
        id: 4,
        hasSubmitted: true
    }
];

var hasSubmitted = users.every(user => user.hasSubmitted === true)


hasSubmitted;


//Example: InProgress Network Requests
// Given an array of network object representing network requests, assign the boolean 'true' to the variable 'inProgress' if any network request has a 'status' of 'pending'

var requests = [{
        url: '/photos',
        status: 'complete'
    },
    {
        url: '/albums',
        status: 'pending'
    },
    {
        url: '/users',
        status: 'failed'
    }
];

var inProgress = requests.some(request => request.status === 'pending')

inProgress;