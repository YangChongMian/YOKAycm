
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

  var imgs=[
    "images/nanshi/E01.jpg",
    "images/nanshi/E02.jpg",
    "images/nanshi/E03.jpg",
    "images/nanshi/E04.jpg",
    "images/nanshi/E05.jpg"
  ];

    var $ul=$("#tu");
    var $index=$("#img_lunbo .middle .dingwei");
    var LIWIDTH=parseFloat(
      $("#img_lunbo .middle").css("width")
    );
    $ul.css("width",LIWIDTH*(imgs.length+1));
    var strImgs=
      '<li><img src='+
      imgs.join('></li><li><img src=')+
      '></li>';
    strImgs+=`<li><img src="${imgs[0]}"></li>`;
    $ul.append(strImgs);
    var str="";
    for(var i=1;i<=imgs.length;i++){
      str+="<li></li>";
    }
    $index.append(str).children().first().addClass("hover");

    var speed=500;
    var wait=2000;
    var timer=null;
    var moved=0;
    function move(){
      timer=setInterval(()=>{
        moved++;
        //console.log( moved );
        $index.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
        $ul.animate({
            left:-moved*LIWIDTH
          },speed,
          ()=>{
            if(moved==5){
              moved=0;$ul.css("left",0);
              $index.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
            }
          });

      },wait);
    }
    move();


    //鼠标进入后停止定时器
    $("#img_lunbo .middle").hover(
      ()=>{clearInterval(timer);timer=null;},
      ()=>{move()}
    );



  $index.on("click","li",function(e){
    var $tar = $(e.target);
    moved = $tar.index();
    // console.log(moved);
    $ul.stop(true).animate(
      {left:-LIWIDTH*moved},
      speed,
      ()=>{$tar.addClass("hover").siblings().removeClass("hover")}
    )
  })




}
)();



//所有图片的鼠标进入事件
(()=>{
    var imgs = document.querySelectorAll("#tuwenzuhe li dl a img");
    for(var i=0;i<imgs.length;i++){
        var img = imgs[i];
        img.onmouseover = function(){
            this.style.width = "378px";
            this.style.transition = "all 0.05s linear";
        };
        img.onmouseout = function(){
            this.style.width = "373px";
        }
    }
})();/**************底部二维码的显示隐藏*********************************/

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




