"use strict";

//头部微信二维码显示隐藏
(()=>{
  var weixin = document.querySelector("#nav .nav_ul .right li:nth-child(3)");
  var img = document.querySelector("#nav .nav_ul .right li:nth-child(3) .img_hidden");
  weixin.onmouseover = function(){
    img.style.display="block";
  };
  weixin.onmouseout = function(){
    img.style.display="none";
  }
})();


//搜索框的显示隐藏
(()=>{
  var search = document.querySelector("#nav .nav_ul .right li:last-child");
  var input = document.querySelector("#nav .nav_ul .right li:last-child ul");
  search.onmousemove = function(){
    input.style.display="block";
  };
  search.onmouseout = function(){
    input.style.display="none";
  }
})();




//var lis=document.querySelectorAll("#adj .right_adj ul li");
//
//lis[i].onmouseover=function(){
//  var divs=document.querySelector("#adj .right_adj .active1");
//    for(var i= 0;i<lis.length;i++){
//        if(lis[i].className=="active3"){
//            this.className="";
//        }
//    }
//    this.className="active3";
//};

(()=>{
  var imgs=document.querySelectorAll("#redian .f_ul li dl a img");

  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];

    img.onmouseover=function(){
      this.style.width="378px";
      this.style.transition="all 0.05s linear";

    };
    img.onmouseout=function(){
      this.style.width="373px";
    }
  }
})();

(()=>{
  var imgs=document.querySelectorAll("#tu6 li dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover=function(){
      this.style.width="378px";
      this.style.transition="all 0.05s linear";

    };
    img.onmouseout=function(){
      this.style.width="373px";

    }
  }
})();

(()=>{
  var imgs=document.querySelectorAll("#liangtu li dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover=function(){
      this.style.width="575px";
      this.style.transition="all 0.05s linear";
      console.log(1);
    };
    img.onmouseout=function(){
      this.style.width="570px";
    }
  }
})();

(()=>{
  var imgs=document.querySelectorAll("#xiaotu li dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover=function(){
      this.style.width="378px";
      this.style.transition="all 0.05s linear";
      console.log(1);
    };
    img.onmouseout=function(){
      this.style.width="373px";
    }
  }
})();

(()=>{
  var imgs=document.querySelectorAll("#bottom-zong1 li dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover=function(){
      this.style.width="378px";
      this.style.transition="all 0.05s linear";
      console.log(1);
    };
    img.onmouseout=function(){
      this.style.width="373px";
    }
  }
})();

//四个小长图的遮罩层鼠标进入事件
var divs = document.querySelectorAll("#situ li .div1-1");
for(var i=0;i<divs.length;i++){
  var div = divs[i];
  div.onmouseover = function(){
    this.style.opacity = 0;
  };
  div.onmouseout = function(){
    this.style.opacity = 0.4;
    this.style.transition = "all 0.1s linear";
  }
}

//大轮播 *********************************************
(()=>{
  //1、定义初始变量
  var imgs = [
    "images/shishang/z0022.jpg",
    "images/shishang/z0023.jpg",
    "images/shishang/z0024.jpg",
    "images/shishang/z0025.jpg",
    "images/shishang/z0026.jpg"
  ];

  var timer = null;
  var LIWIDTH = 1180;
  var moved = 0;
  var $ul = $("#img_lunbo .middle .lb");
  var $index = $("#img_lunbo .middle .dingwei");
  var interval = 500;
  var WAIT = interval+2000;


  //2、动态生成图片和index
  var str = "";
  var strIndex = "";
  for(var src of imgs){
    str+=`<li><img src="${src}"></li>`;
    strIndex+=`<li></li>`;
  }
str+="<li><img src='images/shishang/z0022.jpg'></li>";
  $ul.append(str).css("width",LIWIDTH*(imgs.length+1));
  $index.append(strIndex).children().first().addClass("hover").remove("#img_lunbo .middle .dingwei li:last-child");

//自动轮播
  function play(){
    timer = setInterval(function(){
      moved++;
    //  console.log(moved);
      $ul.animate({left:-LIWIDTH*moved},interval,()=>{
        if(moved==5){
          moved=0;
          $ul.css("left",0);
        }
        $index.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
      })
    },WAIT);
  }
play();


  //鼠标进入暂停定时器，离开重启定时器
$("#img_lunbo .middle").hover(
  ()=>{clearInterval(timer)},
  ()=>{play()}
);

//点击横线时切换
  $index.on("click","li",function(e){
    var $tar = $(e.target);
    moved = $tar.index();
   // console.log(moved);
    $ul.stop(true).animate(
      {left:-LIWIDTH*moved},
      interval,
      ()=>{$tar.addClass("hover").siblings().removeClass("hover")}
    )
  })
})();



