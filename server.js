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

//RESTFUL METHOD
app.get('/books', controller.GetBooks);
app.get('/books/:id', controller.GetBook);
app.get('/mypage/:id', controller.GetMyPage);
app.get('/api/users', controller.GetUsers);
app.delete('/mypage/:uid/:bid', controller.DeleteMyList);
app.delete('/api/users/:id', controller.DeleteUser);
app.post('/api/users', controller.PostUser);
app.post('/api/login', controller.PostLogin);
app.post('/api/mypage', controller.PostMypage);
app.get('/api/search', controller.SearchBook);

app.listen(3000, function() {
    console.log("I am listening");
});



// let db = massive.connect({connectionString: config.connectionString}, function(err, localdb){
//     db = localdb;
//     app.set('db', db);

// });

// app.get('/api/users', function(req, res, next) {
//     db.get_users(function(err, users) {
//         if(err) res.status(500).json(err);
//         else res.json(users);
//     });
// });