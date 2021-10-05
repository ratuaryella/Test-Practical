const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.set('views', path.join(__dirname, '/views'));
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

//  Routes
app.get('/', (req, res)=>{
    res.render('index');
})
app.listen(port, () => console.log(`App listening on port ${port}`));
