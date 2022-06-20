// looks for .js file
const Movie = require("./utils");
// input process
const input = process.argv;

// if statement on input
for (i = 2; i < input.length; i++) {
  let slicedSection = input.slice(i, i + 3);
  console.log(slicedSection);
  if (slicedSection[0] === "add") {
    if (slicedSection[1] != "add" && slicedSection[2] != "add") {
      const movieObj = new Movie(slicedSection[1], slicedSection[2]);
      movieObj.add();
    }
  }
}
