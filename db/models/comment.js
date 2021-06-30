'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    content: DataTypes.TEXT,
    trainerId: DataTypes.INTEGER,
    pokePageId: DataTypes.INTEGER
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(models.Trainer, { foreignKey: 'trainerId' })
    Comment.belongsTo(models.PokePage, { foreignKey: 'pokePageId' })
  };
  return Comment;
};