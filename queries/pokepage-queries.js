const db = require('../db/models');
const { Type, Pokedex, PokePage, FusionPokemon } = db
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


module.exports = {
    findAllPokePages,
    findPokePageById,
    findFusion
}