



(()=>{
//微信显示效果
var ul_li=document.querySelector("#nav .nav_ul .right li:nth-child(3)");
var div_hidden=document.getElementsByClassName("img_hidden")[0];
ul_li.onmouseover=function(){
  div_hidden.style.display="block";
};
ul_li.onmouseout=function(){
    div_hidden.style.display="none";
};


    //轮播
var imgs=[
    "images/meirong/l01.jpg",
    "images/meirong/datu1.jpg",
    "images/meirong/datu2.jpg",
    "images/meirong/datu3.jpg",
    "images/meirong/l01.jpg"
];
//图片轮播
var $ulImgs=$("#img_lunbo .middle .lb"),//ul
    LIWIDTH=1180,                           //li
    $ulIdxs=$("#img_lunbo .middle .dingwei"),// 小点或者横杠
    moved= 0,                               //移动的li个数
    interval=500,
    WAIT=3000+interval,
    timer=null;



var str="",strIdxs="",i=1;
for(var src of imgs){
    str+=`<li><img src="${src}"></li>`;
    strIdxs+=`<li></li>`;
}                                       //拼接ul li img的HTML格式


$ulImgs.append(str).css("width",(imgs.length+1)*LIWIDTH);//获取并加载到HTML中 ul的宽度
$ulIdxs.append(strIdxs).children().first().addClass("hover");

function play(){                        //轮播函数
    timer=setInterval(function(){
        moved++;                        //每次自动移动1个li
        $ulImgs.animate({
            left:-moved*LIWIDTH         //ul的宽度变化
        },interval,()=>{
            if(moved==4){
                moved=0;
                $ulImgs.css("left",0); //判断，如果移动了四个，那么移动个数归零回到起始位置，设置ul的左边长度为0；
            }
            $ulIdxs.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
        })
    },WAIT)
}
play();
    $("#img_lunbo .middle").hover(
        ()=>{clearInterval(timer);timer=null;},
        ()=>{play()}
    );                                             //结束定时器


    $ulIdxs.on("click","li",function(e){
        var $tar=$(e.target);
        moved=$tar.index();
        $ulImgs.stop(true).animate({
            left:-moved*LIWIDTH
        },interval,function(){
            $tar.addClass("hover").siblings().removeClass("hover");
        })
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
















/********导航栏的搜索条****************************************************************/
(()=>{
    var sub=document.querySelector("#nav .nav_ul .right li:nth-child(5)");
    sub.onmouseover=function(e){
        var ul=document.querySelector("#nav .nav_ul .right li ul");
        ul.style.display="block";
    };
    var x=document.querySelector("#nav .nav_ul .right li .sousuotiao");
    x.onmouseout=function(){
        var ul=document.querySelector("#nav .nav_ul .right li ul");
        ul.style.display="none";
    }

})();


(()=>{
    var imgs=document.querySelectorAll("#redian .f_ul li dl img");
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


/*有问题的地方**/
(()=>{
var imgs=document.querySelectorAll("#tu6 li dl img");
    for(var i=0;i<imgs.length;i++){
        var img=imgs[i];
        img.onmouseover=function(){
            this.style.width="378px";
            this.style.overflow="hidden";
            this.style.transition="all 0.05s linear";
        };
        img.onmouseout=function(){
            this.style.width="373px";
        }
    }
})();



(()=>{
    var images=document.querySelectorAll("#ldy .bottom li dl img");
    for(var i=0;i<images.length;i++){
        var image=images[i];
        image.onmouseover=function(){
            this.style.width="378px";
            this.style.overflow="hidden";
            this.style.transition="all 0.05s linear";
        };
        image.onmouseout=function(){
            this.style.width="373px";
        }
    }
})();







/************************************/
(()=>{
var imgs=document.querySelectorAll("#wumei li dl img");
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
    var imgs=document.querySelectorAll("#bottom_tu li dl img");
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
    var divs = document.querySelectorAll("#middle_ul div");
    for(var i=0;i<divs.length;i++){
        var div = divs[i];
        div.onmouseover=function(){
            this.style.border="1px solid #000";
        };
        div.onmouseout=function(){
            this.style.border="1px solid #D0D0D0";
        }
    }
})();
(()=>{
    var divs = document.querySelectorAll("#middle_ul_2 div");
    for(var i=0;i<divs.length;i++){
        var div = divs[i];
        div.onmouseover=function(){
            this.style.border="1px solid #000";
        };
        div.onmouseout=function(){
          this.style.border="1px solid #D0D0D0";
        }
    }
})();




(()=>{
    var divs = document.querySelectorAll("#bottom_ul div");
    for(var i=0;i<divs.length;i++){
        var div = divs[i];
        div.onmouseover=function(){
            this.style.border="1px solid #000";
        };
        div.onmouseout=function(){
          this.style.border="1px solid #D0D0D0";
        }
    }
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
        var divs1 = document.querySelector("#img_1 .d02");
        divs1.style.backgroundColor = "#A9A9A9";
         var divs2 = document.querySelector("#img_1 .d01");
         divs2.style.backgroundColor = "#A9A9A9";
    };
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








