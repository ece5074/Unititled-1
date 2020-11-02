const express = require('express');
const router = express.Router();
const controller = require('./rooms.controller');

router.get('/', controller.AllRooms);

router.post('/', (req, res) =>{

})


module.exports = router;