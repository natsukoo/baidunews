//全局变量
var tableName = 'news';

//获取数据的函数
function getContent(tableName){ 
    $("#getData").empty();
    $.ajax({
        url: "./php/getData.php",
        type:"GET",
        data:{
            tableName:tableName,
        },
        dataType:"json",
        success:function(data){
            if (data == "blank") {
                $("#getData").append("<p>表内无数据</p>");
            }else{
                $.each(data,function(index,value){
                    $("#getData").append("<tr><td class='col-lg-1 col-md-1 col-sm-1'><input type='radio' name='datas' id='"+value.newsID+"'><td class='col-lg-3 col-md-3 col-sm-3'>"+value.newsTitle+"</td><td class='col-lg-3 col-md-3 col-sm-3'>"+value.newsPic+"</td><td class='col-lg-2 col-md-2 col-sm-2'>"+value.newsAuthor+"</td><td class='col-lg-2 col-md-2 col-sm-2'>"+value.newsDate+"</td><td class='col-lg-1 col-md-1 col-sm-1'><a href='#collapse"+value.newsID+"'class='detail-link' data-toggle='collapse' data-parent='#accordion'><span class='glyphicon glyphicon-chevron-down'></span></a></td></tr><tr id='collapse"+value.newsID+"'class='collapse'><td colspan='10'>"+value.newsContent+"</td></tr>");

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
    $("#menu a").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        tableName = $(this).attr("id");
        $("#deleteResult").text("");
        getContent(tableName);
    })
    //新增新闻按钮，出来的新增表单小块
    $("#addNews").on("click", function() {
            //判断下面的块是否为显示的，若是则隐藏
            if ($("#updateDetail").is(':visible')) {
                $("#updateDetail").slideUp();
            };
            $("#addNewsDetail").stop().slideToggle();
            $("#deleteResult").text("");
            $("#addResult").text("");
        })
        //新增新闻的提交按钮，要穿数据进数据库
    $("#addNewsDetail #addNewsDetailBtn").on("click", function(event) {
        event.preventDefault();
        var point = $("#newsTitle").val()&& $("#newsPic").val()&& $("#newsAuthor").val()&& $("#newsDate").val()&& $("#newsContent").val();
        if (!point) {
            alert("请补全信息！");
            return;
        }
        $.ajax({
            url: "./php/addNews.php",
            type: "post",
            // dataType:"json",//加了这个就会出来parsererror，估计要用www-?-urlencode
            data: {
                tableName:tableName,
                newsTitle: $("#newsTitle").val(),
                newsPic: $("#newsPic").val(),
                newsAuthor: $("#newsAuthor").val(),
                newsDate: $("#newsDate").val(),
                newsContent: $("#newsContent").val()
            },
            success: function(data) {
                $("#addResult").text("新增成功！")
                $("#addNewsDetail")[0].reset();
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#addResult").text("新增失败");
                console.log(arguments);
            }
        });
        getContent(tableName);
    });
    //修改新闻的button触发事件
    $("#updateNews").on("click", function() {
        // 判断新增块是否是显示的，若是则隐藏
        if ($("#addNewsDetail").is(':visible')) {
            $("#addNewsDetail").slideUp();
        };
        if ($("#updateDetail").is(':visible')) {
            $("#updateDetail").slideUp();
        }else if(!$("input[type='radio']:checked").val()) {
            alert("请选择一条新闻");
        }
    
        $("#deleteResult").text("");
        var radio = $("input[type='radio']");
       
        //因为用了radio，所以每次只能选取一条数据进行修改。本来用的checkbox，实现难度太大
        for (var i = radio.length - 1; i >= 0; i--) {
            if (radio[i].checked) {
                var x = radio[i].id;
                $.ajax({
                    url: "./php/update.php?id="+x+"&tableName="+tableName,
                    type: "GET",
                    dataType:"json",
                    success: function(data) {
                        // 此处已经可以取到由后台发过来的数据了。然后就是利用jq将其添加到页面中去。
                        $.each(data,function(index,flag){
                            $("#updateDetail").stop().slideDown().attr("name",flag.newsID);
                            $("#upnewsTitle").attr("value",flag.newsTitle);
                            $("#upnewsAuthor").attr("value",flag.newsAuthor);
                            $("#upnewsPic").attr("value",flag.newsPic);
                            $("#upnewsDate").attr("value",flag.newsDate);
                            $("#upnewsContent").val(flag.newsContent);
                            $("input[type='radio']:checked").attr("checked",false);
                         });
                    },
                    error: function(XMLHttpRequest, textStatus, errorThrown) {
                        console.log(arguments);
                    }
                });
            }//if结束

        }//for 结束
    });//修改新闻button触发事件结束


    // 删除新闻的按钮事件
    $("#deleteNews").click(function() {
        var radio = $("input[type='radio']");
        var key = $("input[type='radio']:checked").val();
        if (!key) {
            alert("请选择一条新闻");
        }
            for (var i = radio.length - 1; i >= 0; i--) {
                if (radio[i].checked) {
                    x = radio[i].id;
                    $(radio[i]).parent().empty().siblings().remove();
                    $.ajax({
                        url: "./php/delete.php?id=" + x+"&tableName="+tableName,
                        type: "GET",
                        success: function(data) {
                            $("#deleteResult").text("删除成功！");
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            $("#deleteResult").text("删除失败！错误："+XMLHttpRequest.status);
                        }
                    })
                }
            }

        })

    // 下面是修改新闻按的提交的按钮。
    $("#updateNewsDetailBtn").click(function(event) {
        //这一行是禁止该button进行页面刷新。
        event.preventDefault();
        var num = $("#updateDetail").attr("name");
        var point = $("#upnewsTitle").val()&& $("#upnewsPic").val()&& $("#upnewsAuthor").val()&& $("#upnewsDate").val()&& $("#upnewsContent").val();
        if (!point) {
            alert("请补全信息！");
            return;
        }
        $.ajax({
            url: "./php/executeUpdate.php",
            type: "post",
            data: {
                tableName:tableName,
                newsID:num,
                newsTitle: $("#upnewsTitle").val(),
                newsPic: $("#upnewsPic").val(),
                newsAuthor: $("#upnewsAuthor").val(),
                newsDate: $("#upnewsDate").val(),
                newsContentss: $("#upnewsContent").val()
            },
            success: function(data) {
                console.log(data);
                $("#updateResult").text("修改成功！");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                $("#addResult").text("修改失败");
                console.log(arguments);
            }
        });
        getContent(tableName);
    });

    $("#quit").click(function(){
        $("#updateDetail").stop().slideUp();
    })
});