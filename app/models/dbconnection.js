const mysql = require('mysql2/promise');

const dbconfig = require('../config/database');
const pool = mysql.createPool({
    host: dbconfig.adminInfo.host,
    user: dbconfig.adminInfo.user,
    password: dbconfig.adminInfo.password,
    database: dbconfig.adminInfo.database,
    waitForConnections: dbconfig.adminInfo.waitForConnections,
    connectionLimit: dbconfig.adminInfo.connectionLimit,
    queueLimit: dbconfig.adminInfo.queueLimit
});

const exeQuery = async (type, sql, params) => {
    let result = {};
    const connection = await pool.getConnection(async conn => conn);
    try {
        try {
            const [rows] = await connection.query(sql, params);

            switch (type) {
                case "GET":
                    result.rows = rows;
                    result.state = true;
                    return result;
                
                case "POST":
                    result.rows = result.insertId;
                    result.state = true;
                    connection.commit();
                    return result;
                
                case "PUT":
                    result.affectedRows = result.AffectedRows
                    result.state = true;
                    break;

                case "PATCH":
                    break;

                case "DEL":
                    result.rows = rows;
                    result.state = true;
                    connection.commit();
                    return result;
            }
        } catch (e) {
            console.log(`Query ${e}`);
            result.state = false;
            result.error = e;
            return result;
        } finally {
            connection.release();
        }
    } catch (e) {
        console.log("DB ERROR");
        result.state = false;
        result.error = e;
        return result;
    }
}

module.exports = exeQuery;