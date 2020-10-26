const express = require('express');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const morgan = require("morgan");
const startupDebugger = require("debug")("app:startup");
const app = express();
const PORT = 8852;
const main = require('./routes/main.js');
const users = require('./routes/users.js');

//require modules setting
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
if (app.get("env") === "development") {
    app.use(morgan("tiny"));
    startupDebugger("Morgan enabled.."); // debug
}

//directory
app.use(express.static(__dirname + "/public"));
//html 템플릿 엔진 ejs 설정
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

//routers....
app.use('/', main);
//app.use('/users', users);

//server listening...
app.listen(PORT, () => {
    console.log(`${PORT} Port Server Running~`);

    require('./models/models').sequelize.sync({force: true}).then(()=>{
        console.log("Database Sync");
    });
});


module.exports = app;