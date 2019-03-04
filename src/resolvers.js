const Race = require("../model/race");

module.exports = {
  Query: {
    async races() {
      return await Race.find();
    }
  }
};
