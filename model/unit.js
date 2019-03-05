const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
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
  race: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("unit", UnitSchema);
