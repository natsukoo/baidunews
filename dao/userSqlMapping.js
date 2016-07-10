//dao/userSqlMapping.js
//CRUD SQL语句
//查询newsWeb数据库内的user的表

var user = {
	queryByName:'select * FROM user where username=?&&userpwd=?'
}

module.exports = user;

