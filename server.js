const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const SRC_PATH = '/src/pages/';

app.use(express.static(`${__dirname}/`));
app.use(express.static(path.join(__dirname, 'src/pages/')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, `${SRC_PATH}signin.html`))
})

app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, `${SRC_PATH}signup.html`))
})

app.get('/messages', function(req, res) {
    res.sendFile(path.join(__dirname, `${SRC_PATH}messages.html`))
})

app.get('/profile', function(req, res) {
    res.sendFile(path.join(__dirname, `${SRC_PATH}profile.html`))
})

app.get('/profile-editing', function(req, res) {
    res.sendFile(path.join(__dirname, `${SRC_PATH}profile-editing.html`))
})

app.get('/profile-password-editing', function(req, res) {
    res.sendFile(path.join(__dirname, `${SRC_PATH}profile-password-editing.html`))
})

app.listen(PORT, function() {
    console.log(`Example app listening on port ${PORT}!`);
})
