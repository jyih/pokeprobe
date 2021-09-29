const db = require('../db/models');
const { Type, Pokedex, FusionPokemon } = db
const { Op } = require('sequelize');


const getFusionPokemonByTrainer = async (trainerId) => {
  return await FusionPokemon.findAll({
    where: {
      trainerId: trainerId
    }
  })
}

async function getFusionPokemonByType(type) {
  const types = await Type.findAll({
    where: {
      type: {
        [Op.iLike]: type
      }
    }
  })

  const typeIds = types.map(type => type.id)

  return await FusionPokemon.findAll({
    include: [{
      model: Pokedex,
      as: 'Pokedex1',
      include: [{
        model: Type,
        as: 'Type1',
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
    }],
    where: {
      [Op.or]: [
        {
          '$Pokedex1.Type1.id$': {
            [Op.in]: typeIds
          }
        },
        {
          '$Pokedex1.Type2.id$': {
            [Op.in]: typeIds
          }
        },
        {
          '$Pokedex2.Type1.id$': {
            [Op.in]: typeIds
          }
        },
        {
          '$Pokedex2.Type2.id$': {
            [Op.in]: typeIds
          }
        }
      ]
    }
  });
}

async function getFusionPokemonByName(name) {
  return await FusionPokemon.findAll({
    where: {
      nickname: {
        [Op.iLike]: `%${name}%`
      }
    }
  });
}

async function getFusionPokemonByBasePokemon(pokemonName) {
  const basePokemon = await Pokedex.findAll({
    where: {
      name: {
        [Op.iLike]: `%${pokemonName}%`
      }
    }
  });

  const baseIds = basePokemon.map(pokemon => pokemon.id)

  return await FusionPokemon.findAll({
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
}

async function searchFusionPokemon(term) {
  const fusionPokemonByBase = await getFusionPokemonByBasePokemon(term);

  const fusionPokemonByName = await getFusionPokemonByName(term);

  const fusionPokemonByType = await getFusionPokemonByType(term)

  const allFusions = fusionPokemonByName.concat(fusionPokemonByBase).concat(fusionPokemonByType);

  const fusionIds = new Set(
    allFusions.map(pokemon => pokemon.id)
  );

  const fusionPokemon = await FusionPokemon.findAll({
    where: {
      id: {
        [Op.in]: Array.from(fusionIds)
      }
    },
    include: [
      {
        model: Pokedex,
        as: 'Pokedex1'
      },
      {
        model: Pokedex,
        as: 'Pokedex2'
      }
    ]
  });

  return fusionPokemon;
}

module.exports = {
  getFusionPokemonByTrainer,
  searchFusionPokemon
}
