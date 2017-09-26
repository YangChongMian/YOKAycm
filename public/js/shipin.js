
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






(()=>{

  var imgs = [
    "images/shipin/LB1.jpg",
    "images/shipin/LB2.jpg",
    "images/shipin/LB3.jpg",
    "images/shipin/LB4.jpg"
  ];


  var LIWIDTH = 1180;
  var moved = 0;
  var timer = null;
  var $ul = $("#img_lunbo .middle .lb");
  var $index = $("#img_lunbo .middle .dingwei");
  var interval = 500;
  var WAIT = 2000+interval;

  var str = "";
  var strIndex = "";
  for(var src of imgs){
    str+=`<li><img src="${src}"/></li>`;
    strIndex+=`<li></li>`;
  }
  str +="<li><img src='images/shipin/LB1.jpg'/></li>";

  $ul.append(str).css("width",LIWIDTH*(imgs.length+1));
  $index.append(strIndex).children().first().addClass("hover");


  function play(){
    timer = setInterval(function(){
      moved++;
      $ul.animate({left:-LIWIDTH*moved},interval,()=>{
        if(moved==4){
          moved=0;
          $ul.css("left",0);
        }
        $index.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
      })
    },WAIT);
  }

  play();

  $("#img_lunbo .middle").hover(
    ()=>{clearInterval(timer)},
    ()=>{play()}
  );


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
  //console.log(btn);
  var login = document.getElementById('login');//整个界面
  var a = document.querySelector('#login ul .li1 h1 .close');
  // console.log(a);
  // console.log(login);
  btn.onclick = function(){
    login.style.display = 'block';
  };
  a.onclick = function(){
    login.style.display = 'none';
  }
})();
