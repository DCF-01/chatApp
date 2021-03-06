var express = require('express');
var router = express.Router();
const { handleTranscript } = require('../models/transcript');
const { handleEmail } = require('../controllers/mail');

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

router.get('/send', function(req, res, next) {
    try {
        let msg = {
            from: 'admin@paralax.mk',
            to: 'itxtechnologies.mk@gmail.com',
            subject: 'aws ses test', // Subject line
            text: req.query.message
        }

        handleEmail(req.query.key, msg, 'itxtechnologies.mk@gmail.com');
        res.status(200).send('Email has been sent');
    }
    catch (err){
        console.log(err);
        res.status(500).send('Server issue');
    }
    
})



module.exports = router;
