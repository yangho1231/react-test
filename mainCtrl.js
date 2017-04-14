var app = require('./server');
var db = app.get('db');

module.exports = {
    GetBooks: (req, res, next) => {
        db.get_books((err, users) => {
            if(err) res.status(500).json(err);
            else res.json(users);
        });
    },
    GetBook : (req, res, next) => {
        db.get_individual([req.params.id], (err, individual) => {
            if(err) res.status(500).send(err);
            else res.send(individual[0]);
        });       
    },
    GetMyPage: (req, res, next) => {
        db.get_mypage([req.params.id], (err, individual) => {
            if(err) res.status(500).send(err);
            else res.send(individual);
        });
    }


};