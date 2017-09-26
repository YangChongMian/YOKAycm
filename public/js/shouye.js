

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



//图片的鼠标进入事件
(()=>{
  var imgs = document.querySelectorAll("#popular .li_1 .div1 img");
  for(var i=0;i<imgs.length;i++){
    var img = imgs[i];
    img.onmouseover = function(){
      this.style.width = "378px";
    };
    img.onmouseout = function(){
      this.style.width = "373px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();

(()=>{
  var imgs = document.querySelectorAll("#popular .li_2 .div1_li2 .div1_right img");
  for(var i=0;i<imgs.length;i++){
    var img = imgs[i];
    img.onmouseover = function(){
      this.style.width = "378px";
    };
    img.onmouseout = function(){
      this.style.width = "373px";
      this.style.transition = "all 0.05s linear";
    }
  }
})();

(()=>{
  var imgs = document.querySelectorAll("#popular .li_2 .div1_li2 .div1_3 img");
  for(var i=0;i<imgs.length;i++){
    var img = imgs[i];
    img.onmouseover = function(){
      this.style.width = "378px";
    };
    img.onmouseout = function(){
      this.style.width = "373px";
      this.style.transition = "all 0.05s linear";
    }
  }
})();

(()=>{
  var imgs = document.querySelectorAll("#popular .li_2 .div2_li2 .div2_right img");
  for(var i=0;i<imgs.length;i++){
    var img = imgs[i];
    img.onmouseover = function(){
      this.style.width = "378px";
    };
    img.onmouseout = function(){
      this.style.width = "373px";
      this.style.transition = "all 0.05s linear";
    }
  }
})();

(()=>{
  var imgs = document.querySelectorAll("#popular .li_2 .div2_li2 .div2_img img");
  for(var i=0;i<imgs.length;i++){
    var img = imgs[i];
    img.onmouseover = function(){
      this.style.width = "378px";
    };
    img.onmouseout = function(){
      this.style.width = "373px";
      this.style.transition = "all 0.05s linear";
    }
  }
})();

(()=>{
  var imgs=document.querySelectorAll("#tuwenzuhe .bottom .d01 .left_4 .d04 li dl a img");
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
  var imgs=document.querySelectorAll("#tuwenzuhe1 .bottom ul li ul li dl a img");
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
  var imgs=document.querySelectorAll("#tuwenzuhe2 .center .right2 dl a img");
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
  var imgs=document.querySelectorAll("#tuwenzuhe3 .bottom ul li dl a img");
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
  var imgs=document.querySelectorAll("#tuwenzuhe4 .bottom ul li dl a img");
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

//广告的显示隐藏
(()=>{
  $("#adj .adj_margin ul li:last-child").on("click",function(){
    //console.log(2);
    $("#adj .adj_margin ul li:last-child").addClass("active4").siblings().removeClass("active4");
    $("#adj .adj_margin .active20")
      .css("zIndex",20).css("display","block")
      .next().css("zIndex",0).css("display","none");
  });
  $("#adj .adj_margin ul li:first-child").on("click",function(){
    //console.log(2);
    $("#adj .adj_margin ul li:first-child").addClass("active4").siblings().removeClass("active4");
    $("#adj .adj_margin .active2")
      .css("zIndex",20).css("display","block")
      .prev().css("zIndex",0);
  });
})();

//----------大轮播---------------
(()=>{
  var images = [
    "images/shouye/z0021.jpg",
    "images/shouye/z0022.jpg",
    "images/shouye/z0023.jpg",
    "images/shouye/z0024.jpg",
    "images/shouye/z0025.jpg",
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
  for(var src of images){
    str+=`<li><img src="${src}"/></li>`;
    strIndex+=`<li></li>`;
  }
  str +="<li><img src='images/shouye/z0021.jpg'/></li>";

  $ul.append(str).css("width",LIWIDTH*(images.length+1));
  $index.append(strIndex).children().first().addClass("hover");


  function play(){
    timer = setInterval(function(){
      moved++;
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

/****************中间小轮播*****************************/
(()=>{
  var moved=0;
  var IMGWIDTH=766;
  $("#img_1 .Dright").click(function() {
    //  console.log("clickright");
    if (moved < 5) {
      moved++;
      $("#img_1 ul").animate({left: -IMGWIDTH * moved + "px"}, "3000");
    } else {
      //判断，如果移动了四个，那么移动个数归零回到起始位置，设置ul的左边长度为0；
      moved = 0;
      $("#img_1 ul").css("left", 0).css("transition", "all 0.35s linear");
    }
  });

  (()=>{
    /***********半圆和箭头的显示隐藏*************************/
    (()=> {

      var divs = document.getElementById("img_1");

      divs.onmouseover = function () {
        var img1 = document.querySelector("#img_1 .d04");
        var divs1 = document.querySelector("#img_1 .d02");
        img1.style.display = "block";
        divs1.style.backgroundColor = "#000";
        var img2 = document.querySelector("#img_1 .d03");
        var divs2 = document.querySelector("#img_1 .d01");
        img2.style.display = "block";
        divs2.style.backgroundColor = "#000";
      };
      divs.onmouseout = function () {
        // var img = document.querySelector("#img_1 .d04");
        var divs1 = document.querySelector("#img_1 .d02");
        //img.style.display = "none";
        divs1.style.backgroundColor = "#A9A9A9";
        //var img2 = document.querySelector("#img_1 .d03");
        var divs2 = document.querySelector("#img_1 .d01");
        // img2.style.display = "none";
        divs2.style.backgroundColor = "#A9A9A9";
      };
    })();

  })();

  $("#img_1 .Dleft").click(function(){
    console.log(moved);
    console.log(IMGWIDTH*moved);
    moved--;
    if(moved<0){
      $("#img_1 ul").animate({left:-IMGWIDTH*5+"px"},"3000");
      moved = 5;
    }else if(moved>=1&&moved<5){
      console.log("in");

      $("#img_1 ul").animate({left:-IMGWIDTH*moved+"px"},"3000");

    }else{
      $("#img_1 ul").css("left",0).css("transition","all 0.35s linear");
    }

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



