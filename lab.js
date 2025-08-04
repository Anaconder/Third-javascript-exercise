// Part 1: Fizz Buzz
let num1 = 1;

while(num1<=100){
  if(num1%3 + num1%5==0){
    console.log('Fizz Buzz')
  }else if(num1%3==0){
    console.log('Fizz')
  }else if(num1%3==0){
    console.log('Buzz')
  }else{
    console.log(num1)
  }
  num1++

}
