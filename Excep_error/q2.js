var express = require("express")
var app = express();


app.get('/', (req, res) => {
    res.send('Hello World, from express');
});

app.listen(3000)
