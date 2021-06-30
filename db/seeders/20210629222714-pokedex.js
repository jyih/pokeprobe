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
    return queryInterface.bulkInsert('Pokedexes', [
      { name: 'Bulbasaur', type1Id: 12, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ivysaur', type1Id: 12, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Venusaur', type1Id: 12, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Charmander', type1Id: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Charmeleon', type1Id: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Charizard', type1Id: 10, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Squirtle', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Wartortle', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Blastoise', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Caterpie', type1Id: 7, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Metapod', type1Id: 7, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Butterfree', type1Id: 7, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Weedle', type1Id: 7, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kakuna', type1Id: 7, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Beedrill', type1Id: 7, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pidgey', type1Id: 1, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pidgeotto', type1Id: 1, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pidgeot', type1Id: 1, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rattata', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Raticate', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Spearow', type1Id: 1, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Fearow', type1Id: 1, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ekans', type1Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Arbok', type1Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pikachu', type1Id: 13, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Raichu', type1Id: 13, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sandshrew', type1Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Sandslash', type1Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nidoran♀', type1Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nidorina', type1Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nidoqueen', type1Id: 4, type2Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nidoran♂', type1Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nidorino', type1Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Nidoking', type1Id: 4, type2Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Clefairy', type1Id: 18, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Clefable', type1Id: 18, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vulpix', type1Id: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ninetales', type1Id: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jigglypuff', type1Id: 1, type2Id: 18, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Wigglytuff', type1Id: 1, type2Id: 18, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Zubat', type1Id: 4, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Golbat', type1Id: 4, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Oddish', type1Id: 12, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gloom', type1Id: 12, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vileplume', type1Id: 12, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Paras', type1Id: 7, type2Id: 12, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Parasect', type1Id: 7, type2Id: 12, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Venonat', type1Id: 7, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Venomoth', type1Id: 7, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Diglett', type1Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dugtrio', type1Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Meowth', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Persian', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Psyduck', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Golduck', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mankey', type1Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Primeape', type1Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Growlithe', type1Id: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Arcanine', type1Id: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Poliwag', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Poliwhirl', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Poliwrath', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Abra', type1Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kadabra', type1Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Alakazam', type1Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Machop', type1Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Machoke', type1Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Machamp', type1Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Bellsprout', type1Id: 12, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Weepinbell', type1Id: 12, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Victreebel', type1Id: 12, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tentacool', type1Id: 11, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tentacruel', type1Id: 11, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Geodude', type1Id: 6, type2Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Graveler', type1Id: 6, type2Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Golem', type1Id: 6, type2Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ponyta', type1Id: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rapidash', type1Id: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Slowpoke', type1Id: 11, type2Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Slowbro', type1Id: 11, type2Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Magnemite', type1Id: 13, type2Id: 9, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Magneton', type1Id: 13, type2Id: 9, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Farfetch\'d', type1Id: 1, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Doduo', type1Id: 1, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dodrio', type1Id: 1, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Seel', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dewgong', type1Id: 11, type2Id: 15, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Grimer', type1Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Muk', type1Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Shellder', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cloyster', type1Id: 11, type2Id: 15, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gastly', type1Id: 8, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Haunter', type1Id: 8, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gengar', type1Id: 8, type2Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Onix', type1Id: 6, type2Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Drowzee', type1Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hypno', type1Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Krabby', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kingler', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Voltorb', type1Id: 13, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Electrode', type1Id: 13, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Exeggcute', type1Id: 12, type2Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Exeggutor', type1Id: 12, type2Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Cubone', type1Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Marowak', type1Id: 5, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hitmonlee', type1Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Hitmonchan', type1Id: 2, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lickitung', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Koffing', type1Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Weezing', type1Id: 4, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rhyhorn', type1Id: 5, type2Id: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Rhydon', type1Id: 5, type2Id: 6, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Chansey', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tangela', type1Id: 12, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kangaskhan', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Horsea', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Seadra', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Goldeen', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Seaking', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Staryu', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Starmie', type1Id: 11, type2Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mr. Mine', type1Id: 14, type2Id: 18, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Scyther', type1Id: 7, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jynx', type1Id: 15, type2Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Electabuzz', type1Id: 13, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Magmar', type1Id: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Pinsir', type1Id: 7, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Tauros', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Magikarp', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Gyarados', type1Id: 11, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Lapras', type1Id: 11, type2Id: 15, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Ditto', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Eevee', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Vaporeon', type1Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Jolteon', type1Id: 13, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Flareon', type1Id: 10, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Porygon', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Omanyte', type1Id: 6, type2Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Omastar', type1Id: 6, type2Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabuto', type1Id: 6, type2Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Kabutops', type1Id: 6, type2Id: 11, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Aerodactyl', type1Id: 6, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Snorlax', type1Id: 1, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Articuno', type1Id: 15, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Zapdos', type1Id: 13, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Moltres', type1Id: 10, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dratini', type1Id: 16, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dragonair', type1Id: 16, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Dragonite', type1Id: 16, type2Id: 3, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mewtwo', type1Id: 14, createdAt: new Date(), updatedAt: new Date() },
      { name: 'Mew', type1Id: 14, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
