const Pool = require('mysql2');
const dbconn = require('../../models/dbconnection');

//All data search
module.exports.index = async function(req, res) {
    const allDataSearch = "SELECT * FROM USERS";
    dbconn.query(allDataSearch, function(err, ret, fields){
        if(err) return;
        console.log(ret);
        console.log(fields);

        res.send(fields);
    })
}