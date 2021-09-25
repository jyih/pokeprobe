const db = require('../db/models');
const { Type, Pokedex } = db
const { Op } = require('sequelize');


async function lookupPokemon1(typeId) {
  /*
    Type.hasMany(models.Pokedex, { as: 'Type1', foreignKey: 'type1Id' })
    Pokedex.belongsTo(models.Type, { as: 'Type1', foreignKey: 'type1Id' })
    Pokedex.belongsTo(models.Type, { as: 'Type2', foreignKey: 'type2Id' })
  */

  let results = await Pokedex.findAll({
    include: [{
      model: Type,
      as: 'Type1'
    }],
    where: {
      type1Id: typeId
    },
  });
  // let names = results.map(pokemon => pokemon.name)
  let pokedex = results.map(pokedex => pokedex.Type1.type)
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

pokemon.map(pokemon => {
    let mon = {}
    mon[`${pokemon.name}`] = [pokemon.type1Id, pokemon.type2Id]
    return mon;
  })
};

async function lookupPokemon6(typeName) {
  // Pokedex.belongsTo(models.Type, { as: 'Type1', foreignKey: 'type1Id' })
  // Pokedex.belongsTo(models.Type, { as: 'Type2', foreignKey: 'type2Id' })
  // Type.hasMany(models.Pokedex, { as: 'Type1', foreignKey: 'type1Id' })
  // Type.hasMany(models.Pokedex, { as: 'Type2', foreignKey: 'type2Id' })
  let pokedexes = await Pokedex.findAll({
    include: [
      {
        model: Type,
        as: 'Type1',
      },
      {
        model: Type,
        as: 'Type2'
      }
    ],
  })

  let middle = pokedexes.filter(pokedex => {
    return (
      pokedex.Type1.type === typeName
      || (pokedex.Type2
        ? pokedex.Type2.type === typeName
        : null === typeName)
    )
  })
  let pokemon = middle.map(pokedex => {
    let mon = {}
    mon[`${pokedex.name}`] = [];
    mon[`${pokedex.name}`].push(pokedex.Type1.type)
    mon[`${pokedex.name}`].push(pokedex.Type2 ? pokedex.Type2.type : null)
    return mon;
  })
};

async function lookupPokemon7(typeName) {
  let typing = await Type.findOne({
    where: {
      type: typeName
    }
  })

  let pokedexes = await Pokedex.findAll({
    include: [
      {
        model: Type,
        as: 'Type1',
      },
      {
        model: Type,
        as: 'Type2'
      }
    ],
    where: {
      [Op.or]: {
        type1Id: typing.id,
        type2Id: typing.id
      }
    }
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
