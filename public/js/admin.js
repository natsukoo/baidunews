//全局变量
var tableName = 'news';

//获取数据的函数
function getContent(tableName) {
    $("#getData").empty();
    $.ajax({
        url: "http://localhost:3000/news/getData",
        type: "GET",
        data: {
            tableName: tableName,
        },
        dataType: "json",
        success: function(data) {
            if (data == "blank") {
                $("#getData").append("<p>表内无数据</p>");
            } else {
                $.each(data, function(index, value) {
                    $("#getData").append("<tr><td class='col-lg-2 col-md-2 col-sm-2'>" + value.newsTitle + "</td><td class='col-lg-2 col-md-2 col-sm-2'>" + value.newsPic + "</td><td class='col-lg-2 col-md-2 col-sm-2'>" + value.newsAuthor + "</td><td class='col-lg-2 col-md-2 col-sm-2'>" + value.newsDate + "</td><td class='col-lg-1 col-md-1 col-sm-1'><a href='#collapse" + value.newsID + "'class='detail-link' data-toggle='collapse' data-parent='#accordion'><span class='glyphicon glyphicon-chevron-down'></span></a></td><td class='col-lg-1 col-md-1 col-sm-1'><button class='btn btn-info update' name='" + value.newsID + "'>修改</button></td><td class='col-lg-1 col-md-1 col-sm-1'><button class='btn btn-danger delete' name='" + value.newsID + "'>删除</button></td></tr><tr id='collapse" + value.newsID + "'class='collapse'><td colspan='10'>" + value.newsContent + "</td></tr>");

                });
            }
        },
        error: function(XMLHttpRequest) {
            //通讯失败，返回状态吗
            alert("通讯失败：" + XMLHttpRequest.status);
        }
    })
}
//看是否已经登录来判断
function getAccount() {
    $.ajax({
        url: 'http://localhost:3000/users/getAccount',
        type: 'GET',
        success: function(data) {
            if (data == "error") {
                alert("请登录！");
                window.location.href = 'login.html';
                return false;
            } else {
                $("#account").text(data);
                return true;
            };
        },
        error: function(XMLHttpRequest) {
            //通讯失败，返回状态吗
            alert("通讯失败：" + XMLHttpRequest.status);
            return false;
        }
    })
}
//注销所调用的函数
function logout() {
    $.ajax({
        //这个是清除session 的
        url: 'http://localhost:3000/users/logoutAccount',
        type:'GET',
        success: function(data) {
            if(data == "success"){
            window.location.href = 'login.html';
        }else alert("henn");
        },
        error: function(XMLHttpRequest) {
            //通讯失败，返回状态吗
            alert("通讯失败：" + XMLHttpRequest.status);
        }
    });
}
//将字符html转义。
function html_encode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
}

