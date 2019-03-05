const typeDefs = `
  type Query {
    races: [SC2Race]
    race(type: SC2RaceType): SC2Race
    units(race: SC2RaceType): [SC2Unit]
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

  type SC2Unit {
    _id: String
    name: String
    description: String
    race: SC2RaceType
  }
`;

module.exports = typeDefs;
