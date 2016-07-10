var express = require('express');
var router = express.Router();
//与数据库交互的user模块
var userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//验证用户
router.get('/verifyResult',function(req,res,next){
	userDao.varifyUser(req,res,next);
});
//验证session
router.get('/getAccount',function(req,res,next){
	userDao.getAccount(req,res,next);
});
//logout
router.get('/logoutAccount',function(req,res,next){
	userDao.logoutAccount(req,res,next);
})

module.exports = router;
