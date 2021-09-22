const db = require('../db/models');
const { Type, Pokedex, PokePage, FusionPokemon, Trainer } = db
const { Op } = require('sequelize');

const findAllPokePages = async () => {
    const pokePages = await PokePage.findAll()
    // console.log(pokePages)
    return pokePages
}

// const findPokePageById = async(pageId) => {
//     const pokePage = await PokePage.findByPk(pageId)
//     return pokePage
// }

const findPokePage = async (pageId) => {
    const pokePage = await PokePage.findByPk(pageId, {
        include: [
            FusionPokemon
        ]
    })
    return pokePage
}

const getRecentPokePages = async (numberOfPosts) => {
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

const findPokemonTypes = async (pageId) => {
    const pokePage = await PokePage.findByPk(pageId, {
        include: {
            model: FusionPokemon,
            include: [{
                model: Pokedex,
                as: 'Pokedex1',
                include: [{
                    model: Type,
                    as: 'Type1'
                },
                {
                    model: Type,
                    as: 'Type2'
                }]
            },
            {
                model: Pokedex,
                as: 'Pokedex2',
                include: [{
                    model: Type,
                    as: 'Type1'
                },
                {
                    model: Type,
                    as: 'Type2'
                }]
            }]
        }
    })

    const pokedexId1Type1 = pokePage.FusionPokemon.Pokedex1.Type1.type;
    const pokedexId1Type2 = pokePage.FusionPokemon.Pokedex1.Type2 ? pokePage.FusionPokemon.Pokedex1.Type2.type : 'none';

    const pokedexId2Type1 = pokePage.FusionPokemon.Pokedex2.Type1.type;
    const pokedexId2Type2 = pokePage.FusionPokemon.Pokedex2.Type2 ? pokePage.FusionPokemon.Pokedex2.Type2.type : 'none';

    const typesArr = [pokedexId1Type1, pokedexId1Type2, pokedexId2Type1, pokedexId2Type2];
    const fusionPokemonTypes = typesArr.filter(type => type !== 'none');

    return Array.from(new Set(fusionPokemonTypes)); //remove duplicates
}

module.exports = {
    findAllPokePages,
    getRecentPokePages,
    // findPokePageById,
    findPokePage,
    findPokemonTypes
}
