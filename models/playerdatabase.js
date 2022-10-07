const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const playerdatabaseSchema = new Schema({
  id: {type: Number},
  first_name: {
    type: String,
    trim: true, // trims whitespace if your user types something like " alex@123.com " into "alex@123.com"
    lowercase: true,
  },
  last_name: {
    type: String,
    trim: true, // trims whitespace if your user types something like " alex@123.com " into "alex@123.com"
    lowercase: true,
  },
  position: {
    type: String,
    trim: true, // trims whitespace if your user types something like " alex@123.com " into "alex@123.com"
    lowercase: true,
  },
  height_feet: {
    type: Number,
  },
  height_inches: {
    type: Number,
  },
  weight_pounds: {
    type: Number,
  },
  // team: {

  // }
  
});

module.exports = mongoose.model('PlayerDatabase', playerdatabaseSchema);