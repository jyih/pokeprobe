'use strict';
module.exports = (sequelize, DataTypes) => {
  const FusionPokemon = sequelize.define('FusionPokemon', {
    nickname: DataTypes.STRING,
    description: DataTypes.TEXT,
    pokedexId1: DataTypes.INTEGER,
    pokedexId2: DataTypes.INTEGER,
    trainerId: DataTypes.INTEGER
  }, {});
  FusionPokemon.associate = function(models) {
    // associations can be defined here
  };
  return FusionPokemon;
};