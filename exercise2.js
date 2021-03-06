//Complete the following problems:
//Finished
/************************************************************* */
// Problem 1: Refactor the for() loop to be a while loop.
//

for(let i=0; i<10; i++) {
    console.log(" the value of i in the loop is : " + i);
}


//your code...
while(i < 10){
    console.log('the value of i is' + i);
    i ++;
}



/************************************************************* */
// Problem 2:
// multiply the sum of 30 added to two by 20.  Divide the product by 10 raised to the power of 2 use javascript to compute the value of the above statement. Each individual operation needs to be a function expression. run all the functions after defining them, and print the answer to the console.

function thirty() {
    var x = 30 + 2;
    x = x * 20;
    return x
};
function next(x){
    var x = x;
    x = x / (10 ** 2);
    console.log(x)
    return x
}
thirty()
next(x)


/************************************************************* */
//Problem 3:
//Determine whether the following values are "truthy" or "falsy".  console.log() the value, whether the value is 'truthy' or 'falsy', along with your reasoning why using String interpolation.
// values : 
// 20
// 0
// "zero";
// const zero = 20;
// null
// "0"
// !""
// {}
// () => {console.log("hello TEKcamp!");
// 125
// undefined
// ""

console.log(20 + 'is a truthy value because it is defined')
console.log(0 + 'is a truthy value because it is defined')
console.log("zero" + 'is a truthy value because it is defined')
console.log(zero + "is a truthy value because it is defined")
console.log(null + "is falsy because it is not defined")
console.log("0" + 'is a truthy value because it is defined')
console.log(!"" + 'is a falsy value because it is not defined')
console.log({} + 'is a falsy value because it is undefined')
console.log(() + 'is a falsy value because it is undefined')
console.log(125 + 'is a truthy value because it is defined')
console.log("undefined" + 'is a falsy value because it is undefined')
console.log("" + 'is a truthy value because it is undefined')

/************************************************************* */
// Problem 4:
// Refactor the following code using a switch statement:

const day = "friday";

if(day === "monday") {
    console.log("we got a long week ahead of us...");
} else if(day === "tuesday") {
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
} else if (day === "wednesday") {
    console.log("We are smack dab in the middle of the week");
} else if (day === "thursday") {
    console.log("Thursday night... the mood is right");
} else if (day === "friday") {
    console.log("TGIF.  Friday truly is the best day of the week!")
} else {
    console.log("It's a weekend!")
}

//code:

const day = "friday";
switch (day) {
case 0:
    day = "Monday"
    console.log("we got a long week ahead of us...");
    break;
case 1:
    day = "Tuesday"
    console.log("tuesday's are still beterr than mondays, but LONG way to go still");
    break;
case 2:
    day = "Wednesday"
    console.log("We are smack dab in the middle of the week");
    break;
case 3:
    day = "Thursday"
    console.log("Thursday night... the mood is right");

    break;
case 4:
    day = "Friday"
    console.log("TGIF.  Friday truly is the best day of the week!")

    break;
case 5:
    day = 'Saturday'
    console.log("It's a weekend!")
}

/************************************************************* */
// Problem 5: Refactor the following functions to use a ternary expression:
const age = 10;
if (age > 21) console.log("adult"); else {
    console.log("minor");
}

if (age > 13 && age < 19) console.log('teen'); else {
    console.log("not a teenager");
};

if (age > 65) console.log("retired"); else {
    console.log("still working...");
}
 //code:

 const age = 10;

 age > 21 ? console.log("adult")
 : console.log("not a teen")

 age > 13 && age < 19 ? console.log("teen")
 : console.log("not a teen")

 age > 65 ? console.log("retired")
 : console.log("still working")


/************************************************************* */
// Problem 6: Create an object literal that represents yourself.  set it to a variable that appropriately describes the object.  Include the following properties:
/*
-name
-age
-gender
-hobbies
-profession
-education

-add a method on your object, named learn. the learn method should print the value of the name property using the 'this' keyword.

-add another method on your object of any action you want to perform, using some property that exists on your object, making sure to utilize the 'this' keyword.
*/

//your code...
var person = {
    name: "Adam Rice",
    age: "25",
    gender: 'male',
    hobbies: ['walking dog', 'watching movies', 'playing games', 'golfing'],
    job: 'systems engineer',
    eduction: ['Rifle High School', "Baylor University", 'Coding Dojo', 'TEKCamp'],

    learn: function() {
        console.log(name)
    },
    schools: function(){
        for (var i in this.eduction){
            console.log(this.eduction[i])
        }
    }

    };

/************************************************************* */
// Problem 6: Create an object literal that represents any object in the real world that you like.  Try to come up with a realistic set of properties and methods that would accurately describe that object.  In at least one of your methods, use the this keyword to refer back to one of the properties you defined on this object literal.  

//your code...

var Copper = {
    name: 'Copper Rice',
    breed: "Lab Mix",
    toys: ['rings', 'ball', 'donut', 'tubes'],
    friends: ['whiskey', 'zuzu', 'willie', 'maya'],
    activities: ['sleep', 'eat', 'walk', 'run', 'play'],

    call: function() {
        console.log('bark bark bark')
    },

    pull_game: function() {
        console.log(this.toys[0] + this.friends[3])
    },
}


/************************************************************* */
//Problem 7: create a function that outputs your 3 favorite data types, with a message explaining why you like that data type.

//your code...

function data_types(){
    var one = 1;
    var two = "Adam Rice"
    var three = [1,2,3,4,5,6]
    console.log(one + two + three + 'integers, strings, and arrays are my favorite data types because they are the most likely to be seen in interview questions.  Arrays are also useful when pulling data from a database.')
    return one, two, three
}


/************************************************************* */
//Bonus assignments:

//1. Create a Higher Order Function called multiple(x) that takes a single parameter.  This HOF should return another function fn(y) that takes another single parameter y.  This inner function should compute the product of it's parameter with the parameter passed into multiple.  Use this returned "first-class" function to compute triples of any given number.

//your code...


// 2. Write an outer function called stockGain that has cost basis (basis) as a parameter; declare a variable called message that holds " is how much the stock has increased".  Return an inner function with years (yrs) as a parameter and declare a variable for growth rate (r) of 5%. Console log your calculation.

// Once finished, declare a variable called futureValue that holds your stockGain function and enter any amount for the cost basis and a number for the number of years.  Run the function returned by the higher order function to display the future value of the stock.  

//your code...


