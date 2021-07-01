const db = require('../db/models');
const { Type, Pokedex, PokePage, FusionPokemon, Trainer } = db
const { Op } = require('sequelize');

const findAllPokePages = async() => {
    const pokePages = await PokePage.findAll()
        // console.log(pokePages)
    return pokePages
}

// const findPokePageById = async(pageId) => {
//     const pokePage = await PokePage.findByPk(pageId)
//     return pokePage
// }

const findFusion = async(pageId) => {
    const pokePage = await PokePage.findByPk(pageId, {
        include: [
            FusionPokemon
        ]
    })
    return pokePage
}

const getRecentPokePages = async(numberOfPosts) => {
    const pokePages = await PokePage.findAll({
        order: [
            [
                'id', 'DESC'
            ]
        ],
        limit: numberOfPosts,
        include: [
            Trainer,
            FusionPokemon
        ]
    })
    return pokePages
}

const findFusionInfo = async(pageId) => {
    const types = await Type.findAll()
    const pokePage = await PokePage.findByPk(pageId, 
    // {
    //    include: {
    //        model: FusionPokemon,
    //        include: [{
    //             model: Pokedex,
    //             as: 'Pokedex1',
    //             include: Type
    //        },
    //        {
    //            model: Pokedex,
    //            as: 'Pokedex2',
    //            include: Type
    //        }
    //     ]
    //    }
    // }
    )
    console.log(pokePage)
    const pokedex = await Pokedex.findAll();

    const pokedexId1 = pokePage.FusionPokemon.pokedexId1
    const pokedexId2 = pokePage.FusionPokemon.pokedexId2

    pokePage.pokemon1Types = types[pokePage.FusionPokemon.pokedexId1]
}

module.exports = {
    findAllPokePages,
    getRecentPokePages,
    // findPokePageById,
    findFusion,
    findFusionInfo
}
