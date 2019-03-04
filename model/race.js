const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RaceSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("races", RaceSchema);
