const db = require('../db/models');
const { Type, Pokedex } = db
const { Op } = require('sequelize');


async function lookupPokemon1(typeId) {
  /*
    Type.hasMany(models.Pokedex, { as: 'aType', foreignKey: 'type1Id' })
    Pokedex.belongsTo(models.Type, { as: 'aType', foreignKey: 'type1Id' })
    Pokedex.belongsTo(models.Type, { as: 'bType', foreignKey: 'type2Id' })
  */

  let results = await Pokedex.findAll({
    include: [{
      model: Type,
      as: 'aType'
    }],
    where: {
      type1Id: typeId
    },
  });
  // console.log(results)
  // let names = results.map(pokemon => pokemon.name)
  // console.log(names)
  // console.log(results)
  let pokedex = results.map(pokedex => pokedex.aType.type)
  console.log(pokedex)
};

async function lookupPokemon2(typeName) {
  let pokemon = await Type.findAll({
    where: {
      type: typeName
    },
    include: [
      Pokedex
    ],
  });
  console.log(pokemon)
};

async function lookupPokemon3(name) {
  let typing = await Type.findOne({
    where: {
      type: name
    }
  })

  return typing.id
};

async function lookupPokemon4(type1Id) {
  let pokemon = await Pokedex.findAll({
    where: {
      type1Id
    }
  })
  console.log(pokemon)
};

async function lookupPokemon5(typeName) {
  let typing = await Type.findOne({
    where: {
      type: typeName
    }
  })

  let pokemon = await Pokedex.findAll({
    where: {
      [Op.or]: {
        type1Id: typing.id,
        type2Id: typing.id
      }
    }
  })

  console.log(pokemon.map(pokemon => pokemon.name))
  console.log(pokemon.map(pokemon => {
    let mon = {}
    mon[`${pokemon.name}`] = [pokemon.type1Id, pokemon.type2Id]
    return mon;
  }))
};

async function lookupPokemon6(typeName) {
  // Pokedex.belongsTo(models.Type, { as: 'aType', foreignKey: 'type1Id' })
  // Pokedex.belongsTo(models.Type, { as: 'bType', foreignKey: 'type2Id' })
  // Type.hasMany(models.Pokedex, { as: 'aType', foreignKey: 'type1Id' })
  // Type.hasMany(models.Pokedex, { as: 'bType', foreignKey: 'type2Id' })
  let pokedexes = await Pokedex.findAll({
    include: [
      {
        model: Type,
        as: 'aType',
      },
      {
        model: Type,
        as: 'bType'
      }
    ],
  })

  // console.log(pokemon.map(pokedex => pokedex.aType.type))
  // console.log(pokemon.map(pokedex => pokedex.bType.type))
  let middle = pokedexes.filter(pokedex => {
    return (
      pokedex.aType.type === typeName
      || (pokedex.bType
        ? pokedex.bType.type === typeName
        : null === typeName)
    )
  })
  let pokemon = middle.map(pokedex => {
    let mon = {}
    mon[`${pokedex.name}`] = [];
    mon[`${pokedex.name}`].push(pokedex.aType.type)
    mon[`${pokedex.name}`].push(pokedex.bType ? pokedex.bType.type : null)
    return mon;
  })
  console.log(pokemon)
};

async function lookupPokemon7(typeName) {
  let pokedexes = await Pokedex.findAll({
    include: [
      {
        model: Type,
        as: 'aType',
      },
      {
        model: Type,
        as: 'bType'
      }
    ],
  })
}

module.exports = {
  lookupPokemon1,
  lookupPokemon2,
  lookupPokemon3,
  lookupPokemon4,
  lookupPokemon5,
  lookupPokemon6,
  lookupPokemon7,
}