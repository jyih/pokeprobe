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

router.get('/', csrfProtection, (req, res) => {
  res.render('pokemon-generate', {
    csrfToken: req.csrfToken()
  })
})

router.post('/', csrfProtection, asyncHandler(async (req, res) => {
    const { nickname, pokedexId1, pokedexId2, description } = req.body;
    const trainerId = req.session.auth.userId

    const pokemon = await FusionPokemon.create({
        nickname,
        description,
        pokedexId1,
        pokedexId2,
        trainerId
    })

    const pokepage = await PokePage.create({
        content: description,
        trainerId,
        fusionPokemonId: pokemon.id,
    })

    res.redirect(`/pokepages/${pokepage.id}`);
}))

module.exports = router;
