// looks for .js file
const Movie = require("./utils");
// input process
const input = process.argv;

// if statement on input
if (input[2] === "add") {
  const movieObj = new Movie(input[3], input[4]);
  movieObj.add();
}
