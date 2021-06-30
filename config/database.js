const {
    db: { username, password, database, host },
} = require('./index');

module.exports = {
    development: {
        username,
        password,
        database,
        host,
        dialect: 'postgres',
        seederStorage: 'sequelize',
        logging: false,
    },
    production: {
        use_env_variable: 'postgres://fsuvjbmmaeubjo:b9aab111b2c94e9b07e1d9a818a0ebfe7e5f3d6bc542b639c11156a9826ae69a@ec2-3-214-136-47.compute-1.amazonaws.com:5432/dengsrt0qnteod',
        dialect: 'postgres',
        seederStorage: 'sequelize',
    }
};