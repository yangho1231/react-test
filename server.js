var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cors = require('cors');
var massive = require('massive');
var config = require('./config');
var app = express();

app.use(bodyParser.json());
app.use(cors());

var db = massive.connect({connectionString: config.connectionString}, function(err, localdb){
    db = localdb;
    app.set('db', db);

});
app.get('/books', function(req, res, next) {
    db.get_books(function(err, users) {
        if(err) res.status(500).json(err);
        else res.json(users);
    })
})
app.get('/books/:id', function(req, res, next) {
    db.get_individual([req.params.id], function(err, individual) {

        if(err) res.status(500).send(err);
        
        else res.send(individual[0]);
    });
});
app.get('/api/users', function(req, res, next) {
    db.get_users(function(err, users) {
        if(err) res.status(500).json(err);
        else res.json(users);
    })
})
app.post('/api/users', function(req, res) {
    db.post_user([req.body.username, req.body.email, req.body.password], function(err, users) {
        console.log(users[0]);
        if(err) res.status(500).send(err);
        else res.send(users[0]);
    })
})

app.listen(3000, function() {
    console.log("I am listening");
})