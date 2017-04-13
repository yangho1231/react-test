var app = require('./server');
var db = app.get('db');

module.exports = {
    GetBook: function(req, res, next) {
        db.get_books(function(err, users) {
            if(err) res.status(500).json(err);
            else res.json(users);
        });
    }
};