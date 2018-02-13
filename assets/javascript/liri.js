require("dotenv").config();


//add code to import the keys.js file and store it in a variable


 var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);


// this ^ should be used to access keys information.




//Twitter




//spotify



//OMDB:


var movieName = process.argv[2];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


console.log(queryUrl);

request(queryUrl, function(error, response, body) {

	 } if (!error && response.statusCode === 200) {
       //console.log("Movie Title: " + JSON.parse(body).Name);
       //console.log("Release Year: " + JSON.parse(body).Year);
       //console.log("Rating: " + JSON.parse(body).rating);
       //console.log("Rotten Tomatoes Rating: " + JSON.parse(body).look this up!);
       //console.log("Country " + JSON.parse(body).Country);
       //console.log("language: " + JSON.parse(body).language);
       //console.log("Plot: " + JSON.parse(body).plot);
       //console.log("actors: " + JSON.parse(body).actors);


   //     * Title of the movie.
   // * Year the movie came out.
   // * IMDB Rating of the movie.
   // * Rotten Tomatoes Rating of the movie.
   // * Country where the movie was produced.
   // * Language of the movie.
   // * Plot of the movie.
   // * Actors in the movie.
  
});