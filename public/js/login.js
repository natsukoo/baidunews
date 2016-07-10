 $("#login").click(function(event){
            event.preventDefault();
            var username = $("#username").val();
            var pwd = $("#userpwd").val();

            if (username&&pwd) {
                $.ajax({
                    url:"http://localhost:3000/users/verifyResult",
                    type:"GET",
                    data:{
                        username:username,
                        pwd:pwd
                    },
                    success:function(data){
                        //无端自带空格换行。用正则把格式换一下。
                            var newData=data.replace(/\s/g,''); 
                        if (newData=='fail') {
                            alert("登陆失败，请确认用户名和密码");
                        }else {
                            window.location.href='admin.html';
                        }
                    },
                    error:function(XMLHttpRequest, textStatus, errorThrown){
                        console.log(arguments);
                    }
                })
                
            }else alert("请补全信息。")
        });