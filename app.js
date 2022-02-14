const express = require ("express");
const path = require ("path");
const app = express ();
const port = process.env.PORT || 3333;
const morgan = require('morgan');

const publicPath = path.resolve(__dirname,"./public");
app.use(express.static(publicPath));
app.use(morgan('tiny'));

app.listen(port, () => console.log ("Server up at: " + port));

app.get('/login', (req, res) => {res.sendFile(path.join(__dirname, "./views/login.html"))});
app.get('/register', (req, res) => {res.sendFile(path.join(__dirname, "./views/register.html"))});
app.get('/', (req, res) => {res.sendFile(path.join(__dirname, './views/index.html'))});
app.get('/error', (req, res) => {res.sendFile(path.join(__dirname, "./views/error.html"))});
app.get('*', (req, res) => {res.sendFile(path.join(__dirname, "./views/error.html"))});