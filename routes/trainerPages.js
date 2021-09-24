const express = require("express");
const router = express.Router();

const {
    csrfProtection,
    asyncHandler,
    handleValidationErrors,
} = require("./utils");

const db = require("../db/models");
const { Trainer, Type, Pokedex, FusionPokemon, PokePage } = db;
const { check, validationResult } = require("express-validator");
const { findTrainer, findAllTrainers, findTrainerPokemon } = require("../queries/trainer-queries")

router.get('/', asyncHandler(async (req, res) => {
    const trainers = await findAllTrainers()
    res.render("trainerPages/allTrainers", { trainers })
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const trainer = await findTrainer(req.params.id)
    const pokemon = await findTrainerPokemon(req.params.id)
    res.render("trainerPages/trainerPage", {trainer, pokemon})
}))

module.exports = router
