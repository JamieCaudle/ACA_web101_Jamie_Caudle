// pass in two numbers
// determine if two numbers are between
// 0-20
// 80-100
// include 0, 20, 80, 100

//if the numbers are either between the range of 0-20 or 80-100,
//which includes the edges of the limit: 0, 20, 80, and 100.


const withinLimits = (num1, num2) => {

  let forFirstNumber =
  (num1 >= 0 && num1 <= 20) ||
  (num1 >= 80 && num1 <= 100) ||
  (num2 >= 0 && num2 <= 20) ||
  (num2 >= 80 && num2 <= 100);
let forSecondNumber =
  (num1 >= 0 && num1 <= 20) ||
  (num1 >= 80 && num1 <= 100) ||
  (num1 >= 0 && num1 <= 20) ||
  (num1 >= 80 && num1 <= 100);

  if ((forFirstNumber, forSecondNumber)) {
    return true;
  } else {
    return false;
  }
};

console.log(withinLimits(10, 99)); // => true
console.log(withinLimits(21, 81)); // => false
