'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
        options.tableName = 'FusionPokemon';
        return queryInterface.bulkInsert(options, [
            {
                nickname: 'Poliler',
                description: 'he pinch',
                pokedexId1: 99,
                pokedexId2: 62,
                trainerId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nickname: 'Rhybasaur',
                description: 'She\'s the cutest little bean!',
                pokedexId1: 1,
                pokedexId2: 111,
                trainerId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nickname: 'Seabro',
                description: 'Seabro always has your back.',
                pokedexId1: 80,
                pokedexId2: 117,
                trainerId: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                nickname: 'Cloyking',
                description: '',
                pokedexId1: 119,
                pokedexId2: 91,
                trainerId: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
              nickname: 'Seechu',
              description: 'Don\'t go swimming at the same time as Seechu unless you wanna get zapped!',
              pokedexId1: 26,
              pokedexId2: 86,
              trainerId: 4,
              createdAt: new Date(),
              updatedAt: new Date()
            },
          {
              nickname: 'Magneking',
              description: 'He sees all.',
              pokedexId1: 34,
              pokedexId2: 82,
              trainerId: 4,
              createdAt: new Date(),
              updatedAt: new Date()
            },
        ], {});
    },
    
    down: (queryInterface, Sequelize) => {
       options.tableName = 'FusionPokemon';
       return queryInterface.bulkDelete(options, null, {});
    }
};
