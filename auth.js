const db = require("./db/models");
const { Trainer } = db;

const loginTrainer = (req, res, trainer) => {
  req.session.auth = {
    userId: trainer.id
  }
}

const logoutTrainer = (req, res) => {
  delete req.session.auth;
}

const requireAuth = (req, res, next) => {
  if (!res.locals.authenticated) {
    return res.redirect('/trainers/login')
  }
  return next();
}

const restoreTrainer = async (req, res, next) => {
  if (req.session.auth) {
    const { userId } = req.session.auth;
    try {
      const trainer = await Trainer.findByPk(userId);
      if (trainer) {
        res.locals.authenticated = true;
        res.locals.trainer = trainer;
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