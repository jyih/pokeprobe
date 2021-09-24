const db = require('../db/models');
const { Type, Pokedex, FusionPokemon } = db
const { Op } = require('sequelize');

async function searchFusionPokemonByNameOrBase(term) {
    const basePokemon = await Pokedex.findAll({
        where: {
            name: {
                [Op.iLike]: `%${term}%`
            }
        }
    });

    const baseIds = basePokemon.map(pokemon => pokemon.id)

    const fusionPokemonByBase = await FusionPokemon.findAll({
        where: {
            [Op.or]: [
                {
                    pokedexId1: {
                        [Op.in]: baseIds
                    }
                },
                {
                    pokedexId2: {
                        [Op.in]: baseIds
                    }
                }
            ]
        }
    })

    const fusionPokemonByName = await FusionPokemon.findAll({
        where: {
            nickname: {
                [Op.iLike]: `%${term}%`
            }
        }
    });

    const allFusions = fusionPokemonByName.concat(fusionPokemonByBase)

    const fusionIds = new Set(
        allFusions.map(pokemon => pokemon.id)
    )

    const fusionPokemon = await FusionPokemon.findAll({
        where: {
            id: {
                [Op.in]: Array.from(fusionIds)
            }
        }
    })

    return fusionPokemon
}

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
  // console.log(results)
  // let names = results.map(pokemon => pokemon.name)
  // console.log(names)
  // console.log(results)
  let pokedex = results.map(pokedex => pokedex.Type1.type)
//   console.log(pokedex)
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
//   console.log(pokemon)
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
//   console.log(pokemon)
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

  // console.log(pokemon.map(pokedex => pokedex.Type1.type))
  // console.log(pokemon.map(pokedex => pokedex.Type2.type))
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
//   console.log(pokemon)
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

//   console.log(pokedexes)
}

module.exports = {
  lookupPokemon1,
  lookupPokemon2,
  lookupPokemon3,
  lookupPokemon4,
  lookupPokemon5,
  lookupPokemon6,
  lookupPokemon7,
  searchFusionPokemonByNameOrBase
}
