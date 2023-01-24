'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    options.tableName = 'Types';     // define table name in options object
    return queryInterface.bulkInsert(options, [
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
    options.tableName = 'Types';     // define table name in options object
    return queryInterface.bulkDelete(options, null, {});
  }
};