<?php 
//这个页面是onload的时候载入数据库的所有的新闻的
require_once 'dbbase.php';
$con = connectDB(); 
mysql_select_db("newsWeb",$con);
$newsTitle = $_REQUEST['newsTitle'];
$newsPic = $_REQUEST['newsPic'];
$newsAuthor = $_REQUEST['newsAuthor'];
$newsDate = $_REQUEST['newsDate'];
$newsContent = $_REQUEST['newsContent'];
$tableName = $_REQUEST['tableName'];

$sql = "INSERT INTO ".$tableName." (newsTitle,newsPic,newsAuthor,newsDate,newsContent) VALUES ('$newsTitle','$newsPic','$newsAuthor','$newsDate','$newsContent')";
mysql_query("set names 'utf8'");
$result = mysql_query($sql,$con);
if (!$result) {
	die('Error:'.mysql_error());
}else{
	echo "success";
}

?>