'use strict';
module.exports = (sequelize, DataTypes) => {
  const FusionPokemon = sequelize.define('FusionPokemon', {
    nickname: DataTypes.STRING,
    description: DataTypes.TEXT,
    pokedexId1: DataTypes.INTEGER,
    pokedexId2: DataTypes.INTEGER,
    trainerId: DataTypes.INTEGER
  }, {});
  FusionPokemon.associate = function (models) {
    FusionPokemon.belongsTo(models.Pokedex, { as: 'Pokedex1', foreignKey: 'pokedexId1' })
    FusionPokemon.belongsTo(models.Pokedex, { as: 'Pokedex2', foreignKey: 'pokedexId2' })
    FusionPokemon.belongsTo(models.Trainer, { foreignKey: 'trainerId' })

    FusionPokemon.hasOne(models.PokePage, { foreignKey: 'fusionPokemonId' })
  };
  return FusionPokemon;
};