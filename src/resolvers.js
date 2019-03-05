const Race = require("../model/race");
const Unit = require("../model/unit");

module.exports = {
  Query: {
    async races() {
      return await Race.find();
    },
    async race(root, args, context, info) {
      return await Race.findOne({ type: args.type });
    },
    async units(root, args, context, info) {
      if (!!args && args.race) {
        return await Unit.find({ race: args.race });
      } else {
        return await Unit.find();
      }
    }
  }
};
