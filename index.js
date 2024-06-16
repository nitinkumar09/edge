const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const path = require('path')
const temp_Path = path.join(__dirname, 'views');
app.set('view engine', 'hbs');
app.set('views', temp_Path);
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.render('index')
});
app.get('/product', (req, res) => {
    res.render('product')
});
app.get('/resourcecenter', (req, res) => {
    res.render('resourcecenter')
});
app.get('/contactus', (req, res) => {
    res.render('contactus')
});
app.listen(port, (req, res) => {
    console.log(`server is runing port no. ${port}`);
})