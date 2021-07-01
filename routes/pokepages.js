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
const { findAllPokePages, findFusion, findFusionInfo } = require("../queries/pokepage-queries")



router.get('/', asyncHandler(async(req, res) => {
    const pokePages = await findAllPokePages()
        // console.log(pokePages)
    res.render("pokepages/pokepages", { pokePages })
}))


router.get('/test', asyncHandler(async (req, res) => {
    const pokedex = await Pokedex.findByPk(2, {
        include: [
            {
            model: Type,
            as: 'Type1'
            },
            {
            model: Type,
            as: 'Type2'
            }
        ]
    });

    // const type = await Type.findByPk(1)

    console.log(pokedex.Type1)

}))

router.get('/:id', asyncHandler(async(req, res) => {
    const pokePage = await findFusion(req.params.id)
    const fusionInfo = await findFusionInfo(req.params.id)
    console.log(fusionInfo)
    const nickname = pokePage.FusionPokemon.nickname
    const description = pokePage.FusionPokemon.description
    const id1 = pokePage.FusionPokemon.pokedexId1
    const id2 = pokePage.FusionPokemon.pokedexId2
        // also get names from pokedex
    const imgUrl = `https://images.alexonsager.net/pokemon/fused/${id1}/${id1}.${id2}.png`
    res.render("pokepages/pokepages-id", { imgUrl, nickname, description })
}))

router.get('/edit/:id(\\d+)', csrfProtection, asyncHandler(async(req, res) => {
    const pokemonId = req.params.id
    const pokePage = await PokePage.findByPk(pokemonId)
    res.render('pokepages-edit', { pokePage, csrfToken: req.csrfToken() })
}))
router.post('/edit/:id(\\d+)', csrfProtection, asyncHandler(async(req, res) => {
    const pokemonId = req.params.id
    const pokePageToUpdate = await PokePage.findByPk(pokemonId)

    const {
        content,
    } = req.body



    await pokePageToUpdate.update({})
}))



router.get('/delete/:id(\\d+)', asyncHandler(async(req, res) => {

}))


<<<<<<< HEAD
module.exports = router
=======

module.exports = router
>>>>>>> levi-local
