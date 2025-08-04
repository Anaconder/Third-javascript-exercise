
// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }


// Count down from 10 to 1.
// for (let i = 10; i > 0; i--) {
// 	console.log(i);
// }
// Output odd numbers from 1 to 10.
for (let i = 0; i < 10; i++) {
	console.log(++i);
}
// Output even number from 1 to 10.
for (let i = 0; i <= 10; i++) {
	console.log(i++);
  
}
// Output multiples of 3, starting at 6 and ending at 60.
for (let i = 6; i <= 60; i+=6) {
	console.log(i);
}
// Output an increasing number of # symbols, from 1 to 7, as shown below
let x='#';

for (let i = 0; i < 7; i++) {
	console.log(x);
  x+='#'
}


// Now, write a for loop that iterates from 1 to 20. The loop should:

// Print “prime” for all prime numbers.
// Print “even” for all even numbers.
// Print “odd” for all odd numbers.
// Treat 2 as an even number and 1 & 3 as odd, rather than prime.

//Find all prime numbers 1 - 20 

for (let i = 1; i <= 20; i++) {
  if (i == 1) {
    console.log(`1 is odd.`);
  } else {
    if (i % 2 !== 0 && i % 3 !== 0) {
      console.log(`${i} is prime.`);
    } else if (i % 2 == 0) {
      console.log(`${i} is even.`);
    } else {
      console.log(`${i} is odd.`);
    }
  }
}