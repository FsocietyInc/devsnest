// Write a JavaScript program to list the properties of a JavaScript object.

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };

console.log(Object.keys(student).toString());

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before
// or after deleting the property.

console.log("Before deletion: ", student);
delete student.sclass;
console.log("After deletion: ", student);

// Write a JavaScript program to get the length of a JavaScript object.

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
console.log(Object.keys(student).length);

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status)

var library = [
  { author: "Bill Gates", title: "The Road Ahead", readingStatus: true },
  { author: "Steve Jobs", title: "Walter Isaacson", readingStatus: true },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

console.log(library);

// Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

let cylinder = { radius: 5, height: 8, volume: 0 };
console.log("Volume of cylinder = ", cylinder.volume);
cylinder.volume = function () {
  return (Math.PI * this.radius * this.height).toFixed(4);
};

console.log("Volume of cylinder = ", cylinder.volume());

// Write a JavaScript program to sort an array of JavaScript objects.

var library = [
  { title: "The Road Ahead", author: "Bill Gates", libraryID: 1254 },
  { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4264 },
  {
    title: "Mockingjay: The Final Book of The Hunger Games",
    author: "Suzanne Collins",
    libraryID: 3245,
  },
];

console.log(library.sort(title));

// Unfinished
