//头部微信二维码显示隐藏
(()=>{
  var weixin = document.querySelector("#nav .nav_ul .right li:nth-child(3)");
  var img = document.querySelector("#nav .nav_ul .right li:nth-child(3) .img_hidden");
  weixin.onmousemove = function(){
    img.style.display="block";
    img.style.zIndex="25";
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
  var imgs = document.querySelectorAll("#redian .f_ul li dl a img");
  for(var i=0;i<imgs.length;i++){
     var img=imgs[i];
     img.onmouseover = function(){
     this.style.width = "378px";
    //  console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "373px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();

(()=>{
  var imgs = document.querySelectorAll("#tu6 li dl a img");
  for(var i=0;i<imgs.length;i++){
     var img=imgs[i];
     img.onmouseover = function(){
     this.style.width = "378px";
    //  console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "373px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();
(()=>{
  var imgs = document.querySelectorAll("#two .left dl a img");
  for(var i=0;i<imgs.length;i++){
     var img=imgs[i];
     img.onmouseover = function(){
     this.style.width = "575px";
     // console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "570px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();
(()=>{
  var imgs = document.querySelectorAll("#two .right dl a img");
  for(var i=0;i<imgs.length;i++){
     var img=imgs[i];
     img.onmouseover = function(){
     this.style.width = "575px";
   //   console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "570px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();


(()=>{
  var imgs = document.querySelectorAll("#middle-zong li dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover = function(){
      this.style.width = "378px";
    //  console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "373px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();

(()=>{
  var imgs = document.querySelectorAll("#two3 .left dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover = function(){
      this.style.width = "575px";
     // console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "570px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();
(()=>{
  var imgs = document.querySelectorAll("#two3 .right dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover = function(){
      this.style.width = "575px";
     // console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "570px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();

(()=>{
  var imgs = document.querySelectorAll("#middle-zong3 li dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover = function(){
      this.style.width = "378px";
     // console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "373px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();

(()=>{
  var imgs = document.querySelectorAll("#two4 .right dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover = function(){
      this.style.width = "575px";
    //  console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "570px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();
(()=>{
  var imgs = document.querySelectorAll("#two4 .left dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover = function(){
      this.style.width = "575px";
   //   console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "570px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();
(()=>{
  var imgs = document.querySelectorAll("#middle-zong5 li dl a img");
  for(var i=0;i<imgs.length;i++){
    var img=imgs[i];
    img.onmouseover = function(){
      this.style.width = "378px";
   //   console.log(1);
    };
    img.onmouseout = function(){
      this.style.width = "373px";
      this.style.transition = "all 0.05s linear";
    }
  }

})();



//----------大轮播---------------
(()=>{
  var images = [
    "images/shehua/LB1.jpg",
    "images/nanshi/E02.jpg",
    "images/shehua/LB3.jpg",
    "images/meirong/datu3.jpg",
    "images/shehua/LB5.jpg"
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
  str +="<li><img src='images/shehua/LB1.jpg'/></li>";

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