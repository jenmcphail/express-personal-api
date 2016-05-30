// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');

var newSong = {description: "one of Jen's favorite songs."}

db.Songs.create(newSong, function(err, song){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new song!", song._id)
  process.exit(); // we're all done! Exit the program.
})
