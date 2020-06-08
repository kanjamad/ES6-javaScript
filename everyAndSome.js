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