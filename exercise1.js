//Complete the following problems: 

// Problem 1:
// Part 1: Write a JavaScript function that converts the current temperature from Fahrenheit to Celsius. Declare a variable for the current temperature then store the Celsius temperature into a variable. Console log the variable.

// Part 2: Write another funciton that converts the Celsius temperature back to Fahrenheit. 

//your code...

function Temp(temp){
    var new_temp = 0;
    new_temp = (temp * 9/5) + 32;
    console.log(new_temp);
}
function Temp2(temp){
    var old_temp = 0;
    old_temp = (temp - 32) * 5/9;
    console.log(old_temp);
}




/************************************************************* */
// Problem 2:
// Write a JavaScript function to determine if someone is old enough to vote. Declare a variable for age and write a conditional statement for whether that age is old enough to vote. Console log "yes" or "no"

//your code...

function canVote(age){
    var age = age;
    if(age >= 18){
        console.log("yes")
    }
    else{
        console.log("nope")
    }
    }





/************************************************************* */
// Problem 3:
// Write a JavaScript function that converts a string to an array. Declare a string variable with "The five boxing wizards jump quickly." Use the split() method to turn the string into an array of strings. (Be sure you separate the string into words, not characters.) After you have finished, use the join() method to change the array back into a string.
//your code...
-
function to_array(words){
    var words = words;
    var words = words.split(' ');
    console.log(words);
    words = words.join(' ');
    console.log(words)
}






/************************************************************* */
// Problem 4:
// Write a JavaScript function with a function that reverses your telephone number. Use the split() and join() methods from the previous problem as well as the toString() method to convert a number into a string and reverse() method to reverse an array in place.

//your code...

function backPhone(number){
    var num = number;
    num = num.toString();
    num = num.split('');
    num = num.reverse();
    num = num.toString('');
    num = num.toInt();
    console.log(num);
}



/************************************************************* */
// Problem 5:
// Write a JavaScript function creates a car object using information about your car. Include the make, model, year, and color. Write a function to get the year, color, make, and model in that order.

//your code...
class Car {
    constructor(make, model, year, color) {
      this.carMake = make;
      this.carModel = model;
      this.carYear = year;
      this.carColor = color;

    function info(){
        console.log(this.carYear, this.carColor, this.carMake, this.carModel)
    }
  }
}





/************************************************************* */
// Problem 6:
// Write a JavaScript function with a loop that will iterate from 0 to 15. Each iteration, the for loop will check if the current number is odd or even and display the output.

function printNumbers(){
    for(var i = 0; i <= 15; i++){
        if(i % 2 == 0){
            console.log("Even")
        }
        else{
            console.log('odd')
        }
        }
    }




/************************************************************* */
// Problem 7:
// Write a JavaScript function that iterates the integers from 1 to 100. For multiples of 3 print "TEK" instead of the number and for multiples of 5, print "camp." For numbers that are multiples of both 3 and 5, print "TEKcamp."

for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("TEKCamp");
    else if (i % 3 == 0) console.log("TEK");
    else if (i % 5 == 0) console.log("Camp");
}


/************************************************************* */
// Problem 8:
const nums = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
// Write a "for" loop that console.log()'s the first value in the nums array, and every 3rd number, i.e. 0, 3, 6, and 9: the zeroth, third, sixth, and ninth values.

function work(nums){
    for(var i = 0; i < nums.length; i++){
        if(i == 0 || i % 3 == 0){
            console.log(i)
        }
    }
}



// Problem 9:
const foodArray = [ 'potatoes', 'tamales', 'lemon','strawberries','chocolate', 'pudding', {school : 'TEKcamp'} ];
//access the value of the last element of the array and set it to a variable called school.  print the school variable to the console.

const adjectiveArray = [ 'salty', 'spicy', 'sour', 'sweet', 'rich','creamy','amazing'];
// Using both foodArray and adjectiveArray, make a
// "for" loop that console.log()'s a sentence for each
// corresponding value in the arrays. Add the word "is" or "are" depending on if the food is singular or plural.  "Potatoes are salty", "Lemon is sour".

/************************************************************* */
function Work_2(foodArray, adjectiveArray){
    var school = foodArray[foodArray.length - 1];
    console.log(school);
    for(var i = 0; i < foodArray.length; i++){
        console.log(foodArray[i] + 'are/is' + adjectiveArray[i])
    }
}

// Bonus Assignment: Create 4 mathematical function expressions, add,subtract,multiply,divide.  put them in an array, and create a doMath() function that randomly does one of the 4 operations whenever it is run.  the doMath() function should print out what mathetmatical function was carried out.  The doMath() function should return the computed value of any operation performed.
const operations = [add(), subtract(), multiply(), divide()]

function add(a,b){
    console.log( a + b);
}
function subtract(a,b){
    console.log(a - b)
}
function multiply(a,b){
    console.log(a * b)
}
function divide(a,b){
    console.log(a / b)
}
function doMath(Operational, a, b) {
    var a = a;
    var b = b;
    var which_function = Math.floor((Math.random() * 3) + 1);
    var x = Operational[which_function];
    console.log(which_function)
    return x(a,b);
};

