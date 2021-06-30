'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    type: DataTypes.STRING
  }, {});
  Type.associate = function (models) {
    // Type.belongsToMany(models.Type, {
    //   as: 'Type',
    //   through: 'Pokedex',
    //   foreignKey: 'type1Id',
    //   otherKey: 'type2Id'
    // })

    //try 6
    Type.hasMany(models.Pokedex, { as: 'aType', foreignKey: 'type1Id' })
    Type.hasMany(models.Pokedex, { as: 'bType', foreignKey: 'type2Id' })


  };
  return Type;
};