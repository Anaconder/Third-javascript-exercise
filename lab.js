// Part 1: Fizz Buzz
let num1 = 1;

while(num1<=100){
  //prints fizz buzz only when the number is divisible by both 3&5
  if(num1%3 + num1%5==0){
    console.log('Fizz Buzz')
  }else if(num1%3==0){
    console.log('Fizz')
  }else if(num1%5==0){
    console.log('Buzz')
  }else{
    console.log(num1)
  }
  num1++

}

// Part 2: Prime Time
  let num2=12
  let diff_maker= 0


  Prime:while(num2 <= (num2**num2)){
    let isprime= true;

    if(num2==1){
      num2==1;
    }else if(num2==2){
      console.log(`The next prime number is ${num2} `);
      break Prime;
    //Determines the value of isprime for numbers above 2
    }else if(num2>2){
      for(let i=2;i<num2;i++){
        if(num2%i === 0){
          isprime=false;
          break;
        }
    }
    //Prints only if there's been at least one loop and value of isprime is true
      if(isprime&&diff_maker>0){
        console.log(`The next prime number is ${num2} `);
        break Prime;
      }
    //Prints invalid output when num2<=0
    }else{
      console.log(`${num2} is an invalid input`);
    }
    num2++
    diff_maker++

  }


// Part 3: Feeling Loopy
let data = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let currentCell = 1;
let i = 0;

while (i < data.length) {
  let char = data[i];

  if (char === ',') {
    currentCell += 1; // Move to next cell
  } else if (char === '\n') {
    // End of row: print and reset everything
    console.log(cell1, cell2, cell3, cell4);
    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";
    currentCell = 1;
  } else {
    // Add character to the correct cell
    if (currentCell === 1) {
      cell1 += char;
    } else if (currentCell === 2) {
      cell2 += char;
    } else if (currentCell === 3) {
      cell3 += char;
    } else if (currentCell === 4) {
      cell4 += char;
    }
  }

  i += 1;
}

// After loop ends, print last row (in case it didn't end with \n)
if (cell1 || cell2 || cell3 || cell4) {
  console.log(cell1, cell2, cell3, cell4);
}
