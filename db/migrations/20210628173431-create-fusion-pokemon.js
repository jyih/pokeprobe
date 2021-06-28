'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('FusionPokemon', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            nickname: {
                allowNull: false,
                type: Sequelize.STRING(20)
            },
            description: {
                type: Sequelize.TEXT
            },
            pokedexId1: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            pokedexId2: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            trainerId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('FusionPokemon');
    }
};