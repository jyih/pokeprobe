const csrf = require("csurf")
const csrfProtection = csrf({ cookie: true })
const { validationResult } = require("express-validator")


const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next)

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map(error => error.msg)
        req.errors = errors
        const newError = Error('bad')
        newError.title = 'new error title'
        newError.errors = errors;
    }
    next()
}

module.exports = { csrfProtection, asyncHandler, handleValidationErrors }
