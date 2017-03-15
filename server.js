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
app.post('/api/users', function(req, res, next) {
    db.check_username([req.body.username], function(err, result) {
        console.log(result);
        if(err) return next(err);
        else if(result[0]) res.send('username taken');
        else if(!result[0]) {
            db.post_user([req.body.username, req.body.email, req.body.password], function(err, users) {
            if(err) res.status(500).send(err);
            else res.send(users[0]);
            })
        }
    })
})

app.listen(3000, function() {
    console.log("I am listening");
})