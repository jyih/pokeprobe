'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
    options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('PokePages', [
          {
              content: 'He pinched me once while I was building a sandcastle. It really hurt.',
              trainerId: 2,
              fusionPokemonId: 1,
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              content: 'I just love her little horn, don\'t you?',
              trainerId: 2,
              fusionPokemonId: 2,
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              content: `He's never gonna give you. Never gonna let you down.`,
              trainerId: 2,
              fusionPokemonId: 3,
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              content: '',
              trainerId: 3,
              fusionPokemonId: 4,
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              content: 'I took a bath with him once. Don\'t recommend it.',
              trainerId: 4,
              fusionPokemonId: 5,
              createdAt: new Date(),
              updatedAt: new Date()
          },
          {
              content: 'All bow to our one and only king.',
              trainerId: 4,
              fusionPokemonId: 6,
              createdAt: new Date(),
              updatedAt: new Date()
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('PokePages', null, {});
  }
};
