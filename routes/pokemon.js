const express = require("express");
const router = express.Router();
const {
  csrfProtection,
  asyncHandler,
  handleValidationErrors,
} = require("./utils");
const db = require("../db/models");
const { Trainer, Type, Pokedex, FusionPokemon } = db;
const { check, validationResult } = require("express-validator");

router.get('/', csrfProtection, (req, res) => {
  res.render('pokemon-generate', {
    csrfToken: req.csrfToken()
  })
})

// router.post('/', {

// })

module.exports = router;