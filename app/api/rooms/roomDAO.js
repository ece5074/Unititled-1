const exeQuery = require("../../models/dbconnection");

const tableName = `Visit`;

//모든 방을 보여주는데, private인 방은 안보여주도록
module.exports.indexRooms = function(req, res){
    const query = `SELECT * FROM ${tableName}`
    exeQuery('GET', query, []).then(ret => {
        if(!ret.state){
            ret.message = "검색 결과에 문제가 발생하였습니다.";
            return res.status(404).json({ err: "Incorrect No." });
        }else{
            ret.message = "검색완료"
            res.send(ret.rows);
        }
    })
}

//검색한 방만 보여줌,
module.exports.showRooms = function(req, res){
    const query = `SELECT * FROM WHERE TITLE IN (${params.title})`
}