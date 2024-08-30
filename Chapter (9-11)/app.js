// 1
var city = prompt('Please enter the name of your city:');

       
        if (city === 'Karachi', 'karachi') {
            alert('Welcome to the city of lights');
        }

// 2
var gender = prompt('Please enter your gender')

       
        if (gender === 'male') {
            alert('Good Morning Sir.');
        } else if (gender === 'female') {
            alert('Good Morning Ma\'am.');
        } 

// 3
var signalColor = prompt('Enter traffic signal color')

       
        if (signalColor === 'Red') {
            alert('Must Stop');
        } else if (signalColor === 'Yellow') {
            alert('Ready to Move');
        } else if (signalColor === 'Green') {
            alert('Move Now');
        }

// 4
var remainingFuel = +prompt('Enter the remaining fuel in car');

       
        if (remainingFuel < 0.25) {
            alert('Please refill the fuel in your car.');
        } else {
            alert('Your fuel level is sufficient.');
        }

5

// a
var a = 4
if (++a === 5){
    alert("given condition for variable a is true");
    }

// b
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
    }
if (++c < 14){
    alert("condition 3 is true");
    }
if(c === 14){
    alert("condition 4 is true");
    }

// d
var materialCost = 20000;
var    laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
    }

// f
  if("car" < "cat") {
        alert("car is smaller than cat"); 
    }

// 6
var subject1 = prompt("Enter marks for English");
var subject2 = prompt("Enter marks for Math");
var subject3 = prompt("Enter marks for Urdu");

var totalMarks = 300;


var obtainedMarks = subject1 + subject2 + subject3;
var percentage = (obtainedMarks / totalMarks) * 100;

var grade;
if (percentage >= 80) {
    grade = 'A-One \nExcellent';
} else if (percentage >= 70) {
    grade = 'A \nGood';
} else if (percentage >= 60) {
    grade = 'B <br> You need to improve';
} else {
    grade = 'Fail \nSorry';
}

alert(grade);

// 7
var secretNumber = 7;
var userGuess = +prompt("Guess the secret number (between 1 and 10):");
    if (userGuess === secretNumber) {
        alert("Bingo! Correct answer.");
    } else {
        alert("Close enough to the correct answer.");
    }

// 8
var numberDivisibleCheck = +prompt("Enter a number:");
    if (numberDivisibleCheck % 3 === 0) {
        alert(numberDivisibleCheck + " is divisible by 3.");
    } else {
        alert(numberDivisibleCheck + " is not divisible by 3.");
    }

// 9
var oddNumber = +prompt("Enter a number:");
    if (oddNumber % 2 === 0) {
        alert(oddNumber + " is an even number.");
    } else {
        alert(oddNumber + " is an odd number.");
    }

// 10
var temperature = prompt("Enter the temperature:");
if (temperature > 40) {
    alert("It is too hot outside.");
} else if (temperature > 30) {
    alert("The weather today is normal.");
} else if (temperature > 20) {
    alert("Today's weather is cool.");
} else if (temperature > 10) {
    alert("OMG! Today's weather is SO cool.");
} 

// 11
var firstNumber = +prompt("Enter the first number:");
var secondNumber = +prompt("Enter the second number:");
var operator = prompt("Enter the operator (+, -, *, /, %)");
var result;
    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        result = firstNumber / secondNumber;
        }
     else if (operator === "%") {
        result = firstNumber % secondNumber;
    }

alert("The result is: " + result);