//小轮播
(()=>{
  var moved = 0;
  var LIWIDTH = 766;
  var $ul = $("#only .only_l .view .img_1");
  var $left = $("#only .only_l .view .Dleft .d01");
  var $right = $("#only .only_l .view .Dright .d02");

  $("#only .only_l .view .Dright").click(function(){
    if(moved<4){
      moved++;
      $ul.animate({left:-moved*LIWIDTH},350);
    }else{
      moved=0;
      $ul.css("left", 0);
    }
  });

  $("#only .only_l .view .Dleft").click(function(){
    console.log(moved);
    console.log(LIWIDTH*moved);
    moved--;
    if(moved<0){
      $ul.animate({left:-LIWIDTH*4+"px"},"3000");
      moved = 4;
    }else if(moved>=1&&moved<5){
      console.log("in");

      $ul.animate({left:-LIWIDTH*moved+"px"},"3000");

    }else{
      $ul.css("left",0).css("transition","all 0.35s linear");
    }

  })



})();






//小轮播的方向箭头的显示隐藏
(()=> {

  var divs = document.querySelector("#only .only_l .view");

  divs.onmouseover=function () {
    var divs1 = document.querySelector("#only .only_l .view .Dright .d02");
    divs1.style.backgroundColor = "#000";
    var divs2 = document.querySelector("#only .only_l .view .Dleft .d01");
    divs2.style.backgroundColor = "#000";
  };
  divs.onmouseout = function () {
    var divs1 = document.querySelector("#only .only_l .view .Dright .d02");
    divs1.style.backgroundColor = "#A9A9A9";
    var divs2 = document.querySelector("#only .only_l .view .Dleft .d01");
    divs2.style.backgroundColor = "#A9A9A9";
  };
})();

/**************底部二维码的显示隐藏*********************************/

(()=>{
  var as = document.querySelectorAll("#dibuxianshi .bbb1");
  for(var i=0;i<as.length;i++){
    as[i].onmouseover=function(){
      var ul = this.children[1];
      ul.style.display="block";
      $("#img img:nth-child(1)").addClass("active").siblings().removeClass("active");
    };
    as[i].onmouseout=function(){
      var ul = this.children[1];
      ul.style.display="none";
      $("#img img:nth-child(1)").removeClass("active").siblings().removeClass("active");
    }
  }
})();

/**************底部二维码的显示隐藏*********************************/
(()=>{
  var as = document.querySelectorAll("#dibuxianshi .bbb2");

  for(var i=0;i<as.length;i++){
    as[i].onmouseover=function(){
      var ul = this.children[1];
      ul.style.display="block";
      $("#img img:nth-child(2)").addClass("active").siblings().removeClass("active");
    };
    as[i].onmouseout=function(){
      var ul = this.children[1];
      ul.style.display="none";
      $("#img img:nth-child(2)").removeClass("active");
    }
  }
})();


(()=>{
  var as = document.querySelectorAll("#dibuxianshi .bbb3");
  for(var i=0;i<as.length;i++){
    as[i].onmouseover=function(){
      var ul = this.children[1];
      ul.style.display="block";
    };
    as[i].onmouseout=function(){
      var ul = this.children[1];
      ul.style.display="none";
    }
  }
})();







//**************登录页面显示隐藏****************
(()=>{
  var btn = document.querySelector('#nav .nav_ul .right .login');//登录按钮
  console.log(btn);
  var login = document.getElementById('login');//整个界面
  var a = document.querySelector('#login ul .li1 h1 .close');
   console.log(a);
   console.log(login);
  btn.onclick = function(){
    login.style.display = 'block';
  };
  a.onclick = function(){
    login.style.display = 'none';
  }
})();
