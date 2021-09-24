const db = require('../db/models');
const { Type, Pokedex, PokePage, FusionPokemon, Trainer } = db
const { Op } = require('sequelize');

const findTrainer = async(pageId) => {
    const trainer = await Trainer.findByPk(pageId, {
        include: [
            FusionPokemon
        ]
    })
    return trainer
}

const findAllTrainers = async() => {
    const trainers = await Trainer.findAll()
    return trainers
}

const findTrainerPokemon = async(pageId) => {
    const pokemon = await Trainer.findAll({
        where: {
            trainerId: pageId
        }
    })
}

module.exports = {
    findTrainer,
    findAllTrainers,
    findTrainerPokemon
}