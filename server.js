const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const massive = require('massive');
const config = require('./config');
const app = module.exports = express();

const mass = massive.connectSync({connectionString: config.connectionString});

app.use(bodyParser.json());
app.use(cors());

//db settings
app.set('db', mass);
let db = app.get('db');

//The Controller for the server.js
const controller = require('./mainCtrl.js');

// let db = massive.connect({connectionString: config.connectionString}, function(err, localdb){
//     db = localdb;
//     app.set('db', db);

// });



//REST METHOD
app.get('/books', controller.GetBooks);
app.get('/books/:id', controller.GetBook);
app.get('/mypage/:id', controller.GetMyPage);

app.delete('/mypage/:uid/:bid', function(req, res, next) {
    db.delete_mylist([req.params.bid, req.params.uid], function(err, individual) {
        if(err) res.status(500).send(err);
        else {
            db.get_mypage_book([req.params.uid], function(err, all) {
                if(err) res.status(500).send(err);
                else res.send(all);
            });
        }
    });
});
app.get('/api/users', function(req, res, next) {
    db.get_users(function(err, users) {
        if(err) res.status(500).json(err);
        else res.json(users);
    });
});
app.post('/api/users', function(req, res, next) {
    db.check_username([req.body.username], function(err, result) {
        if(err) return next(err);
        else if(result[0]) res.send('username taken');
        else if(!result[0]) {
            db.post_user([req.body.username, req.body.email, req.body.password, new Date()], function(err, users) {
            if(err) res.status(500).send(err);
            else res.send(users[0]);
            });
        }
    });
});
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
                    });
                }
            }
            if(flag) {
                res.send("Username or Password is wrong");
            }
        }

    });
});
app.post('/api/mypage/', function(req, res, next) {
    db.add_mypage([req.body.userId, req.body.bookId], function(err, ids) {
        if(err) res.stats(500).json(err);
        else res.send(ids);
    })
})

app.listen(3000, function() {
    console.log("I am listening");
});