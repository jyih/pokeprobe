const express = require("express");
const router = express.Router();
const {
    asyncHandler,
} = require("./utils");
const { getRecentPokePages } = require("../queries/pokepage-queries");


/* GET landing page. */
router.get('/', asyncHandler(async (req, res) => {
    res.render('landing');
}))

/* GET home page. */
router.get('/home', asyncHandler(async (req, res) => {
    const recentPages = await getRecentPokePages(6)
    res.render('home', { title: 'PokeProbe', recentPages, });
}))

module.exports = router;
