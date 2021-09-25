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
const { findAllPokePages, findPokePage, findPokemonTypes } = require("../queries/pokepage-queries")


router.get('/', asyncHandler(async (req, res) => {
    const pokePages = await findAllPokePages()
    res.render("pokepages/pokepages", { pokePages })
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const pokePage = await findPokePage(req.params.id)

    const fusionPokemonTypes = await findPokemonTypes(req.params.id)

    const nickname = pokePage.FusionPokemon.nickname
    const description = pokePage.FusionPokemon.description
    const id1 = pokePage.FusionPokemon.pokedexId1
    const id2 = pokePage.FusionPokemon.pokedexId2
    const content = pokePage.content
    const basemons = [
        pokePage.FusionPokemon.Pokedex1.name,
        pokePage.FusionPokemon.Pokedex2.name,
    ]

    const imgUrl = `https://images.alexonsager.net/pokemon/fused/${id1}/${id1}.${id2}.png`

    res.render("pokepages/pokepages-id", {
        pokePage,
        imgUrl,
        nickname,
        description,
        content,
        fusionPokemonTypes,
        basemons
    })
}))

router.get('/edit/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const pokemonId = req.params.id
    const pokePage = await findPokePage(pokemonId)
    const id1 = pokePage.FusionPokemon.pokedexId1
    const id2 = pokePage.FusionPokemon.pokedexId2
    const name = pokePage.FusionPokemon.nickname
    // const currentDescription = pokePage.FusionPokemon.description
    const currentDescription = pokePage.content

    const imgUrl = `https://images.alexonsager.net/pokemon/fused/${id1}/${id1}.${id2}.png`
    res.render('pokepages/pokepages-edit', {
        pokePage, imgUrl, name, pokemonId,
        currentDescription,
        // currentContent,
        csrfToken: req.csrfToken()
    })
}))

router.post('/edit/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const pokemonId = req.params.id;
    const pokePageToUpdate = await findPokePage(pokemonId)
    const {
        content,
    } = req.body

    await pokePageToUpdate.update({ content })

    res.redirect(`/pokepages/${pokemonId}`)
}))

router.get('/delete/:id(\\d+)', asyncHandler(async (req, res) => {
    const pokemonId = req.params.id
    const pokePageToDelete = await findPokePage(pokemonId)
    const pokemon = pokePageToDelete.FusionPokemon
    pokePageToDelete.destroy()
    pokemon.destroy()
    res.redirect("/")
}))

module.exports = router
