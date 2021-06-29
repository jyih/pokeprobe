// LETS AUTHENTICASODNTOSENTOSENOTES
const db = require("./db/models");
const { Trainer } = db;

const loginTrainer = (req, res, trainer) => {
  req.session.auth = {
    userId: trainer.id
  }
  // console.log(req.session.auth)
}//yay

const logoutTrainer = (req, res) => {
  delete req.session.auth;
}//speedy bois - lincoln

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/trainers/login')
  }
  return next();
}

const restoreTrainer = async (req, res, next) => {
  // console.log(req.session.auth)
  if (req.session.auth) {
    const { userId } = req.session.auth;
    try {
      const trainer = await Trainer.findByPk(userId);
      if (trainer) {
        res.locals.authenticated = true;
        res.locals.trainer = trainer;
        // console.log(res.locals.trainer)
        next();
      }
    } catch (err) {
      res.locals.authenticated = false;
      next();
    }
  } else {
    res.locals.authenticated = false;
    next();
  }
}//end restore Trainer

module.exports = {
  loginTrainer,
  logoutTrainer,
  requireAuth,
  restoreTrainer
}