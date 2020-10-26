var express = require('express');
var router = express.Router();

const testData = [
  {
    "id": "test1",
    "password": "test"
  },
  {
    "id": "test2",
    "password": "test1"
  },
  {
    "id": "test3",
    "password": "test2"
  }
]

router.get('/', (req, res) => {
  res.render('main');
});

router.get('/login', (req, res) => {
  res.render('login', {id: ""});
});

router.post('/login', (req, res) => {
  const name = req.body.userid || '';

  if(!name.length){
    return res.status(400).json({err: `Incorrect ID`});
  }
  res.render('login', {id: name });
});

module.exports = router;
