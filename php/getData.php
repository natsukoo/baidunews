<?php 
	require_once "dbbase.php";
	header('Content-type: application/json; charset=utf-8');
	$tableName = $_GET['tableName'];

	$data = getData($tableName);
	echo $data;

?>