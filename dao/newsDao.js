//dao/newsDao.js
//实现与MySQL的交互
var mysql = require('mysql');
var $conf = require('../conf/db');
var $sql = require('./newSqlMapping');

//使用连接池
var pool = mysql.createPool($conf.mysql);
//向前台返回JSON方法封装
var jsonWrite = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '连接失败'
        });
    } else {
        res.json(ret);
    }
};

module.exports = {
    //这个要输出五个函数，增删改查的方法
    getData: function(req, res, next) {
        pool.getConnection(function(err, connection) {
                try {
                    //获取前台数据，表的名字（即新闻类型）
                    var param = req.query || req.params;
                    //建立连接，向表中插入值
                    connection.query($sql.getData, [param.tableName], function(err, result) {
                        jsonWrite(res, result);
                        connection.release();
                    })
                } catch (err) {
                    console.log(err.message);
                    jsonWrite(res,"param error!!!!");

                }
        })
    },
    resultBaseId: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            try {
                var param = req.query || req.params;
                connection.query($sql.resultBaseId, [param.tableName, param.id], function(err, result) {
                    //此处不需要做判断，因为是从页面获取该条新闻所在的表格和id，所以一定会返回一条数据的。
                    jsonWrite(res, result);
                    connection.release();
                });
            } catch (err) {
                console.log(err.message);
                jsonWrite(res, "param error!!!");
            }
        });
    },
    updaetBaseId: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            if (err) {
                console.log(err.message);
            };
            // updaetBaseId:"UPDATE ?? set newsTitle='?',newsPic='?',newsAuthor='?',newsDate = '?',newsContent='?' WHERE newsID =?",
            //因为参数出错的话，服务器会因为错误直接退出
            try {
                //这句话一直报错，难道这个body的参数一定要用post来传？？？？搞不懂鸟，为了防止是post用的req.body，在后面加了一个选择
                // var param = req.body;
                var param = req.body;
                connection.query($sql.updaetBaseId,[param.tableName, param.title, param.pic, param.author, param.date, param.content, param.id], function(err, result) {
                    if (result.affectedRows > 0) {
                        result = "update success";
                    } else result = "fail";
                    jsonWrite(res, result);
                    connection.release();
                });
            } catch (err) {
                console.log(err.message);
                jsonWrite(res, "param error!!!");
            }
        });
    },
    deleteById: function(req, res, next) {
        pool.getConnection(function(err, connection) {
            try {
                var param = req.query || req.params || req.body;
                //delete from ?? where newsID=?
                connection.query($sql.deleteById, [param.name, param.id], function(err, result) {
                    if (result.affectedRows > 0) {
                        result = "success";
                    } else result = "fail";
                    jsonWrite(res, result);
                    connection.release();
                });
            } catch (err) {
                console.log(err.message);
                jsonWrite(res, "error");
            };

        });
    },
    //addnews
    addNews:function(req,res,next) {
    	pool.getConnection(function(err,connection) {
           var param = req.body;
    		try{
    			connection.query($sql.addNews,[param.tableName,param.title,param.pic,param.date,param.author,param.content],function(err,result){
    				if(result.affectedRows > 0) {
    					result = "success";
    				}else result = "fail";
    				jsonWrite(res,result);
    				connection.release();
    			});
    		}catch(err){
    			console.log(err.message);
                jsonWrite(res,param);
    		}
    	});
    }
}
