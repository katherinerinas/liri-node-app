require("dotenv").config();
  var request = require('request');
  var fs = require('fs');
  var keys=require("./assets/javascript/keys.js");


  var Spotify = require('node-spotify-api');
  var Twitter = require('twitter');

  var spotify = new Spotify(keys.spotify);
  var client = new Twitter(keys.twitter);



  var action = process.argv[2];
  var value = process.argv[3];


//this is the twitter section:

if (process.argv[2] == "my-tweets"){

var params = {
       screen_name: 'GingerVitis230',
       count: 20
     }
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      for (var i = 0; i < tweets.length; i++) {
      console.log('=====================');
      console.log(tweets[i].text);
      console.log(tweets[i].created_at);
      console.log('=====================');
      }
     }
   });
 };


//this is the spotify section:

if(process.argv[2] == "spotify-this"){
  var userMusic=process.argv[3];
  var getMusic= function(trackName){
    spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
    console.log('==================================================');
    console.log("Band Name:" + data.tracks.items[0].artists[0].name);
    console.log("Song Name:" + data.tracks.items[0].name);
    console.log("Album Name:" + data.tracks.items[0].album.name);
    console.log("Link to song:" +" "+ data.tracks.items[0].preview_url);
    console.log('==================================================');
      });
   };
   getMusic(userMusic);
}


//this is the OMDB section
   

 if (process.argv[2]==="movie-this"){
var userChoice=process.argv[3];
var getMovie= function(movieName){

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";



request(queryUrl, function(error, response, body) {
 
	  if (!error && response.statusCode === 200) {
      var omdbData=JSON.parse(body);
         console.log('========================================');
         console.log("Movie Title: " + JSON.parse(body).Title);
         console.log("Release Year: " + JSON.parse(body).Year);
         console.log("OMDB Rating: " + JSON.parse(body).Rated);
         console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
         console.log("Country: " + JSON.parse(body).Country);
         console.log("Language: " + JSON.parse(body).Language);
         console.log("Plot: " + JSON.parse(body).Plot);
         console.log("Actors: " + JSON.parse(body).Actors);
         console.log('========================================');

         }


      });
     };

         getMovie(userChoice);

};


if (process.argv[2]=="do-what-it-says"){


    fs.readFile("random.txt", "utf8", function(error, data){
     if (error) {
     return console.log(error);
 

    }
    console.log('========================================');
  
 
  var getMusic= function(trackName){
   userMusic= console.log(data);
    spotify.search({ type: 'track', query: process.argv[3] }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
        
    console.log('==================================================');
    console.log("Band Name:" + data.tracks.items[0].artists[0].name);
    console.log("Song Name:" + data.tracks.items[0].name);
    console.log("Album Name:" + data.tracks.items[0].album.name);
    console.log("Link to song:" +" "+ data.tracks.items[0].preview_url);
    console.log('==================================================');
      
      });
   };
      getMusic(userMusic);



    console.log('========================================');
  });
    
};

  



  