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
       //console.log("Release Year: " + JSON.parse(body).Year);

   //     * Title of the movie.
   // * Year the movie came out.
   // * IMDB Rating of the movie.
   // * Rotten Tomatoes Rating of the movie.
   // * Country where the movie was produced.
   // * Language of the movie.
   // * Plot of the movie.
   // * Actors in the movie.
  
});