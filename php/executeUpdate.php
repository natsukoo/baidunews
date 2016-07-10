<?php 
require_once "dbbase.php";
// header('Content-type: application/javascript; charset=utf8');
$tablename = $_REQUEST['tableName'];
$id = $_REQUEST['newsID'];
$title = $_REQUEST['newsTitle'];
$pic = $_REQUEST['newsPic'];
$author = $_REQUEST['newsAuthor'];
$date = $_REQUEST['newsDate'];
$content = $_REQUEST['newsContentss'];

$flag = updateBaseId($tablename,$id,$title,$pic,$date,$author,$content);
if ($flag) {
	echo "修改成功";
}else echo "修改失败";
 
 ?>