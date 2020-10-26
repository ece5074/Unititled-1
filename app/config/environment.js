const environment = {
    development: {
        mysql: {
            "host": "127.0.0.1",
            "user": "root",
            "password": "root",
            "database": "testschema",
            "connectionLimit": 10
        },

        sequelize: {
            force: false
        }
    },

    test: {
        mysql: {
            "host": "127.0.0.1",
            "user": "root",
            "password": "root",
            "database": "testschema",
            "connectionLimit": 10
        },

        sequelize: {
            force: true
        }
    },

    production: {

    }
}

const nodeEnv = process.env.NODE_ENV || 'development';

module.exports = environment[nodeEnv];

