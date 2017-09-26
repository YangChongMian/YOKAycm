//功能：用户注册
//获取提交按钮，并绑定单击事件
$("#btn_register").click(function(){
  console.log(1);
  var tel = /1[35789][0-9]{8}/;
  if(!tel.test($("#tel").val())){
    alert("请输入正确的手机号");
    return;
  }



  var unamereg = /^[a-z0-9]{6,12}$/i;
  if(!unamereg.test($("#uname").val())){
    alert("用户名格式不正确，请重新填写");
    return;
  }


  var upwdreg = /^[a-zA-Z0-9]{6,12}$/i;
  if(!upwdreg.test($("#upwd").val())){
    alert("用户密码格式不正确，请重新输入");
    return;
  }

  if($("#upwd").val()!=$("#repwd").val()){
    alert("请保持两次输入的密码一致");
    return;
  }

//以上验证都通过，程序才会执行到此处

  //获取参数
  var t = $("#tel").val();
  var u = $("#uname").val();
  var p = $("#upwd").val();
  //发送请求
  $.ajax({
    type:"POST",
    url:"/reg.do",
    data:{tel:t,uname:u,upwd:p},
    success:function(data){
      console.log(data);
      if(data.code>0){
        alert(data.msg);
      }
    },
    error:function(){
      alert("网络出现故障");
    }
  });

});












