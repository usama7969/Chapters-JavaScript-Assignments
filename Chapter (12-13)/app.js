// 1








// 2
var firstNumber = +prompt("Enter the first integer:");
var secondNumber = +prompt("Enter the second integer:");
    if (firstNumber > secondNumber) {
        alert("The larger number is: " + firstNumber);
    } else if (secondNumber > firstNumber) {
        alert("The larger number is: " + secondNumber);
    } else {
        alert("Both numbers are equal.");
    }

// 3
var number = +prompt("Enter number:");
    if (number > 0) {
        alert(`The number ${number} is positive.`);
    } else if (number < 0) {
        alert(`The number ${number} is negative.`);
    } else {
        alert(`The number ${number} is zero.`);
    }

    // 4
    var character = prompt("Enter a single character:");

    if (character.length !== 1) {
        alert("Please enter one character.");
    } else if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' ||
               character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U') {
        alert("true");
    } else {
        alert("false");
    }
    
    // 5
var correctPassword = "mainPassword321";
var userPassword = prompt("enter your password");

if (userPassword === null) {
    alert("Please enter your password.");
} else {
    if (userPassword === correctPassword) {
        alert("Correct! The password you entered matches the original password.");
    } else {
        alert("Incorrect password.");
    }
}

// 6
var hour = 13;
var greeting;

if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
alert(greeting);

// // 7
var time = +prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):");

    if (time >= 500 && time < 1200) {
        alert("Good morning!");
    } else if (time >= 1200 && time < 1700) {
        alert("Good afternoon!");
    } else if (time >= 1700 && time < 2100) {
        alert("Good evening!");
    } else if (time >= 2100 && time <= 2359) {
        alert("Good night!");
    } else {
        alert("Invalid time entered.");
    }

