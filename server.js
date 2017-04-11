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
app.get('/mypage/:id', function(req, res, next) {
    db.get_mypage([req.params.id], function(err, individual) {
        console.log(individual[0].joined);
        if(err) res.status(500).send(err);
        else res.send(individual);
    })
})
app.get('/api/users', function(req, res, next) {
    db.get_users(function(err, users) {
        if(err) res.status(500).json(err);
        else res.json(users);
    })
})
app.post('/api/users', function(req, res, next) {
    db.check_username([req.body.username], function(err, result) {
        if(err) return next(err);
        else if(result[0]) res.send('username taken');
        else if(!result[0]) {
            db.post_user([req.body.username, req.body.email, req.body.password, new Date()], function(err, users) {
            if(err) res.status(500).send(err);
            else res.send(users[0]);
            })
        }
    })
})
app.post('/api/login', function(req, res, next) {
    var flag = true;
    db.get_users(function(err, users) {
        if(err) res.status(500).json(err);
        else {
            for(var i = 0; i < users.length; i++) {

                if(req.body.email == users[i].email && req.body.password == users[i].password) {
                    console.log("matched");
                    flag = false;
                    var currentUser = users[i];
                    res.send({
                        msg: 'passed',
                        user: currentUser
                    })
                }
            }
            if(flag) {
                res.send("Username or Password is wrong");
            }
        }

    })
})
app.post('/api/mypage/', function(req, res, next) {
    db.add_mypage([req.body.userId, req.body.bookId], function(err, ids) {
        if(err) res.stats(500).json(err);
        else res.send(ids);
    })
})

app.listen(3000, function() {
    console.log("I am listening");
})