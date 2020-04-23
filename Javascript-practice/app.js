console.log('hello');


let letterArray = ['a','b','c']

let rotate = (arr) => {           
arr.shift()
arr.push('a')
return arr }

let rotateReturn = rotate(letterArray)
console.log('This is an answer', rotateReturn);



