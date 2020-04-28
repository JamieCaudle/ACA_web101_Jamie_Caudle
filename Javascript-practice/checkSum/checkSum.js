// Write a JavaScript program to check two given numbers and return true if one of the numbers is 50 or if their sum is 50.

// checkSum(50, 12) // => true
// checkSum(10, 11) // => false
// checkSum(26, 24) // => true
// checkSum(49, 2) // => false



let checkSum = (num1, num2) => {

  if (num1 === 50 || num2 === 50) {
    return true
  }

  // the reason why num1 and num2 are in their own brackets is cause we want them to add up first before seeing if it equals 50  
  else if ((num1 + num2) === 50) {  
    return true 
  }

  else {
    return false
  }

}

// This bit of text is to see the answer on the screen
let getH1 = document.querySelector('.sumAnswer')
console.log(getH1);

getH1.innerHTML = checkSum(50,12)



