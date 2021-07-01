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
router.get('/', function(req, res) {
    const recentPages = getRecentPokePages(5)
    res.render('index', { title: 'a/A Express Skeleton Home', recentPages });
});

module.exports = router;