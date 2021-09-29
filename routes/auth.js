const express = require("express");
const router = express.Router();
const {
    csrfProtection,
    asyncHandler,
    handleValidationErrors,
} = require("./utils");
const db = require("../db/models");
const { Trainer } = db;
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const {
    loginTrainer,
    logoutTrainer,
} = require('../auth')
// express validator necessary

const formValidation = [
    check("trainerName")
        .exists({ checkFalsy: true })
        .withMessage("Trainer Name cannot be blank")
        .isLength({ max: 20 })
        .withMessage('Trainer Name cannot be longer than 20 characters'),
    check("firstName")
        .exists({ checkFalsy: true })
        .withMessage("First Name cannot be blank")
        .isLength({ max: 50 })
        .withMessage('First Name cannot be longer than 50 characters'),
    check("lastName")
        .exists({ checkFalsy: true })
        .withMessage("Last Name cannot be blank")
        .isLength({ max: 50 })
        .withMessage('Last Name cannot be longer than 50 characters'),
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Email cannot be blank")
        .isEmail()
        .withMessage('Email must be a valid email address')
        .isLength({ max: 50 })
        .withMessage('Email cannot be longer than 50 characters'),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Password cannot be blank")
        .isLength({ max: 255 })
        .withMessage('Password cannot be longer than 255 characters')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'g')
        .withMessage('Password must include at least one of each lowercase character, uppercase character, and number'),
    check("confirmPassword")
        .exists({ checkFalsy: true })
        .withMessage("Confirm Password cannot be blank")
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Confirm Password does not match Password');
            }
            return true;
        }),
];

router.get(
    "/signup",
    csrfProtection,
    asyncHandler(async (req, res) => {
        res.render("trainers/trainer-signup", {
            csrfToken: req.csrfToken()
        });
    })
);

router.post(
    "/",
    formValidation,
    handleValidationErrors,
    csrfProtection,
    asyncHandler(async (req, res, next) => {
        const { trainerName, firstName, lastName, email, bio, password } = req.body;
        if (!req.errors) {
            const hashedPassword = await bcrypt.hash(password, 10);
            const trainer = await Trainer.create({
                username: trainerName,
                firstName,
                lastName,
                email,
                bio,
                password: hashedPassword,
            });
            loginTrainer(req, res, trainer);
            res.redirect('/home')
        } else {
            console.log(bio)
            res.render('trainers/trainer-signup', {
                errors: req.errors,
                csrfToken: req.csrfToken(),
                trainerName,
                firstName,
                lastName,
                email,
                bio,
            })
        }
    })
);

router.get('/login',
    csrfProtection,
    (req, res,) => {
        res.render('trainers/trainer-login', {
            title: 'Let me innnnn',
            csrfToken: req.csrfToken()
        })
    }
);

router.post('/login',
    csrfProtection,
    asyncHandler(async (req, res, next) => {
        const { email, password } = req.body;

        const trainer = await Trainer.findOne({
            where: { email }
        })

        if (trainer) {
            const passwordMatch = await bcrypt.compare(password, trainer.password.toString());
            if (passwordMatch) {
                loginTrainer(req, res, trainer)
                res.redirect('/home');
            }
        } else {
            req.errors = ['Login credentials failed to match an existing user.'];
            res.render('trainers/trainer-login', {
                errors: req.errors,
                csrfToken: req.csrfToken()
            })
        }
    })
)

router.get('/logout', asyncHandler(async (req, res, next) => {
    logoutTrainer(req, res);
    res.redirect('/');
}))

router.post('/demo-login', asyncHandler(async (req, res, next) => {
    const demoTrainer = await Trainer.findOne({
        where: {
            email: 'demo@email.com'
        }
    })
    loginTrainer(req, res, demoTrainer);
    res.redirect('/home')
}))

module.exports = router;
