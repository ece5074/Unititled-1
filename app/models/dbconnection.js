const mysql = require('mysql2')
const dbconfig = require('../config/database');

const pool = mysql.createPool({
    host: dbconfig.host,
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database,
    waitForConnections: dbconfig.waitForConnections,
    connectionLimit: dbconfig.connectionLimit,
    queueLimit: dbconfig.queueLimit
});

module.exports = pool;