//加载相关模块
const http = require("http");
const mysql = require("mysql");
const express = require("express");
const qs = require("querystring");

//创建连接池
var pool = mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"yoka",
  port:3306,
  connectionLimit:25
});


//创建服务器
var app = express();
var server = http.createServer(app);
server.listen(8081);
//设置中间键
app.use(express.static("public"));


//用户注册
app.post("/reg.do",(req,res)=>{
  req.on("data",(data)=>{
    var str = data.toString();
    var obj = qs.parse(str);
    var tel = obj.tel;
    var uname = obj.uname;
    var upwd = obj.upwd;

    pool.getConnection((err,conn)=>{
      var sql = "INSERT INTO user_register VALUES(null,?,?,?)";
      conn.query(sql,[tel,upwd,uname],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
          res.json({code:1,"msg":"注册成功"});
        }else{
          res.json({code:-1,"msg":"注册失败"});
        }
        conn.release();
      })
    })


  })
});


//功能:用户登录
app.post("/login.do",(req,res)=>{
  //1:获取用户登录时用户名与密码
  req.on("data",(data)=>{
    var str = data.toString();
    var obj = qs.parse(str);
    var u = obj.uname;
    var p = obj.upwd;
    //2:获取数据库连接
    //3:发送一条SQL语句
    pool.getConnection((err,conn)=>{
      //4:并且获取返回结果
      var sql = "SELECT * FROM user_register WHERE uname=? AND upwd=?";
      conn.query(sql,[u,p],(err,result)=>{
        if(err)throw err;
        //data.code 1 登录成功 usercenter.html
        //data.code -1 用户名或密码有误
        if(result.length<1){
          res.json({code:-1,msg:"用户名或密码有误"})
        }else{
          res.json({code:1,msg:"登录成功",rid:result[0].rid});
        }
        conn.release();
      });
    });
  });
});



















