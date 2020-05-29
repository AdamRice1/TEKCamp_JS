//Complete the following problems: 

/************************************************************* */
//These problems were worded poorly.
// Problem 1:
// Write a JavaScript function that determines whether a string is empty. If the string is empty, the output should be true, otherwise it should return false. 



//your code...
function stringLength(string){
    var x = string;
    if(x.length >= 1){
        return true;
    } 
    else
        return false
};




/************************************************************* */

// Problem 2:
// Declare a variable that holds a string (e.g., ‘Learning JavaScript is fun!’). Replace a word so that the output uses the new word instead (e.g., ‘Learning JavaScript is cool!). 



//your code...
    function replaceWord(){
        var sentence = "Learning JS is fun!";
        sentence = sentence.split(' ');
        sentence[sentence.length -1] = 'cool!';
        sentence = sentence.join(' ');
        return sentence
    }


/************************************************************* */
// Problem 3:
// Write a function that declares an array of numbers from one to five and returns another array with the squared value of each number from the first array. Use an arrow function and one of the built-in array methods. 



//your code...

square = () => {
    var arr = [1,2,3,4,5];
    for(var i in arr){
        arr[i] = (arr[i] ** arr[i]);
    };
    return arr
}




/************************************************************* */
// Problem 4:
// Now declare another array of numbers that has the following numbers: 1, 3, 5, 7, 9, 1, 3, 5. Write a JavaScript program that returns an array of the numbers that are greater than 3. Use an arrow function and one of the built-in array methods.



//your code...

greaterThenThree = () => {
    var arr = [1,3,5,7,9,1,3,5];
    for(var i in arr){
        if(arr[i] > 3){
            arr.splice(i, 1);
        };
    };
    return arr
}




/************************************************************* */
// Problem 5:
// Now declare another array of numbers that has any 5 numbers. Write a JavaScript program that returns the sum of those numbers. Use an arrow function and one of the built-in array methods. 



//your code...

sumUp = () => {
    var arr = [1,2,3,4,5];
    var sum = 0;
    for(var i in arr){
        sum = sum + arr[i];
    };
}




/************************************************************* */
// Problem 6:
// DNA is made up of base pairs where every G is paired with a C and every T is paired with an A. 

// Write a function that takes in a DNA string as a parameter and returns an array with the complementary strand. For example, a string of "GCTA" would return an array of ["C", "G", "A", "T"].  



//your code...

function toArray(string){
    var dna = string;
    dna = dna.split("");
    return dna
}




/************************************************************* */
// Problem 7:

// 7.a - Write a function to find the maximum numerical value of the given array.  Get rid of any non numerical values.  Convert the strings that are numbers to an actual number data type.  ("one" => 1) ("1" => 1).  Use array methods to perform this task.  
const numbers = [2,23,1,2,1,1,1,2,2.5,20,200,2000,,{k:1},20000,19999,1878,140,23,4,"sk",true,true,"true-dat","nice","one","two","three","3","tea",[]];

function maxNumber(numbers) {
    var arr = numbers;
    var max = arr[0];
    var one = 'one'
    var two = 'two'
    var three = 'three'
    var three_1 = "3"
    for(var i in arr){
        if(arr[i] == one){
            arr[i] = 1;
        };
        if(arr[i] == two){
            arr[i] = 2;
        };
        if(arr[i] == three){
            arr[i] = 3;
        };
        if(arr[i] == three_1){
            arr[i] = 3;
        };
        if(typeof(arr[i] != 'number')){
            splice(arr[i])
        }
        if(arr[i] > max){
            max = arr[i]
        };
    }
    return max, arr
}

// 7.b -Write a function that sorts the given numbers array.  Allow the function to sort the array in descending order

function sortNums(numbers,desc=false) {
    numbers.sort()
    return numbers
};




/************************************************************* */
// Problem 8:
//add an example of at least 5 JavaScript data types to the given mapObj.  The key is the example data type, and the value is the name of the data type.  An object data type has already been set as the 1st key / val pair.

const mapObj = new Map();
mapObj.set({company : "TEKsystems"}, {object : person = {first_name: "adam", last_name: 'rice'}}, {integer: "5"}, {string: "hello"}, {array: [1,2,3,4,5,6]}, {boolean: true}) ;

console.log(mapObj.has({company : "TEKsystems"}));  
console.log("this prints false because the map object is being set incorrectly. The .has function is also incorrectly used.")
//The above console.log() statement returns false.  Write another console.log() statement explaining why this line of code prints false.  Refactor the code on line 106, so you can successfully check to see if {company : "TEKsystems"} exists in the mapObj.

var mapObj = new Map();
mapObj.set('company', 'TEKsystems');
mapObj.set('object', person = {first_name: "adam", last_name: 'rice'});
mapObj.set('integer', 5);
mapObj.set('string', 'hello');
mapObj.set('array', [1,2,3,4,5,6]);
mapObj.set('boolean', true);

console.log(mapObj)
console.log(mapObj.has('company' , "TEKsystems")); 

//loop through the mapObj and create a new array of only the data types, leaving out the example keys of the mapObj.  Use array methods to do this.  Example output : ['string',number','boolean',array','object']
function hello(mapObj){
    var new_arr = []
  for (const [key, value] of mapObj.entries()) {
    console.log(new_arr)
    new_arr.push(value)
  }
  return new_arr
  }
  hello(mapObj)

/************************************************************* */
//Problem 11:

let ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
//reverse the array, without modifying the ones array.

function reverse(){
    var ones = [1,11,111,1111,11111,111111,1111111,11111111,111111111,1111111111];
  
    var twos = ones
    twos.reverse()
    return twos
  }

/************************************************************* */
//Problem 12:
//create a function called performer(cb) that takes in a callback function and runs that callback function.  It should return the output of the callback function.

function greeting(name) {
    console.log('Hello My Name is' +" "+ name)
  }
  
  function preformer(cb, name) {
    var name = name;
    cb(name);
  }
  
  preformer(greeting, 'Adam')


/************************************************************* */
//Bonus assignment:
//research a new feature of ES6+ and create an example of it's use case here.  Be sure to write comments explaining what the feature is and why it is useful.
class Dog {
    constructor(breed, name) {
      this.owner = 'Adam';
      this.breed = breed;
      this.name = name;
    }
    sayName() {
     console.log("Bark Bark Bark" + this.name)
    }
  
    sayOwner() {
      console.log("I am owned by" + this.owner)
    }
    sayBreed(){
      console.log("I am a" + this.breed)
    }
  }
  
  dog1 = new Dog('lab', 'copper')
  
  console.log(dog1.owner)