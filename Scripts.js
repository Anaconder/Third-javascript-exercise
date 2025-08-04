
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

// Looping through Iterables
const str = "Hello World!"

//  - .length  is a property that every  string has, returns a number of the length of chars
// console.log(str.length)

for (let i = 0; i < str.length; i++){
    console.log(str[i]);
}

// For In Loop - allow us to loop over an iterable (string, array, object)
// declare an arbitrary variable that represents the index number
for(let char in str){
    console.log(str[char]);
}

// For Of Loops - allow us to loop over an iterable (string, array, object)
// declare an arbitrary variable that will directly reflect the VALUE at that index number
// ****you cannot access the index number easily****
for (let letter of str){
    console.log(letter);
}

// Count down to 0 from a given number.
let givenNum = 230;

while (givenNum >= 0) {
  console.log(givenNum);

  givenNum--;
}

// Log integers in multiples of 3 as long as they are less than 35.
let num1 = 3;

while (num1 < 35) {
  console.log(num1);

  num1 += 3;
}

// Print integers in multiples of 5 as long as they are less than 100.

let num2 = 5;

while (num2 < 100) {
  console.log(num2);

  num2 += 5;
}

// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.
// All other integers should not be output.
// Print all prime numbers between 0 and 20.

let num3 = -2;

// while(num3 <= 20){
//   if(num3%2==0){
//     console.log(num3*3);
//   } 
//   num3++
// }

while(num3 <= 20){
  let isprime= true;

  if(num3==1){
    console.log(`1 is not a prime number`);
  }else if(num3==2){
    console.log(`2 is a prime number`)
  }else if(num3>2){
    for(let i=2;i<num3;i++){
      if(num3%i === 0){
        isprime=false;
        break;
      }
  }
    if(isprime){
      console.log(`is ${num3} a prime number? ${isprime}`)
    }else
      console.log(`is ${num3} a prime number? ${isprime}`)
  }else if(num3 ==0){
    console.log(`${num3} is not a prime number`);
  }else{
    console.log(`${num3} is an invalid input`);
  }
  num3++
}

// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.
const cookie = 4;
let bill = 10;
let change = 0;

// While there is still money
while(bill > 0){

    // If bill is fresh, subtract cookie price
    if(bill == 10){
        bill -= cookie;
    }

    // add quarter
    change++;

    // for every quarter taken off bill.
    bill -= .25;
}

console.log(`Romeo recieved ${change} quarters.`)
