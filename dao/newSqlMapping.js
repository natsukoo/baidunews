//dao/newSqlMapping.js
//CRUD SQL语句
//这个用于查询news的表
var news = {
	//获取该表格全部新闻
	getData:"select * from ?? order by newsID desc",
	//根据id值获取结果
	resultBaseId:"select * from ?? where newsID=?",
	//根据id值来提交update的值
	updaetBaseId:"UPDATE ?? set newsTitle=?,newsPic=?,newsAuthor=?,newsDate = ?,newsContent=? WHERE newsID =?",
	// updaetBaseId:"UPDATE ?? set newsTitle=? WHERE newsID =?",
	//根据id值来删除
	deleteById:"delete from ?? where newsID=?",
	//增加新的新闻
	addNews:"INSERT INTO ?? (newsTitle,newsPic,newsDate,newsAuthor,newsContent)VALUES(?,?,?,?,?)"

}

module.exports = news;