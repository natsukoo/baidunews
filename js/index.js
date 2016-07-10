//全局变量
var tableName = 'news';

//获取数据的函数
function getContent(tableName){ 
    $("#container").empty();
    $.ajax({
        url: "./php/getData.php",
        type:"GET",
        data:{
            tableName:tableName,
        },
        dataType:"json",
        success:function(data){
            if (data == "blank") {
                $("#container").append("<p>表内无数据</p>");
            }else{
                $.each(data,function(index,value){
                    $("#container").append("<div><img alt='"+value.newsPic+"'><p>"+value.newsTitle+"</p><span>"+value.newsDate+"</span></div>");

                });
            }
        },
        error:function(XMLHttpRequest){
            //通讯失败，返回状态吗
            alert("通讯失败：" + XMLHttpRequest.status);
        }
    })
}

$(document).ready(function() {
    getContent(tableName);
    //这个是判断那个表格，然后从哪个表格内部读取数据
    $(".menu li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        tableName = $(this).attr("id");
        getContent(tableName);
    })

    $(".load").click(function(){
        alert("客官大人，暂时还未实现哟～");
    })
});




