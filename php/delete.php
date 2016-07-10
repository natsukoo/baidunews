<?php 
	require_once "dbbase.php";
	$id = $_GET["id"];
	$tableName = $_GET["tableName"];

	if (deleteBaseId($id)) {
		echo "success";
	}else echo "error";
 ?>