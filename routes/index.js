var express = require('express');
var router = express.Router();
var welcome = require('../controllers/welcome');
var user = require('../controllers/user');

/* GET home page. */
router.get('/', welcome.index);

router.get('/login', user.login);
router.post('/login', user.checkLogin);

router.get('/regist', user.regist);
router.post('/regist', user.doRegist);

router.get('/checkUser', user.checkUser);




module.exports = router;
