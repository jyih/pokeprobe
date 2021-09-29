const express = require("express");
const router = express.Router();

const {
    asyncHandler,
} = require("./utils");

const {
    findTrainer, findAllTrainers
} = require("../queries/trainer-queries")

const {
    getFusionPokemonByTrainer
} = require("../queries/pokemon-queries")


router.get('/', asyncHandler(async (req, res) => {
    const trainers = await findAllTrainers()
    res.render("trainerPages/allTrainers", { trainers })
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const trainer = await findTrainer(req.params.id)
    const pokemon = await getFusionPokemonByTrainer(req.params.id)
    const pageId = req.params.id
    let allowed = false
    if (res.locals.trainer && res.locals.trainer.id == pageId) allowed = true
    res.render("trainerPages/trainerPage", { trainer, pokemon, allowed })
}))

module.exports = router
