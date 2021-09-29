const db = require('../db/models');
const { FusionPokemon, Trainer } = db

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

module.exports = {
    findTrainer,
    findAllTrainers
}