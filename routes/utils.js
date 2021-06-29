const csrf = require("csurf")
const csrfProtection = csrf({ cookie: true })
const { check, validationResult } = require("express-validator")


const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map(error => {
                return error.msg
            })
            req.errors = errors
            console.log(req.errors)
 
    } // can remove return and add else
    next()
}

module.exports = { csrfProtection, asyncHandler, handleValidationErrors }
