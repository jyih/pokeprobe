'use strict';
module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define('Type', {
        type: DataTypes.STRING
    }, {});
    Type.associate = function (models) {
        Type.hasMany(models.Pokedex, { as: 'Type1', foreignKey: 'type1Id' })
        Type.hasMany(models.Pokedex, { as: 'Type2', foreignKey: 'type2Id' })
    };
    return Type;
};