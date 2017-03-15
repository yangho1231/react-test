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
app.post('/api/login', function(req, res, next) {
    var flag = false;
    db.get_users(function(err, users) {
        if(err) res.status(500).json(err);
        else {
            for(var i = 0; i < users.length; i++) {
                if(req.body.email == users[i].email && req.body.password == users[i].password) {
                    console.log("matched");
                    flag=false;
                    var currentUser = users[i];
                    res.send({
                        msg: 'passed',
                        user: currentUser
                    })
                }
                else {
                  flag = true;
                  return;

                }
            }
            if(flag) {
                res.send("Username or Password is wrong");
            }
        }

    })
})

app.listen(3000, function() {
    console.log("I am listening");
})