'use strict';
module.exports = (sequelize, DataTypes) => {
    const Type = sequelize.define('Type', {
        type: DataTypes.STRING
    }, {});
    Type.associate = function(models) {
        Type.belongsToMany(models.Type, {
            as: "type1",
            through: "Pokedex",
            otherKey: "type2Id",
            foreignKey: "type1Id",
        })
        Type.belongsToMany(models.Type, {
                as: "type2",
                through: "Pokedex",
                otherKey: "type1Id",
                foreignKey: "type2Id",
            })
            // Type.belongsTo(models.Pokedex, { foreignKey: "type1Id" })
            // Type.belongsTo(models.Pokedex, { foreignKey: "type2Id" })
    };
    return Type;
};