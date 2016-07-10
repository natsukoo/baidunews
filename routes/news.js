var express = require('express');
var router = express.Router();
//与数据库交互的news模块
var newsDao = require('../dao/newsDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//验证新闻表格
router.get('/getData',function(req,res,next){
	newsDao.getData(req,res,next);
});

//根据id值获取一条记录
router.get('/resultBaseId',function(req,res,next){
	newsDao.resultBaseId(req,res,next);
});

//update
router.post('/updaetBaseId',function(req,res,next){
	newsDao.updaetBaseId(req,res,next);
});

//delete
router.get('/deleteById',function(req,res,next) {
	newsDao.deleteById(req,res,next);
});

//insert
router.post('/addNews',function(req,res,next) {
	// req.setEncoding('utf8');
	newsDao.addNews(req,res,next);
})

module.exports = router;
