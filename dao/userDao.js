//dao/userDao.js
//实现与mysql的交互，这里针对的是user的交互

var mysql = require('mysql');
var $conf = require('../conf/db');//这个是把数据库的连接配置导入
var $sql = require('./userSqlMapping');

//使用连接池，与mysql连接。
var pool = mysql.createPool($conf.mysql);
//向前台返回JSON方法的封装，如何封装的更好是个问题？！？！
var jsonWrite = function(res,ret){
	if (typeof ret === 'undefined') {
		res.json({
			//假如是未定义的话，那么则返回错误的信息。
			code:'1',
			msg:'操作失败'
		});
	} else {
		res.json(ret);
	};
};
 

module.exports = {
	//用户验证
	varifyUser:function(req,res,next) {   
	pool.getConnection(function(err,connection){
		//获取从前台页面传过来的数据
		var param = req.query || req.params;
		connection.query($sql.queryByName,[param.username,param.pwd],function(err,result){
			if (result.length == 0) {
				result = "fail";
			} else {
				result = "success";
				req.session.username = param.username;
			}
			//这里应该加一个session
				//以json形式，把操作结果返回给前台页面
				jsonWrite(res,result);
				//释放连接
				connection.release();
			});
		});
	},
	getAccount:function(req,res,next){
		if (req.session.username) {
			jsonWrite(res,req.session.username);
		}else jsonWrite(res,"error");
	},
	logoutAccount:function(req,res,next) {
		req.session.destroy();
		console.log(req.session);
		if(!req.session){
			jsonWrite(res,'success');
		}else jsonWrite(res,'fail');
	}
}

























