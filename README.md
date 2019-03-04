# sc2-units-graphql-server

API for Starcraft II units in Graphql

## Install 

- `npm install`: install dependencies
- `npm run mongo`: initialize Mongo database(`sc2graphql`)
- `npm run serve`: run app on `localhost:3000`

## Access GraphQL API

Go to `http://localhost:3000/graphiql`

Requests: 

```
{
    races {
        _id
        name
        description
        type
    }
}
```

## Disclaimer 

*If there is any copyright infringement, any issue of that kind, please contact me. I do not own any right on Starcraft II or whatsoever and I will remove any content which does not respect your rights.*

### Blizzard

Some ressources (images, informations) of this application have been extracted from [official Blizzard StarCraft® II website](http://eu.battle.net/sc2/fr/game/). I do not own any right on any of them. 

You will found the official Blizzard disclaimer on StarCraft® bellow. 

StarCraft®
©1998 Blizzard Entertainment, Inc. All rights reserved. StarCraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

StarCraft®: Brood War®
©1998 Blizzard Entertainment, Inc. All rights reserved. StarCraft, Brood War and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

StarCraft® II: Wings of Liberty®
©2010 Blizzard Entertainment, Inc. All rights reserved. Wings of Liberty is a trademark, and StarCraft and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.

StarCraft® II: Heart of the Swarm®
©2013 Blizzard Entertainment, Inc. All rights reserved. Heart of the Swarm and StarCraft are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.