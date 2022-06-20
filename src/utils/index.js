// New Movie Array
const moviesArray = [];
// Movie class
class Movie {
  constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
  }
  // Add movie function
  add() {
    moviesArray.push(this);
    console.log(moviesArray);
  }
}

module.exports = Movie;
