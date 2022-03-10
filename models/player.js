const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  id: {type: Number},
  first_name: {
    type: String,
    trim: true, // trims whitespace if your user types something like " alex@123.com " into "alex@123.com"
    lowercase: true,
  },
});

module.exports = mongoose.model('Player', playerSchema);