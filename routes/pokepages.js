const express = require("express");
const router = express.Router();

const {
    csrfProtection,
    asyncHandler,
} = require("./utils");

const {
    findAllPokePages,
    findPokePage,
    findPokemonTypes
} = require("../queries/pokepage-queries")


router.get('/', asyncHandler(async (req, res) => {
    const pokePages = await findAllPokePages()
    res.render("pokepages/pokepages", { pokePages })
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const pokePage = await findPokePage(req.params.id)

    const fusionPokemonTypes = await findPokemonTypes(req.params.id)

    const trainer = pokePage.Trainer
    const nickname = pokePage.FusionPokemon.nickname
    const description = pokePage.FusionPokemon.description
    const id1 = pokePage.FusionPokemon.pokedexId1
    const id2 = pokePage.FusionPokemon.pokedexId2
    const content = pokePage.content
    const basemons = [
        pokePage.FusionPokemon.Pokedex1.name,
        pokePage.FusionPokemon.Pokedex2.name,
    ]
    basemon1 = basemons[0]
    basemon2 = basemons[1]

    const confirmDelete = () => {
        if (window.confirm("Are you sure to delete?")) {
            window.open(`/pokepages/delete/${pokePage.id}`)
        }
    };

    const imgUrl = `https://images.alexonsager.net/pokemon/fused/${id1}/${id1}.${id2}.png`

    res.render("pokepages/pokepages-id", {
        trainer,
        pokePage,
        imgUrl,
        nickname,
        description,
        content,
        fusionPokemonTypes,
        basemon1,
        basemon2,
        confirmDelete,
    })
}))

router.get('/edit/:id(\\d+)', csrfProtection, asyncHandler(async (req, res) => {
    const pokemonId = req.params.id
    const pokePage = await findPokePage(pokemonId)
    const id1 = pokePage.FusionPokemon.pokedexId1
    const id2 = pokePage.FusionPokemon.pokedexId2
    const name = pokePage.FusionPokemon.nickname
    const currentDescription = pokePage.content

    const imgUrl = `https://images.alexonsager.net/pokemon/fused/${id1}/${id1}.${id2}.png`
    res.render('pokepages/pokepages-edit', {
        pokePage, imgUrl, name, pokemonId,
        currentDescription,
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
    res.redirect("/home")
}))

module.exports = router
