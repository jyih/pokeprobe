var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require('./utils')
const db = require('../db/models')
const { Trainer } = db
const bcrypt = require('bcrypt')
    // express validator necessary

/* GET users listing. */
// ? change route to something like /signup
router.get('/', csrfProtection, asyncHandler(async(req, res) => {
    res.render('trainer-signup', { csrfToken: req.csrfToken() })
}));

router.post('/', csrfProtection, asyncHandler(async(req, res) => {
    console.log(req.body)
    const { username, firstName, lastName, email, bio, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    await Trainer.create({
        username,
        firstName,
        lastName,
        email,
        bio,
        password: hashedPassword
    })
    res.redirect('/')
}))


module.exports = router;