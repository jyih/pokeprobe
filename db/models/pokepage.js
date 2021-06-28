'use strict';
module.exports = (sequelize, DataTypes) => {
  const PokePage = sequelize.define('PokePage', {
    content: DataTypes.TEXT,
    trainerId: DataTypes.INTEGER,
    fusionPokemonId: DataTypes.INTEGER
  }, {});
  PokePage.associate = function(models) {
    // associations can be defined here
  };
  return PokePage;
};