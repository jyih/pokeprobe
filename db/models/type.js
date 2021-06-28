'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    type: DataTypes.STRING
  }, {});
  Type.associate = function(models) {
    // associations can be defined here
  };
  return Type;
};