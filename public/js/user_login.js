//功能:完成用户登录
//1:获取按钮
//2:绑定点击事件
$("#login_button").click(function(e){
  e.preventDefault();
  console.log(1);
  //3:获取用户名,验证正则表达式
  var unamereg = /^[a-z0-9]{6,12}$/i;
  console.log(2);
  //4:获取密码,  验证正则表达式
  if(!unamereg.test($("#input_name").val())){
    console.log(3);
    alert("用户名格式不正确，请检查");
    return;
  }
  var upwdreg = /^[a-z0-9]{6,12}$/i;
  if(!upwdreg.test($("#input_upwd").val())){
    console.log(4);
    alert("密码格式不正确，请检查");
    return;
  }
  console.log(5);
  //5:验证通过
  //6:ajax post /login.do
  var u = $("#uname").val();
  var p = $("#upwd").val();
  $.ajax({
    type:"POST",
    url:"/login.do",
    data:{uname:u,upwd:p},
    success:function(data){
      if(data.code>0){
        alert(data.msg);
        sessionStorage.setItem("rid",data.rid);
      }else{
        alert(data.msg);
      }
    }
  });
  //7:获取返回数据
  //{code:1,msg:"登录成功"} usercenter.html
  //{code:-1}              login.html
});
