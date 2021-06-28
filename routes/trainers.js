var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler, handleValidationErrors } = require('./utils')
const db = require('../db/models')
const { Trainer } = db
const bcrypt = require('bcrypt')
const { check, validationResult } = require("express-validator")
    // express validator necessary

/* GET users listing. */
const createFalsyCheck = (fieldName, messageName, message = `${messageName} cannot be blank`) => {
    return check(fieldName)
        .exists({ checkFalsy: true })
        .withMessage(message)
}



const formValidation = [
    check('trainerName')
    .exists({ checkFalsy: true })
    .withMessage('Trainer Name cannot be blank'),
    check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('First Name cannot be blank'),
    check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Last Name cannot be blank'),
    check('email')
    .exists({ checkFalsy: true })
    .withMessage('Email cannot be blank'),
    check('password')
    .exists({ checkFalsy: true })
    .withMessage('Password cannot be blank'),
    check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Confirm Password cannot be blank'),
]

// ? change route to something like /signup
router.get('/', csrfProtection, asyncHandler(async(req, res) => {
    res.render('trainer-signup', { csrfToken: req.csrfToken() })
}));

router.post('/', formValidation, csrfProtection, asyncHandler(async(req, res) => {
    console.log(req.body)
    const { trainerName, firstName, lastName, email, bio, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)
    await Trainer.create({
        username: trainerName,
        firstName,
        lastName,
        email,
        bio,
        password: hashedPassword
    })
    res.redirect('/')
}))


module.exports = router;