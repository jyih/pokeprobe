'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pokedex = sequelize.define('Pokedex', {
        name: DataTypes.STRING,
        type1Id: DataTypes.INTEGER,
        type2Id: DataTypes.INTEGER
    }, {});
    Pokedex.associate = function(models) {
        // associations can be defined here
        Pokedex.hasMany(models.Type, { foreignKey: "type1Id" })
        Pokedex.hasMany(models.Type, { foreignKey: "type2Id" })
    };
    return Pokedex;
};