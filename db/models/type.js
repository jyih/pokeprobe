'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    type: DataTypes.STRING
  }, {});
  Type.associate = function (models) {
    Type.belongsToMany(models.Type, {
      through: Pokedex,
      foreignKey: type1Id,
      otherKey: type2Id
    })
  };
  return Type;
};