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