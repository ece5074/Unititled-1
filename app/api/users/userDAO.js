const exeQuery = require('../../models/dbconnection');

module.exports.indexUser = function (req, res) {
    let query = 'select * from users'

    exeQuery('GET', query, []).then((ret) => {
        res.send(JSON.stringify(ret.rows));
    })
}

module.exports.showUser = function (req, res) {
    const data_no = req.params.number;

    let query = 'select * from users where user_no = ?'

    exeQuery('GET', query, [data_no]).then((ret) => {
        if (ret.rows.length == 0)
            return res.status(404).json({ err: 'Incorrect No.' });
        res.send(JSON.stringify(ret.rows[0]));
    })
}


module.exports.addUser = function (req, res) {
    const regInfo = {
        id: req.body.userid,
        password: req.body.userpwd,
        nickname: req.body.nickname,
        email: req.body.email
    };

    let query = 'insert into users(user_id, user_pw, nickname, email) values (?,?,?,?)';

    exeQuery('POST', query, [regInfo.id, regInfo.password, regInfo.nickname, regInfo.email]).then((ret) => {
        res.send(`Register Success`);
    });
}

//PUT으로 구현할려면 select로 데이터를 받아온 뒤 변경된 데이터만 수정해서 PUT을 보내야하나?
module.exports.editUser = function (req, res) {
    const userNo = req.params.number;

    const userinfo = {
        id: req.body.userid,
        password: req.body.userpwd,
        nickname: req.body.nickname,
        email: req.body.email
    }

    let select = 'select * from users where user_no = ?'
    exeQuery('GET', select, [userNo]).then(ret => {
        console.log(ret)
    });

    let query = 'update users set user_id, user_pw, nickname, email where user_no = ?'
    exeQuery('PUT', query, [userinfo.id, userinfo.password, userinfo.nickname, userinfo.email]).then(ret => {
        if (ret.affectedRows == 0) { 
            res.send("업데이트할 내용이 없습니다."); 
            return ;
        }

        res.send('성공적으로 업데이트를 진행하였습니다.');
    });
}

module.exports.deleteUser = function (req, res) {
    const userNo = req.params.number;

    let query = 'delete from users where user_no = ?';

    exeQuery('DEL', query, [parseInt(userNo)]).then((ret) => {
        if (ret.rows.length == 0) return res.status(404).json({ err: 'Incorrect No.' });

        res.send(ret.rows[0]);
    })
}