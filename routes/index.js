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
    const recentPages = await getRecentPokePages(6)
    res.render('index', { title: 'a/A Express Skeleton Home', recentPages, });
}))

/* SEARCH
    [] Return all term %like% matches user.
    [] Check if term matches any pokemon names in pokedex.
        [] if yes, grab its pokedex id
            [] perform second search for fusionmon whose pokedex ids match       
    [] Return matches for pokemon name match
    [] use sets to prevent one pokemon showing up twice if both its base pokemon have same substring or name is same as pokemon?

*/
    
router.get('/search/:term', asyncHandler(async(req, res) => {
    res.render('search', {});
}))

module.exports = router;
