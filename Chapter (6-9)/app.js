// // 1
// var result = 10;
// ++result
// document.write(`The value of ++result is: ${result} <br> Now the value of a is: ${result}<br><br>`);

// document.write(`The value of result++ is: ${result++} <br> Now the value of a is: ${result}<br><br>`);

// document.write(`The value of --result is: ${--result} <br> Now the value of a is: ${result}<br><br>`);

// document.write(`The value of result-- is: ${result--} <br> Now the value of a is: ${result}<br><br>`);


// // 2

// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//             // 1 -  0  +  1  +  1
// alert(a);      
// alert(b);
// alert(result);


// // 3
// var name = prompt("Please enter your name:");
// alert("Hello, " + name + "! Nice to meet you.");

// // 5
// var tableNumber = +prompt('write table number', '5');
// document.write(`${tableNumber} x 1 = ${tableNumber * 1}<br>`);
// document.write(`${tableNumber} x 2 = ${tableNumber * 2}<br>`);
// document.write(`${tableNumber} x 3 = ${tableNumber * 3}<br>`);
// document.write(`${tableNumber} x 4 = ${tableNumber * 4}<br>`);
// document.write(`${tableNumber} x 5 = ${tableNumber * 5}<br>`);
// document.write(`${tableNumber} x 6 = ${tableNumber * 6}<br>`);
// document.write(`${tableNumber} x 7 = ${tableNumber * 7}<br>`);
// document.write(`${tableNumber} x 8 = ${tableNumber * 8}<br>`);
// document.write(`${tableNumber} x 9 = ${tableNumber * 9}<br>`);
// document.write(`${tableNumber} x 10 = ${tableNumber * 10}<br>`);



// 6

// a)
        var subject1 = prompt('Enter the name of the first subject:');
        var subject2 = prompt('Enter the name of the third subject:');
        var subject3 = prompt('Enter the name of the second subject:');

// b)
        var totalMarksPerSubject = 100;
        
 // c,d)
        var obtainedMarks1 = +prompt('Enter obtained marks for ' + subject1);
        var obtainedMarks2 = +prompt('Enter obtained marks for ' + subject2);
        var obtainedMarks3 = +prompt('Enter obtained marks for ' + subject3);

// e)
        var totalMarks = totalMarksPerSubject * 3;
        var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
        var percentage = (totalObtainedMarks / totalMarks) * 100;

        document.write(`<h2>Marks Sheet</h2><br>`);
        document.write(`<tr> <b>Subject &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Total Marks &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Obtained Marks &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Percentage<br>`);
        document.write(`${subject1}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${totalMarksPerSubject}   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${obtainedMarks1}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  ${obtainedMarks1 / totalMarksPerSubject * 100}%<br>`)
        document.write(`${subject2}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  ${totalMarksPerSubject}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  ${obtainedMarks2}   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${obtainedMarks2 / totalMarksPerSubject * 100}%<br>`)
        document.write(`${subject3}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  ${totalMarksPerSubject}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  ${obtainedMarks3}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  ${obtainedMarks3 / totalMarksPerSubject * 100}%<br>`)
        document.write(` &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${totalMarks}   &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${totalObtainedMarks}  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp   ${percentage}%`);
