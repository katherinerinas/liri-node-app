require("dotenv").config();
var request = require('request');

// var twitterKeyInfo=require("./assets/javascript/keys.js");
// //add code to import the keys.js file and store it in a variable

// var Spotify = require('node-spotify-api');
// var Twitter = require('twitter');

 //var spotify = new Spotify(keys.spotify);
 // var client = new Twitter(keys.twitter);


// this ^ should be used to access keys information.




//Twitter



// var params = {screen_name: 'GingerVitis230'};
// client.get('statuses/user_timeline', params, function(error, tweets, response) {
//   if (!error) {
//     console.log(tweets);
//   }

// });











//spotify





























//OMDB:
var userChoice = process.argv[2];

var getMovie= function(movieName){

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";



request(queryUrl, function(error, response, body) {
 
	  if (!error && response.statusCode === 200) {
      var omdbData=JSON.parse(body);
      
        console.log("Movie Title: " + JSON.parse(body).Title);
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("Rating: " + JSON.parse(body).Rated);
        console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
        console.log("Country " + JSON.parse(body).Country);
         console.log("language: " + JSON.parse(body).Language);
         console.log("Plot: " + JSON.parse(body).Plot);
        console.log("actors: " + JSON.parse(body).Actors);
     }   
  });
};

getMovie(userChoice);

  