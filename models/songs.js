var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var SongSchema = new Schema({
  artist: String,
  songTitle: String,
  album: String,
  yearReleased: String
});

var Song = mongoose.model('Song', SongSchema);

module.exports = Song;