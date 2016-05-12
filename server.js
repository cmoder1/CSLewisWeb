// Required modules
var fs = require('fs');
var http = require('http'); 
var express = require('express');

// Prepare variables
//var conn = anyDB.createConnection('sqlite3://codenames.db');
var app = express(); 
var server = http.createServer(app);

// heroku code
app.set('port', (process.env.PORT || 8080));

// allow access to the scipts and styles for the webpages
//app.use('/scripts', express.static('scripts'));
app.use('/css', express.static(__dirname + '/css'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/html', express.static(__dirname + '/html'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/submissions', express.static(__dirname + '/submissions'));
app.use('/fonts', express.static(__dirname + '/fonts'));


/* ========================================================
 * ==================  Go to a Game Page  =================
 * ======================================================== */

app.get('/about.html', function(req, res) {
    res.sendfile('html/about.html', {root: __dirname })
});

app.get('/blog.html', function(req, res) {
    res.sendfile('html/blog.html', {root: __dirname })
});

app.get('/fiction.html', function(req, res) {
    res.sendfile('html/fiction.html', {root: __dirname })
});

app.get('/essays.html', function(req, res) {
    res.sendfile('html/essays.html', {root: __dirname })
});

app.get('/contact.html', function(req, res) {
    res.sendfile('html/contact.html', {root: __dirname })
});

app.get('/games.html', function(req, res) {
    res.sendfile('html/games.html', {root: __dirname })
});

app.get('*', function(req, res) {
    res.sendfile('html/index.html', {root: __dirname })
});

// changed from *app*.listen(8080);
// to server.listen(8080);

// Set up the listener and make the table of messages once done
//server.listen(8080, function() {
server.listen(app.get('port'), function() {
    console.log('Server is ready!');
});