$(document).ready(function() {
    // 通过session来获取当前登录情况
    if(!getAccount()){
        getContent(tableName);
    }
    // 注销调用logout函数
    $("#logout").click(logout);
    //这个是判断那个表格，然后从哪个表格内部读取数据
    $("#menu a").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        tableName = $(this).attr("id");
        getContent(tableName);
        $("#addResult").text("")
    })

    //新增新闻按钮，出来的新增表单小块
    $("#addNews").on("click", function() {
            var addNode = $(this);
            // console.log(addNode);
            //判断下面的块是否为显示的，若是则隐藏
            $("#addNewsDetail").stop().slideToggle(function() {
                if ($(this).is(":visible")) addNode.text("收起");
                else addNode.text("新增新闻");
            });
            $("#addNewsDetail")[0].reset();
            $("#addResult").text("");
        })
        //新增新闻内部的按钮点击后提交表单
    $("#addNewsDetail #addNewsDetailBtn").on("click", function(event) {
        event.preventDefault();
        var point = $("#newsTitle").val() && $("#newsPic").val() && $("#newsAuthor").val() && $("#newsDate").val() && $("#newsContent").val();
        if (!point) {
            alert("请补全信息！");
            return;
        }
        $.ajax({
            url: "http://localhost:3000/news/addNews",
            type: "post",
            //dataType:"json",//加了这个就会出来parsererror，估计要用www-?-urlencode
            data: {
                tableName: tableName,
                title: $("#newsTitle").val(),
                pic: $("#newsPic").val(),
                author: $("#newsAuthor").val(),
                date: $("#newsDate").val(),
                content: $("#newsContent").val()
            },
            success: function(data) {
                if (data == 'success') {
                    $("#addResult").text("新增成功！");
                    $("#addNewsDetail").hide(0);
                    $("#addNews").text("新增新闻");

                } else {
                    $("#addResult").text("新增失败");
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log(arguments);
                console.log(XMLHttpRequest.status);
            }
        });
        getContent(tableName);
    });
    //修改新闻按钮，然后弹出修改面板
    $("#getData").on("click", ".update", function(event) {
        event.preventDefault();
        var key = $(this).attr('name');
        //将每个要修改的通过form的name属性传进来。
        $(".panel-body form").attr("name", key);
        if ($("#addNewsDetail").is(":visible")) {
            $("#addNewsDetail").hide(0);
            $("#addNews").text("新增新闻");
        }

        $(".shade").show(0, function() {
            $.ajax({
                url: "http://localhost:3000/news/resultBaseId",
                data: {
                    tableName: tableName,
                    id: key
                },
                type: "GET",
                dataType: "json",
                success: function(data) {
                    $.each(data, function(index, value) {
                        $("#uptitle").attr('value', value.newsTitle);
                        $("#uppic").attr('value', value.newsPic);
                        $("#update").attr('value', value.newsDate);
                        $("#upauthor").attr('value', value.newsAuthor);
                        $("#upcontent").val(value.newsContent);
                    });
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert("通讯失败" + XMLHttpRequest.status);
                }
            })
        });
        // 弹出面板的同时要将整个页面的滚动禁用掉，暂时只在pc端生效
        $('body, html').css({
            'overflow': 'hidden'
        });
    });

    // 面板上保存按钮的点击事件
    $("#updateBtn").on('click', function(event) {
        event.preventDefault();

        var point = $("#uptitle").val() && $("#uppic").val() && $("#update").val() && $("#upauthor").val() && $("#upcontent").val();
        if (!point) {
            alert("请补全信息！");
            return;
        }
        $.ajax({
            url: "http://localhost:3000/news/updaetBaseId",
            type: "post",
            dataType:"json",
            data: {
                tableName:tableName,
                id: $(".panel-body form").attr("name"),
                title: html_encode($("#uptitle").val()),
                pic: html_encode($("#uppic").val()),
                author: html_encode($("#upauthor").val()),
                date: $("#update").val(),
                content: html_encode($("#upcontent").val())
            },
            success: function(data) {
                if (data) {
                    alert("修改成功");
                    $(".shade").hide();
                    getContent(tableName);
                    $('body, html').css({
                        'overflow': 'auto'
                    });
                } else
                    alert("修改失败");
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert("通讯失败" + XMLHttpRequest.status);
            }
        });
        
    })

    // 面板上的关闭按钮和面板上的取消按钮点击后，将隐藏面板
    $("#close").add("#close2").click(function(event) {
        // 这个也会刷新页面，所以要阻止默认事件
        event.preventDefault();
        $(".shade").hide();
        $('body, html').css({
            'overflow': 'auto'
        });
        //还有一个功能，实时更新，但是更新的时候会刷新了。。
    })





    // 删除新闻的按钮事件
    $("#getData").on("click", ".delete", function(event) {
        event.preventDefault();
        var key = $(this).attr("name");
        var trNode = $(this).parentsUntil("tbody")[1];
        // console.log(trNode);
        $.ajax({
                url: "http://localhost:3000/news/deleteById",
                type: "GET",
                data: {
                    name: tableName,
                    id: key
                },
                success: function(data) {
                    if (data == 'success') {
                        alert("删除成功！");
                        //trNode.remove();
                        getContent(tableName);
                    } else {
                        alert("删除失败！");
                    }
                },
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    $("#deleteResult").text("删除失败！错误：" + XMLHttpRequest.status);
                }
            })
    })

});
