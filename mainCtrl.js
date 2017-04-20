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
    },
    DeleteMyList: (req, res, next) => {
        db.delete_mylist([req.params.bid, req.params.uid], (err, individual) => {
            if(err) res.status(500).send(err);
            else {
                db.get_mypage_book([req.params.uid], (err, all) => {
                    if(err) res.status(500).send(err);
                    else res.send(all);
                });
            }
        });
    },
    PostUser: (req, res, next) => {
        db.check_username([req.body.username], (err, result) => {
            if(err) return next(err);
            else if(result[0]) res.send('username taken');
            else if(!result[0]) {
                db.post_user([req.body.username, req.body.email, req.body.password, false, new Date()], (err, users) => {
                    if(err) res.status(500).send(err);
                    else res.send(users[0]);
                });
            }
        });
    },
    PostLogin: (req, res, next) => {
        let flag = true;
        db.get_users((err, users) => {
            if(err) res.status(500).json(err);
            else {
                for(let i = 0; i < users.length; i++) {
                    if(req.body.email == users[i].email && req.body.password == users[i].password) {
                        console.log("matched");
                        flag = false;
                        let currentUser = users[i];
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
    },
    PostMypage: (req, res, next) => {
        console.log(req.body, "body");
        db.add_mypage([req.body.userId, req.body.bookId], (err, ids) => {
            if(err) res.stats(500).json(err);
            else res.send(ids);
        });
    },
    GetUsers: (req, res, next) => {
        db.get_users((err, users) => {
            if(err) res.stats(500).json(err);
            else res.send(users);
        })
    },
    DeleteUser: (req, res, next) => {
        console.log(req.params, "req");
        db.delete_mypage([req.params.id],(err, user) => {
            if(err) res.stats(500).json(err);
            else{
                db.delete_user([req.params.id], (err, user) => {
                    if(err) res.stats(500).json(err);
                    else {
                        db.get_users((err, users) => {
                            if(err) res.stats(500).json(err);
                            else res.send(users);
                        }) 
                    }
                })
            }
        })

    },
    SearchBook: (req, res, next) => {
        let flag = true;
        db.get_books((err, book) => {
            if(err) res.stats(500).json(err);
            else {
                for(let i = 0; i < book.length; i++) {
                    if(book[i].title.toLowerCase() === req.query.book) {
                        flag = false;
                        db.search_book([req.query.book], (err, book) => {
                            if(err) res.stats(500).json(err);
                            else res.send(book);
                        })
                    }
                }
                if(flag) {
                    res.send({
                        search: req.query.book,
                        result: "Search didn't match"
                    })
                }
            }
        })
    }
};