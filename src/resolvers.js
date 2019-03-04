const Race = require("../model/race");

module.exports = {
  Query: {
    async races() {
      return await Race.find();
    },
    async race(root, args, context, info) {
      return await Race.findOne({ type: args.type });
    }
  }
};
