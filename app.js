
const port = 3000;
const express = require("express");
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('top.ejs');
});

app.get('/generator', (req, res) => {
    res.render('generator.ejs');
});

app.listen(port);

