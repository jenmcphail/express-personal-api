// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

/************
 * DATABASE *
 ************/

var db = require('./models');

const profileData =
  {
  name: "Jen McPhail", 
  github_link: "http://www.github/com/jenmcphail", 
  github_profile_image: "https://avatars3.githubusercontent.com/u/18298639?v=3&s=460",
  home_town: "Baltimore, MD", 
  current_city: "San Francisco, CA", 
  family_members: [{name: "Dianne", relationship: "mother"}, 
    {name: "Samuel", relationship: "father"},
    {name: "Lindsay", relationship: "sister"}]
  };

const favoriteSongs =
  [{
  id: 123,
  artist: "Raffi",
  songTitle: "Bananaphone",
  album: "Bananaphone",
  yearReleased: "1994",
  },
  {
  id: 456,
  artist: "Shaggy",
  songTitle: "It Wasn't Me",
  album: "Hot Shot",
  yearReleased: "2000",
  },
  {
  id: 789,
  artist: "Marky Mark feat the Funky Bunch",
  songTitle: "Good Vibrations",
  album: "Music for the People",
  yearReleased: "1991",
  }];

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    //woops_i_has_forgot_to_document_all_my_endpoints: false // CHANGED ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentation_url: "https://github.com/jenmcphail/express_self_api/README.md", // CHANGE ME
    base_url: "http://desolate-headland-28994.herokuapp.com", // CHANGED
    endpoints: [
      {
      method: "GET", 
      path: "/api", 
      description: "Info about the my personal api"
      },
      {
      method: "GET", 
      path: "/api/profile", 
      description: "Info about me"
      }, // CHANGED
      {
      method: "GET", 
      path: "/api/favorite-songs", 
      description: "lists my favorite songs and allows users to add new favorite songs"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function api_profile(req, res) {
  res.json(profileData)
});

app.get('/api/favorite-songs', function api_songs(req, res) {
  res.json(favoriteSongs)
});

app.get("api/favorite-songs/:id", function api_one_song(req, res){
  for (i = 0; i<favoriteSongs.length; i++){
    if (req.params.id == favoriteSongs[i].id){
      res.json(favoriteSongs[i]);
    }
  }
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
