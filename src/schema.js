const typeDefs = `
  type Query {
    races: [SC2Race]
    race(type: SC2RaceType): SC2Race
  }

  type SC2Race {
    _id: String
    name: String
    description: String
    type: SC2RaceType
  }

  enum SC2RaceType {
    PROTOSS
    TERRAN
    ZERG
  }
`;

module.exports = typeDefs;
