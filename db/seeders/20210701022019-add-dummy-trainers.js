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
      return queryInterface.bulkInsert('Trainers', [
        {
            username: 'Ash',
            firstName: 'Ash',
            lastName: 'Ketchum',
            email: 'ash@catchemall.com',
            password: 'pikachu',
            bio: 'Pikachu was my very first pokemon!',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        {
            username: 'TheProf',
            firstName: 'Professor',
            lastName: 'Oak',
            email: 'prof@catchemall.com',
            password: 'bulbasaur',
            bio: 'I forgot my own grandson\'s name.',
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        {
            username: 'BestTrainerEver',
            firstName: 'Gary',
            lastName: 'Oak',
            email: 'gary@catchemall.com',
            password: 'eevee',
            bio: 'Smell ya later!',
            createdAt: new Date(),
            updatedAt: new Date(),
          }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Trainers', null, {});
  }
};
