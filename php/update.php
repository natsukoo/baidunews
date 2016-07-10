<?php
//这个页面是修改新闻按钮，而返回管理者想要修改的新闻
require_once 'dbbase.php';
//设置页面内容是html编码格式是utf-8
//header('Content-type: text/plain; charset=utf8');
header('Content-type: application/json; charset=utf8');
//header('Content-type: text/html; charset=utf8');
// header('Content-type: application/javascript; charset=utf8');	
$id = $_GET['id'];
$tableName = $_GET['tableName'];

$result = resultBaseId($id,$tableName);

echo $result;
?>