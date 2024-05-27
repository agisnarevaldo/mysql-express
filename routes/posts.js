let express = require('express');
let router = express.Router();

// import database
let connection = require('../library/database');

// index posts
router.get('/', function (req, res, next) {
    // query
    connection.query('SELECT * FROM posts ORDER BY id desc', function (err, rows) {
        if (err) {
            req.flash('error: ', err);
            res.render('posts', {
                data: ''
            });
        } else {
            // render ke vies postx index
            res.render('posts/index', {
                data: rows // <-- data posts
            });
        }
    });
});

module.exports = router;