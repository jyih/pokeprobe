const express = require("express");
const router = express.Router();
const {
    csrfProtection,
    asyncHandler,
    handleValidationErrors, //TBD: add. backend valid.
} = require("./utils");
const db = require("../db/models");
const { FusionPokemon, PokePage } = db;

router.get('/', csrfProtection, (req, res) => {
    res.render('pokemon-generate', {
        csrfToken: req.csrfToken()
    })
})

// To do: additional backend validation
router.post('/', csrfProtection, asyncHandler(async(req, res) => {
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