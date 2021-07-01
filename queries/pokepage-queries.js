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
    {
       include: {
           model: FusionPokemon,
           include: [{
                model: Pokedex,
                as: 'Pokedex1',
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
           },
           {
               model: Pokedex,
               as: 'Pokedex2',
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
           }
        ]
       }
    }
    )
    console.log(pokePage.FusionPokemon.Pokedex1)
    //possible method is making a types array, and if the type is not null, push it into array then, reference array in pug to list types. if you want OR do w/e the hecc you want to reference the types on the page

    // console.log(pokedex)

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
