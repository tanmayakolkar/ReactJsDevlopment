
function splitArray(array, chunkSize) {
  // Check if the chunkSize is greater than or equal to the array length
  if (chunkSize >= array.length) {
    return [array]; // Return the whole array as a single chunk
  }

  const result = [];
  let index = 0;

  while (index < array.length) {
    result.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }

  return result;
}


const array = [1, 2, 3, 4, 5];
console.log(splitArray(array, 1)); // [[1], [2], [3], [4], [5]]
console.log(splitArray(array, 2)); // [[1, 2], [3, 4], [5]]
console.log(splitArray(array, 3)); // [[1, 2, 3], [4, 5]]
console.log(splitArray(array, 4)); // [[1, 2, 3, 4], [5]]
console.log(splitArray(array, 5)); // [[1, 2, 3, 4, 5]]
console.log(splitArray(array, 6)); // [[1, 2, 3, 4, 5]]





1. What is the output of

function f1() { console.log(“this is”, this); console.log(“arguments is”, arguments); } f1()

Choices are

a. Null, null

b. Undefined, undefined

c. global, arguments

d. f1, undefined


Answer will be :c



2) in the above function f1, I do the following

let f11 = f1.bind({a:1}, 'abc'); f11('def');

What is the output now ?

Choices are

e. Null, null

f. Undefined, undefined

g. {a:1}, arguments = [“abc”, “def”]

h. {a: 1}, arguments = [“def”]


Answer will be: g. {a:1}, arguments = [“abc”, “def”]