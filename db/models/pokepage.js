'use strict';
module.exports = (sequelize, DataTypes) => {
  const PokePage = sequelize.define('PokePage', {
    content: DataTypes.TEXT,
    trainerId: DataTypes.INTEGER,
    fusionPokemonId: DataTypes.INTEGER
  }, {});
  PokePage.associate = function (models) {
    PokePage.belongsTo(models.FusionPokemon, { foreignKey: 'fusionPokemonId' })
    PokePage.belongsTo(models.Trainer, { foreignKey: 'trainerId' })

    PokePage.hasMany(models.Comment, { foreignKey: 'pokePageId' })
  };
  return PokePage;
};