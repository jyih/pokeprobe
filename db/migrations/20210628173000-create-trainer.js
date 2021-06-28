'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Trainers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            username: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING(20)
            },
            firstName: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            lastName: {
                allowNull: false,
                type: Sequelize.STRING(50)
            },
            email: {
                allowNull: false,
                unique: true,
                type: Sequelize.STRING(50)
            },
            password: {
                allowNull: false,
                type: Sequelize.STRING(255)
            },
            bio: {
                type: Sequelize.TEXT
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
        return queryInterface.dropTable('Trainers');
    }
};