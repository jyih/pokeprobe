const express = require("express");
const router = express.Router();
const {
    csrfProtection,
    asyncHandler,
    handleValidationErrors,
} = require("./utils");
const db = require("../db/models");
const { Trainer, Type, Pokedex, FusionPokemon, PokePage } = db;
const { check, validationResult } = require("express-validator");
const { getRecentPokePages } = require("../queries/pokepage-queries")


/* GET home page. */

router.get('/', asyncHandler(async(req, res) => {
    const recentPages = await getRecentPokePages(5)
    console.log(recentPages[0])
    res.render('index', { title: 'a/A Express Skeleton Home', recentPages, });
}))

module.exports = router;