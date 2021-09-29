const express = require("express");
const router = express.Router();
const {
    asyncHandler,
} = require("./utils");
const db = require("../db/models");
const { Trainer } = db;
const { Sequelize } = require("../db/models");
const { searchFusionPokemon } = require("../queries/pokemon-queries");

router.get('/:term', asyncHandler(async(req, res) => {
    const term = req.params.term;
    const Op = Sequelize.Op;

    const trainers = await Trainer.findAll({
        where: {
            username: {
                [Op.iLike]: `%${term}%`
            }
        }
    });

    let fusionPokemon = await searchFusionPokemon(term);

    res.render('search-results', {trainers, fusionPokemon});
}));

module.exports = router;
