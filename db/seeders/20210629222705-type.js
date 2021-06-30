'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Types', [
      { type: 'Normal', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Fighting', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Flying', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Poison', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Ground', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Rock', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Bug', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Ghost', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Steel', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Fire', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Water', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Grass', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Electric', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Psychic', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Ice', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Dragon', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Dark', createdAt: new Date(), updatedAt: new Date() },
      { type: 'Fairy', createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Types', null, {});
  }
};
