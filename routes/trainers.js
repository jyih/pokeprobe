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
const { check, validationResult } = require("express-validator");
const {
    loginTrainer,
    logoutTrainer,
    requireAuth,
    restoreTrainer
} = require('../auth')
// express validator necessary

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
    asyncHandler(async (req, res) => {
        res.render("trainer-signup", { csrfToken: req.csrfToken() });
    })
);

router.post(
    "/",
    formValidation,
    handleValidationErrors,
    csrfProtection,
    asyncHandler(async (req, res, next) => {
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
            res.render('trainer-signup', {
                errors: req.errors,
                csrfToken: req.csrfToken()
            })
        }
    })
);

router.get('/login',
    csrfProtection,
    (req, res,) => {
        res.render('trainer-login', {
            title: 'Let me innnnn',
            csrfToken: req.csrfToken()
        })
        console.log(req.session.auth)
    }
);

router.post('/login',
    csrfProtection,
    asyncHandler(async (req, res, next) => {
        const { email, password } = req.body;

        const trainer = await Trainer.findOne({
            where: { email }
        })

        console.log('hit login', trainer)
        if (trainer) {
            const passwordMatch = await bcrypt.compare(password, trainer.password.toString());
            if (passwordMatch) {
                loginTrainer(req, res, trainer)
                res.redirect('/');
            }
        } else {
            // let errorMsg = 'Login credentials failed to match an existing user.'
            req.errors = ['Login credentials failed to match an existing user.'];
            res.render('trainer-login', {
                errors: req.errors,
                csrfToken: req.csrfToken()
            })
        }
    })
)

router.get('/logout', asyncHandler(async (req, res, next) => {
    res.render('trainer-logout')
}))

router.post('/logout', asyncHandler(async (req, res, next) => {
    // console.log('before logout:' + req.session.auth)
    logoutTrainer(req, res);
    // console.log('after logout:' + req.session.auth)
    res.redirect('/trainers/login');
}))

router.post('/demo-login', asyncHandler(async (req, res, next) => {

}))

module.exports = router;