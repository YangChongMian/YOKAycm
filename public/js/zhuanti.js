//轮播下面的下拉列表  鼠标进入显示隐藏
(()=>{
$("#two li:first-child").on("mouseover",function(){
  $("#two .jieri").css("display","block");
});
$("#two li:first-child").on("mouseout",function(){
  $("#two .jieri").css("display","none");
});

$("#two li:nth-child(2)").on("mouseover",function(){
  $("#two .pindao").css("display","block");
});
$("#two li:nth-child(2)").on("mouseout",function(){
  $("#two .pindao").css("display","none");
});


})();




//----------大轮播---------------
(()=>{
  var images = [
    "images/zhuanti/LB1.jpg",
    "images/zhuanti/LB2.jpg",
    "images/zhuanti/LB3.jpg",
    "images/zhuanti/LB4.jpg",
    "images/zhuanti/LB5.gif",
    "images/zhuanti/LB6.gif"
  ];

  var LIWIDTH = 1160;
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
  str +="<li><img src='images/zhuanti/LB1.jpg'/></li>";

  $ul.append(str).css("width",LIWIDTH*(images.length+1));
  $index.append(strIndex).children().first().addClass("hover");


  function play(){
    timer = setInterval(function(){
      moved++;
      $ul.animate({left:-LIWIDTH*moved},interval,()=>{
        if(moved==6){
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







//**************登录页面显示隐藏****************
(()=>{
  var btn = document.querySelector('#head .ul1 .login');//登录按钮
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