require("dotenv").config();
  var request = require('request');
  var fs = require('fs');
  var keys=require("./assets/javascript/keys.js");
// // //add code to import the keys.js file and store it in a variable

  var Spotify = require('node-spotify-api');
  var Twitter = require('twitter');

  var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);


// this ^ should be used to access keys information.

// //Twitter


if (process.argv[2]=="my-tweets"){

var params = {screen_name: 'GingerVitis230'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
  console.log(tweets[0].text);
  //console.log(tweets[].text); 
 
}
   

	


        
    }); 
  };


// //spotify

if(process.argv[2] == "spotify-this-song"){
    spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log(data.tracks.items[0].artists[0].name);
      });
}


//OMDB:
   

 if (process.argv[2]==="movie-this"){

var getMovie= function(movieName){

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";



request(queryUrl, function(error, response, body) {
 
	  if (!error && response.statusCode === 200) {
      var omdbData=JSON.parse(body);
      
         console.log("Movie Title: " + JSON.parse(body).Title);
         console.log("Release Year: " + JSON.parse(body).Year);
         console.log("OMDBRating: " + JSON.parse(body).Rated);
         console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
         console.log("Country: " + JSON.parse(body).Country);
         console.log("Language: " + JSON.parse(body).Language);
         console.log("Plot: " + JSON.parse(body).Plot);
         console.log("Actors: " + JSON.parse(body).Actors);

         getMovie(process.argv[2]);
       }
      });
  };
};



if (process.argv[2]=="do-what-it-says"){

 fs.readFile("random.txt", "utf8", function(error, data){
     if (error) {
     return console.log(error);
     console.log(data);

    }
  });
};

  



  