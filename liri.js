require("dotenv").config();
var request = require('request');

 var keys=require("./assets/javascript/keys.js");
// //add code to import the keys.js file and store it in a variable

// var Spotify = require('node-spotify-api');
 var Twitter = require('twitter');

//  var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);


// this ^ should be used to access keys information.




//Twitter



var params = {screen_name: 'GingerVitis230'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log("tweetsr", tweets);
  }

});











//spotify





























// //OMDB:
// var userChoice = process.argv[2];

// var getMovie= function(movieName){

// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// console.log(queryUrl);

// request(queryUrl, function(error, response, body) {
//   console.log(body);

// 	  if (!error && response.statusCode === 200) {
//       var omdbData=JSON.parse(body);
//       
//       console.log(JSON.stringify(omdbData, null, 2));
//       //   console.log("Movie Title: " + JSON.parse(body).Name);
//       //   console.log("Release Year: " + JSON.parse(body).Year);
//       //   console.log("Rating: " + JSON.parse(body).OMDBrating);
//       //  console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].value);
//       //   console.log("Country " + JSON.parse(body).Country);
//       //   console.log("language: " + JSON.parse(body).language);
//       //   console.log("Plot: " + JSON.parse(body).plot);
//       //  console.log("actors: " + JSON.parse(body).actors);
//      }   // }
//   });
// };

// getMovie(userChoice);
   //     * Title of the movie.
   // * Year the movie came out.
   // * IMDB Rating of the movie.
   // * Rotten Tomatoes Rating of the movie.
   // * Country where the movie was produced.
   // * Language of the movie.
   // * Plot of the movie.
   // * Actors in the movie.
  