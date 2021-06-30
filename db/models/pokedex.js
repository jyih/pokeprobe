'use strict';
module.exports = (sequelize, DataTypes) => {
    const Pokedex = sequelize.define('Pokedex', {
        name: DataTypes.STRING,
        type1Id: DataTypes.INTEGER,
        type2Id: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });
    Pokedex.associate = function(models) {
        //try 6
        Pokedex.belongsTo(models.Type, { as: 'Type1', foreignKey: 'type1Id' })
        Pokedex.belongsTo(models.Type, { as: 'Type2', foreignKey: 'type2Id' })

        Pokedex.hasMany(models.FusionPokemon, { as: 'Pokedex1', foreignKey: 'pokedexId1' })
        Pokedex.hasMany(models.FusionPokemon, { as: 'Pokedex2', foreignKey: 'pokedexId2' })
    };
    return Pokedex;
};