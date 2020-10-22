const express = require('express');
const app = express();
const PORT = 5000;

app.get('/', (req, res)=>{
    //TODO Main Page
    res.send("안녕하세요");
});

app.get('/test', (req, res)=>{
    const data = {
        serverName : "Untitled",
        developer : "Buning Bread"
    };
    res.json(data); 
});


app.listen(PORT, ()=>{
    console.log(`${PORT} Port Server Running~`);
})