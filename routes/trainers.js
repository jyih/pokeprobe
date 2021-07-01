const express = require("express");
const router = express.Router();
const {
    csrfProtection,
    asyncHandler,
    handleValidationErrors,
} = require("./utils");
const db = require("../db/models");
const { Trainer, Type, Pokedex } = db;
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const {
    loginTrainer,
    logoutTrainer,
    requireAuth,
    restoreTrainer
} = require('../auth')
    // express validator necessary

const {
    lookupPokemon1,
    lookupPokemon2,
    lookupPokemon3,
    lookupPokemon4,
    lookupPokemon5,
    lookupPokemon6,
    lookupPokemon7,
} = require('../queries/pokemon-lookup.js')

/* GET users listing. */


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

// ? change route to something like /signup
router.get(
    "/signup",
    csrfProtection,
    asyncHandler(async(req, res) => {
        res.render("trainers/trainer-signup", { csrfToken: req.csrfToken() });
    })
);

router.post(
    "/",
    formValidation,
    handleValidationErrors,
    csrfProtection,
    asyncHandler(async(req, res, next) => {
        if (!req.errors) {
            const { trainerName, firstName, lastName, email, bio, password } =
            req.body;
            const hashedPassword = await bcrypt.hash(password, 10);
            const trainer = await Trainer.create({
                username: trainerName,
                firstName,
                lastName,
                email,
                bio,
                password: hashedPassword,
            });
            res.json({ trainer });
            res.redirect('/')
        } else {
            res.render('trainers/trainer-signup', {
                errors: req.errors,
                csrfToken: req.csrfToken()
            })
        }
    })
);

router.get('/login',
    csrfProtection,
    (req, res, ) => {
        res.render('trainers/trainer-login', {
            title: 'Let me innnnn',
            csrfToken: req.csrfToken()
        })
    }
);

router.post('/login',
    csrfProtection,
    asyncHandler(async(req, res, next) => {
        const { email, password } = req.body;

        const trainer = await Trainer.findOne({
            where: { email }
        })

        if (trainer) {
            const passwordMatch = await bcrypt.compare(password, trainer.password.toString());
            if (passwordMatch) {
                loginTrainer(req, res, trainer)
                res.redirect('/');
            }
        } else {
            // let errorMsg = 'Login credentials failed to match an existing user.'
            req.errors = ['Login credentials failed to match an existing user.'];
            res.render('trainers/trainer-login', {
                errors: req.errors,
                csrfToken: req.csrfToken()
            })
        }
    })
)

// router.get('/logout', asyncHandler(async (req, res, next) => {
//     res.render('trainer-logout')
// }))

<<<<<<< HEAD
router.get('/logout', asyncHandler(async(req, res, next) => {
    logoutTrainer(req, res);
    res.redirect('');
=======
router.get('/logout', asyncHandler(async (req, res, next) => {
    logoutTrainer(req, res);
    console.log('lol')
    res.redirect('/trainers/login');
>>>>>>> michelle-local
}))

router.post('/demo-login', asyncHandler(async(req, res, next) => {
    const demoTrainer = await Trainer.findOne({
        where: {
            email: 'demo@email.com'
        }
    })
    loginTrainer(req, res, demoTrainer);
    res.redirect('/')
}))

router.get('/query-test', asyncHandler(async(req, res, next) => {
    // console.log(await lookupPokemon3('Normal'))
    // lookupPokemon4(await lookupPokemon3('Normal'));

    // lookupPokemon1('1')
    // lookupPokemon5('Flying')
    lookupPokemon6('Flying')
    lookupPokemon6('Poison')
        // lookupPokemon7('Flying')
}))

module.exports = router;
