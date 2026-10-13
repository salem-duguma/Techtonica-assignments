// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let number = 1;
while (number <= 5){
  console.log(number);
  number++;
}
// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
let number = 1;
do {
  console.log(number);
  number++;
} while (number <= 5);
// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
for (let number = 1; number <= 5; number++) {
  console.log(number);
}
// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let number1 =10;
while (number1 >= 1) {
  console.log(number1);
  number1--;
}
let number2 = 10;
do{
  console.log(number2);
  number2--;
} while (number2 >= 1);

for (let number3 = 10; number3 >= 1; number3--) {
  console.log(number3);
}
// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let number4 = 7;
while (number4 <= 27) {
  console.log(number4);
  number4++;
}
let number5 = 7
do {
  console.log(number5);
  number5++;
} while (number5 <= 27);
for (let number6 = 7; number6 <= 27; number6++) {
  console.log(number6);
}
// Exercise6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
let number7 = 10
while (number7 <= 100) {
  console.log(number7);
  number7 += 10;
}
let number8 = 10
do{
  console.log(number8);
  number8 += 10;
} while(number8 <= 100);
for (let number9 = 10; number9 <= 100; number9 += 10) {
  console.log(number9);
}
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.
The loop is infinite because the condition stays true as counterFour decreases.
let counterFour = 1;
while (counterFour >= -100) {
  console.log("HELP ME!");
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
let favoriteNumber = 6;
let mynumber = 0;
while (mynumber <= favoriteNumber) {
  console.log(mynumber);
  mynumber++;
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
let favoriteNumber1 = 6;
let mynumber1 = 0;
while (mynumber1 <= 100) {
 if (mynumber1 === favoriteNumber1) {
  console.log(mynumber1 + " my favorite number!");
} else {
  console.log(mynumber1 + " not my favorite number");
}
mynumber1++;
}
// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//
I learned that different loops are useful in different situations.
I would use a while loop when I want to repeat something as long as a condition is true.
I would use a do while loop when I want the code to run at least once before checking the condition.
I would use a for loop when I know how many times I want to repeat something.
I think choosing the right loop makes the code easier to read and understand.

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1; insideCounter--) {
    console.log("inside" + insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//

// Commit your file to GitHub.
