// looks for .js file
const Movie = require("./utils");
// input process
const input = process.argv;

// // Iterated through the input starting at index 2
// for (i = 2; i < input.length; i++) {
//   // slices the input into sections of 3
//   let slicedSection = input.slice(i, i + 3);
//   // a console log to see the process
//   console.log(slicedSection);
//   // If index 0 in sliced section is "add" and add isnt a value in the sliced section
//   if (
//     slicedSection[0] === "add" &&
//     slicedSection[1] != "add" &&
//     slicedSection[2] != "add"
//   ) {
//     // add movie
//     const movieObj = new Movie(slicedSection[1], slicedSection[2]);
//     movieObj.add();
//   }
// }

// Iterated through the input starting at index 2
for (i = 2; i < input.length; i++) {
  console.log(input[i]);
  if (input[i] === "add" && input[i + 1] != "add" && input[i + 2] != "add") {
    const movieObj = new Movie(input[i + 1], input[i + 2]);
    movieObj.add();
    i += 2;
  }
}
