var express = require('express');
var router = express.Router();
const { handleTranscript } = require('../controllers/transcript');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Chat Support' });
});

router.get('/chat', function(req, res, next) {
    res.render('chat', { title: 'Chat Page' });
});

router.get('/transcript', function(req, res, next) {
    handleTranscript(req, res, next);
});





module.exports = router;
