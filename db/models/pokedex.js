'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pokedex = sequelize.define('Pokedex', {
    name: DataTypes.STRING,
    type1Id: DataTypes.INTEGER,
    type2Id: DataTypes.INTEGER
  }, {});
  Pokedex.associate = function (models) {
    //try 6
    Pokedex.belongsTo(models.Type, { as: 'aType', foreignKey: 'type1Id' })
    Pokedex.belongsTo(models.Type, { as: 'bType', foreignKey: 'type2Id' })


  };
  return Pokedex;
};