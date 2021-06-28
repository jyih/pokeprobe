var express = require("express");
var router = express.Router();
const {
    csrfProtection,
    asyncHandler,
    handleValidationErrors,
} = require("./utils");
const db = require("../db/models");
const { Trainer } = db;
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator");
// express validator necessary

function formError(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    const errors = err.errors;
    // render the error page
    console.log(err);
    res.status(err.status || 500);
    res.render("error", { errors });
}

/* GET users listing. */
const camelToTitle = (camel) => {
    let result = camel.replace(/([a-z])([A-Z])/g, "$1 $2").trim();

    return result.charAt(0).toUpperCase() + result.slice(1);
};

const createFalsyCheck = (
    fieldName,
    messageName = camelToTitle(fieldName),
    message = `${messageName} cannot be blank`
) => {
    return check(fieldName).exists({ checkFalsy: true }).withMessage(message);
};

const formValidation = [
    check("trainerName")
        .exists({ checkFalsy: true })
        .withMessage("Trainer Name cannot be blank"),
    check("firstName")
        .exists({ checkFalsy: true })
        .withMessage("First Name cannot be blank"),
    check("lastName")
        .exists({ checkFalsy: true })
        .withMessage("Last Name cannot be blank"),
    check("email")
        .exists({ checkFalsy: true })
        .withMessage("Email cannot be blank"),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Password cannot be blank"),
    check("confirmPassword")
        .exists({ checkFalsy: true })
        .withMessage("Confirm Password cannot be blank"),
];

// ? change route to something like /signup
router.get(
    "/",
    csrfProtection,
    asyncHandler(async (req, res) => {
        res.render("trainer-signup", { csrfToken: req.csrfToken() });
    })
);

router.post(
    "/",
    formValidation,
    handleValidationErrors,
    asyncHandler(async (req, res, next) => {
        console.log(req)
        if (!req.errors.length) {
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
            // console.log(trainer)
            res.json({ trainer });
            // res.redirect('/')
        } else {
            res.json(req.errors)
        }
    })
);

// router.use(function(err, req, res, next) {

// })

module.exports = router;
