// 1
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");

var sum = num1 + num2;

document.write(`Sum of ${num1} and ${num2} is ${sum}`);


// 2
var num1 = +prompt("Enter the first number:");
var num2 = +prompt("Enter the second number:");

var sum = num1 + num2;
var minus = num1 - num2;
var multiply = num1 * num2;
var devide = num1 / num2 

document.write(`<p>Sum of ${num1} and ${num2} is ${sum}</p>`);
document.write(`<p>minus of ${num1} and ${num2} is ${minus}</p>`);
document.write(`<p>multiply of ${num1} divided by ${num2} is ${multiply}</p>`);
document.write(`<p>devide of ${num1} and ${num2} is ${devide}</p>`);

// 3
var taskVariable;
        // b
        document.write("Value after variable declaration is: " + taskVariable + "<br>");
        // c
        taskVariable = 5;
        // d
        document.write("Initial value: " + taskVariable + "<br>");
        // e
        taskVariable++;
        // f
        document.write("Value after increment is: " + taskVariable + "<br>");
        // g
        taskVariable += 7;
        // h
        document.write("Value after addition is: " + taskVariable + "<br>");
        // i
        taskVariable--;
        // j
        document.write("Value after decrement is: " + taskVariable + "<br>");
        // k
        var remainder = taskVariable % 3;
        // l
        document.write("The remainder is: " + remainder);

// 4
var ticketPrice = 600;
var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;
document.write("Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR");


// 5
var tableNumber = +prompt('write table number');
document.write(`${tableNumber} x 1 = ${tableNumber * 1}<br>`);
document.write(`${tableNumber} x 2 = ${tableNumber * 2}<br>`);
document.write(`${tableNumber} x 3 = ${tableNumber * 3}<br>`);
document.write(`${tableNumber} x 4 = ${tableNumber * 4}<br>`);
document.write(`${tableNumber} x 5 = ${tableNumber * 5}<br>`);
document.write(`${tableNumber} x 6 = ${tableNumber * 6}<br>`);
document.write(`${tableNumber} x 7 = ${tableNumber * 7}<br>`);
document.write(`${tableNumber} x 8 = ${tableNumber * 8}<br>`);
document.write(`${tableNumber} x 9 = ${tableNumber * 9}<br>`);
document.write(`${tableNumber} x 10 = ${tableNumber * 10}<br>`);

// 6
// a
var celsius = 25;      
// b
var fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");
// c
var fahrenheitTemp = 70;
// d
var celsiusTemp = (fahrenheitTemp - 32) * 5/9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C");


// 7
        var item1Price = 330;
        var item2Price = 240;
        var item3Price = 150; 

        var item1Quantity = 3;
        var item2Quantity = 4;
        var item3Quantity = 7;

        var totalItem1Cost = item1Price * item1Quantity;
        var totalItem2Cost = item2Price * item2Quantity;
        var totalItem3Cost = item3Price * item3Quantity;

        var totalCartCost = totalItem1Cost + totalItem2Cost + totalItem3Cost;

        document.write("Item 1: " + item1Quantity + " x Pkr" + item1Price + " = Pkr" + totalItem1Cost + "<br>");
        document.write("Item 2: " + item2Quantity + " x Pkr" + item2Price + " = Pkr" + totalItem2Cost + "<br>");
        document.write("Item 3: " + item3Quantity + " x Pkr" + item3Price + " = Pkr" + totalItem3Cost + "<br>");