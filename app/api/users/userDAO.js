const exeQuery = require("../../models/dbconnection");

const tableName = `Customers`;

const regInfo = (params) => {
  return {
    id: params.id,
    password: params.password,
    email: params.email,
    name: params.name,
    nickname: params.nickname,
    gender: params.gender,
    phone: params.phone,
    job: params.job,
  };
};

//전체 유저 검색
module.exports.indexUser = function (req, res) {
  let query = `SELECT * FROM ${tableName}`;

  exeQuery("GET", query, []).then((ret) => {
    if (!ret.state) {
      ret.message = "검색 결과에 문제가 발생하였습니다.";
      return res.status(404).json({ err: "Incorrect No." });
    } else {
      ret.message = "검색이 성공적으로 마무리 되었습니다.";
      JSON.stringify(ret.rows);
      res.send(ret.rows);
    }
  });
};

//params로 넘어온 유저 id정보를 받아 유저를 검색
//차후에 parameter를 다르게 받아서 남성유저만, 여성유저만 따로 분류하는 sql을 만들어야하나
//아니면 json으로 넘겨준 객체가 있으니 상관없는지 모르겠음
module.exports.showUser = function (req, res) {
  const id = req.params.number;

  let query = `SELECT * FROM ${tableName} WHERE ID = ?`;
  exeQuery("GET", query, [id]).then((ret) => {
    if (!ret.state) {
      ret.message = "검색 결과에 문제가 발생하였습니다.";
      return res.status(404).json({ err: "Incorrect No." });
    } else {
      ret.message = "검색이 성공적으로 마무리 되었습니다.";
      res.send(JSON.stringify(ret.rows));
    }
  });
};

//유저추가
module.exports.addUser = function (req, res) {
  const data = regInfo(req.params);
  let query = `INSERT INTO ${tableName}(ID, PASSWORD, EMAIL, NAME, NICKNAME, GENDER, PHONE, JOB) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

  exeQuery("POST", query, [
    data.id,
    data.password,
    data.email,
    data.name,
    data.nickname,
    data.gender,
    data.phone,
    data.job,
  ]).then((ret) => {
    if (!ret.state) {
      ret.message = "검색 결과에 문제가 발생하였습니다.";
      return res.status(404).json({ err: "Incorrect No." });
    } else {
      ret.message = "검색이 성공적으로 마무리 되었습니다.";
      res.send(ret);
    }
  });
};

//PUT으로 구현할려면 select로 데이터를 받아온 뒤 변경된 데이터만 수정해서 PUT을 보내야하나?
//일단 여기있는 editUser는 모든 데이터를 수정하는걸로 칭함
//select로 아이디가 있는지 검색한후에 update를 사용해야하는지
//update만 바로해야되는지 이거에 대한 뭔가가 필요할듯싶음
module.exports.editUser = function (req, res) {
  const id = req.params.number;
  const data = regInfo(req.params);

  let select = `SELECT * FROM ${tableName} WHERE ID = ?`;
  exeQuery("GET", select, [id]).then((ret) => {
    console.log(ret);
  });

  let query = `UPDATE ${tableName} SET PASSWORD = ?, EMAIL = ?, NAME = ?, NICKNAME = ?, PHONE = ?, JOB = ? WHERE ID = ?`;
  exeQuery("PUT", query, [
    data.password,
    data.email,
    data.name,
    data.nickname,
    data.phone,
    data.job,
    data.id,
  ]).then((ret) => {
    if (!ret.state) {
      ret.message = "수정 결과에 문제가 발생하였습니다.";
      return res.status(404).json({ err: "Incorrect No." });
    } else {
      ret.message = "수정이 성공적으로 마무리 되었습니다.";
      res.send(ret);
    }
  });
};


//유저삭제
module.exports.deleteUser = function (req, res) {
  const id = req.params.number;

  let query = `DELETE FROM ${tableName} WHERE ID = ?`;

  exeQuery("DEL", query, [id]).then((ret) => {
    if (!ret.state) {
      ret.message = "삭제에 문제가 발생하였습니다.";
      return res.status(404).json({ err: "Incorrect No." });
    } else {
      ret.message = "삭제가 성공적으로 마무리 되었습니다.";
      res.send(ret);
    }
  });
};
