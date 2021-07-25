const path= require('path');
const morgan= require('morgan');
const express = require('express');
const handlebars = require('express-handlebars');
const app = express();
const port=3001;
app.use(express.static(path.join(__dirname,'public')));
//HTTP logger
app.use(morgan('combined'));
//  handle bars

app.engine('hbs', handlebars({
     extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));


app.get('/', ( req, res) => {
    
     return res.render('home');
})
app.get('/news', ( req, res) => {
    
     return res.render('news');
})
app.listen(port, ()=> console.log(`Example app listening at  http://localhost:${port}`)); 