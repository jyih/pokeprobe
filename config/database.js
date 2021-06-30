const {
    db: { username, password, database, host,
        // use_env_variable 
    },
} = require('./index');

module.exports = {
    development: {
        username,
        password,
        database,
        host,
        dialect: 'postgres',
        logging: false
    },
    production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'postgres',
        seederStorage: 'sequelize',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false,
            },
        }
    }
};