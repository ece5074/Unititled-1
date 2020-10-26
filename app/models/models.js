const Sequelize = require('sequelize');
const sequelize = new Sequelize('testschema', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = sequelize.define('users', {
    name: Sequelize.STRING
});


module.exports = {
    sequelize: sequelize,
    User: User
}