// looks for .js file
const Movie = require("./utils");
// import yargs
const yargs = require("yargs");
console.log(yargs.argv);
// input process
// const input = process.argv;

// const TheApp = () => {
//   if (yargs.argv.command === "add") {
//     const movieObj = new Movie(yargs.argv.title, yargs.argv.actor);
//     movieObj.add();
//   }
// };
// TheApp(process.argv);

const TheApp = (argvArray) => {
  console.log(argvArray);
  console.log(argvArray.length);
  for (i = 2; i < argvArray.length; i++) {
    if (argvArray[i] === "--title" && argvArray[i + 2] === "--actor") {
      const movieObj = new Movie(argvArray[i + 1], argvArray[i + 3]);
      movieObj.add();
    }
  }
};

TheApp(process.argv);

// Iterated through the input starting at index 2
// for (i = 2; i < input.length; i++) {
//   console.log(input[i]);
//   if (input[i] === "add" && input[i + 1] != "add" && input[i + 2] != "add") {
//     const movieObj = new Movie(input[i + 1], input[i + 2]);
//     movieObj.add();
//     i += 2;
//   }
// }

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
