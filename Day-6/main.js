// Write a JavaScript function to check whether an `input` is an array or not

var is_array = function (input) {
  if (toString.call(input) === "[object Array]") return true;
  return false;
};

console.log(is_array("okay"));
console.log(is_array([1, 2, 4, 0]));
console.log("\n");

// OR
inpArr = [1, 2, 4, 0];
console.log(Array.isArray(inpArr));
console.log("\n");

// Write a JavaScript function to clone an array

var cloneArray = function (arrayIn) {
  return arrayIn.slice(0);
};

var newArr = cloneArray([1, 2, 4, 0]);
console.log(newArr);
console.log("\n");

// OR

newArr2 = [...newArr];
console.log(newArr2);
console.log("\n");

// Write a JavaScript function to get the first element of an array. Passing a
// parameter 'n' will return the first 'n' elements of the array.

var getArrEle = function (arr, n) {
  if (arr == null) {
    return -1;
  } else if (n == null) {
    return arr[0];
  } else if (n < 0) {
    return [];
  } else {
    return arr.slice(0, n);
  }
};

console.log(getArrEle([7, 9, 0, -2]));
console.log(getArrEle([], 3));
console.log(getArrEle([7, 9, 0, -2], 3));
console.log(getArrEle([7, 9, 0, -2], 6));
console.log(getArrEle([7, 9, 0, -2], -3));

console.log("\n");

// Write a simple JavaScript program to join all elements of the following
// array into a string.

var myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join("+"));
console.log(myColor.join(" and "));
console.log("\n");

//  Write a JavaScript program to find the most frequent item of an array.

var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

var occN = 0;
var maxO = 1;
var item;
for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) occN += 1;
    if (maxO < occN) {
      item = arr1[i];
      maxO = occN;
    }
  }
  occN = 0;
}
console.log(`${item} ( ${maxO} times )`);
