<?php 
header("Content-type:text/html;charset=utf-8");
define('MYSQL_HOST', 'localhost');
define('MYSQL_USER', 'root');
define('MYSQL_PWD', '');

//固定的连接语句
function connectDB(){
	$con = mysql_connect(MYSQL_HOST,MYSQL_USER,MYSQL_PWD);
if (!$con) {
		die('Could not connect:'.mysql_error());
}else{
	mysql_query("set names utf8"); 
	return $con;
} 
    
}

//根据新闻类型（即表格来返回一个json数据）
function getData($tableName){
 	$conn = connectDB(); 
 	mysql_select_db("newsWeb",$conn); 
 	$sql = "select * from ".$tableName." order by newsID desc";
    $result = mysql_query($sql,$conn); 
    if ($result && mysql_num_rows($result)) {
    	while ($row = mysql_fetch_assoc($result)) {
    		$result_arr[] = $row;
    	};
    }else if(mysql_num_rows($result)==0){
    	$result_arr = "blank";
    };
    //返回一个json字符串
    return json_encode($result_arr,JSON_UNESCAPED_UNICODE);
}

//根据id来返回结果集
function resultBaseId($id,$tableName){
	$con = connectDB(); 
	mysql_select_db("newsWeb",$con);
	mysql_query("set names utf8");
	$sql = "select * from `".$tableName."` where newsID=".$id;
	$result = mysql_query($sql,$con);
	if (!$result) {
	die('Error:'.mysql_error());
	}else if ($result && mysql_num_rows($result)) {
    	while ($row = mysql_fetch_assoc($result)) {
    		$result_arr[] = $row;
   		};
    }else if(mysql_num_rows($result)==0){
    	$result_arr = "blank";
    };
    //返回一个json字符串
    return json_encode($result_arr,JSON_UNESCAPED_UNICODE);
  //     	$dataCount = mysql_num_rows($result);
		// for ($i = 0; $i < $dataCount; $i++) {
		//     $result_arr = mysql_fetch_assoc($result);
		//     $id = $result_arr['newsID'];
		//     $title = $result_arr['newsTitle'];
		//     $pic = $result_arr['newsPic'];
		//     $author = $result_arr['newsAuthor'];
		//     $date = $result_arr['newsDate'];
		//     $content = $result_arr['newsContent'];
		
}

//mysql_close($con);
//根据id值去删除数据库内
function deleteBaseId($id){
	$con = connectDB(); 
	mysql_select_db("newsWeb",$con);
	$sql = "delete from `news` where newsID='$id'";
	mysql_query($sql,$con);
	if (mysql_affected_rows()>0) {
		return true;
	}else{
		die('Error:'.mysql_error());
		return false;
	}
}

//根据ID值来进行update，其他所有列的座位参数传入。

function updateBaseId($tablename,$id,$title,$pic,$date,$author,$content){
	$con = connectDB(); 
	mysql_select_db("newsWeb",$con);
	mysql_query("set names utf8");
	$sql ="UPDATE ".$tablename." set newsTitle='".$title."',newsPic='".$pic."',newsAuthor='".$author."',newsDate = '".$date."',newsContent='".$content."' WHERE newsID =".$id;

	mysql_query($sql,$con);
	if (mysql_affected_rows()==1) {
		return true;
	}else{
		die('Error:'.mysql_error());
		return false;
	}

}


 ?>

