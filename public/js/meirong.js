



(()=>{
//΢����ʾЧ��
var ul_li=document.querySelector("#nav .nav_ul .right li:nth-child(3)");
var div_hidden=document.getElementsByClassName("img_hidden")[0];
ul_li.onmouseover=function(){
  div_hidden.style.display="block";
};
ul_li.onmouseout=function(){
    div_hidden.style.display="none";
};


    //�ֲ�
var imgs=[
    "images/meirong/l01.jpg",
    "images/meirong/datu1.jpg",
    "images/meirong/datu2.jpg",
    "images/meirong/datu3.jpg",
    "images/meirong/l01.jpg"
];
//ͼƬ�ֲ�
var $ulImgs=$("#img_lunbo .middle .lb"),//ul
    LIWIDTH=1180,                           //li
    $ulIdxs=$("#img_lunbo .middle .dingwei"),// С����ߺ��
    moved= 0,                               //�ƶ���li����
    interval=500,
    WAIT=3000+interval,
    timer=null;



var str="",strIdxs="",i=1;
for(var src of imgs){
    str+=`<li><img src="${src}"></li>`;
    strIdxs+=`<li></li>`;
}                                       //ƴ��ul li img��HTML��ʽ


$ulImgs.append(str).css("width",(imgs.length+1)*LIWIDTH);//��ȡ�����ص�HTML�� ul�Ŀ��
$ulIdxs.append(strIdxs).children().first().addClass("hover");

function play(){                        //�ֲ�����
    timer=setInterval(function(){
        moved++;                        //ÿ���Զ��ƶ�1��li
        $ulImgs.animate({
            left:-moved*LIWIDTH         //ul�Ŀ�ȱ仯
        },interval,()=>{
            if(moved==4){
                moved=0;
                $ulImgs.css("left",0); //�жϣ�����ƶ����ĸ�����ô�ƶ���������ص���ʼλ�ã�����ul����߳���Ϊ0��
            }
            $ulIdxs.children(":eq("+moved+")").addClass("hover").siblings().removeClass("hover");
        })
    },WAIT)
}
play();
    $("#img_lunbo .middle").hover(
        ()=>{clearInterval(timer);timer=null;},
        ()=>{play()}
    );                                             //������ʱ��


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





/****************�м�С�ֲ�*****************************/
(()=>{
    var moved=0;
    var IMGWIDTH=766;
$("#img_1 .Dright").click(function() {
    //  console.log("clickright");
    if (moved < 5) {
        moved++;
        $("#img_1 ul").animate({left: -IMGWIDTH * moved + "px"}, "3000");
    } else {
        //�жϣ�����ƶ����ĸ�����ô�ƶ���������ص���ʼλ�ã�����ul����߳���Ϊ0��
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
















/********��������������****************************************************************/
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


/*������ĵط�**/
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







/**************�ײ���ά�����ʾ����*********************************/

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

/**************�ײ���ά�����ʾ����*********************************/
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






/***********��Բ�ͼ�ͷ����ʾ����*************************/
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

//**************��¼ҳ����ʾ����****************
(()=>{
    var btn = document.querySelector('#nav .nav_ul .right .login');//��¼��ť
    //console.log(btn);
    var login = document.getElementById('login');//��������
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








