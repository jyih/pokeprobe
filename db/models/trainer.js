'use strict';
module.exports = (sequelize, DataTypes) => {
  const Trainer = sequelize.define('Trainer', {
    username: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING.BINARY,
    bio: DataTypes.TEXT
  }, {});
  Trainer.associate = function (models) {
    Trainer.hasMany(models.FusionPokemon, { foreignKey: 'trainerId' })
    Trainer.hasMany(models.Comment, { foreignKey: 'trainerId' })
    Trainer.hasMany(models.PokePage, { foreignKey: 'trainerId' })
  };
  return Trainer;
};