const moviesArray = [];
class Movie {
  constructor(title, actor = "Not specified") {
    this.title = title;
    this.actor = actor;
  }
  add() {
    moviesArray.push(this);
    console.log(moviesArray);
  }
}

module.exports = Movie;
