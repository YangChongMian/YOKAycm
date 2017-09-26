CREATE DATABASE yoka CHARSET=UTF8;

USE yoka;

CREATE TABLE user_login(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(20),
	upwd VARCHAR(32)
);

INSERT INTO user_login VALUES(null,'zhangsan','123456');
INSERT INTO user_login VALUES(null,'wangwu','654321');


CREATE TABLE user_register(
	rid INT PRIMARY KEY AUTO_INCREMENT,
	tel VARCHAR(15),
	upwd VARCHAR(32),
	uname VARCHAR(20)
);

INSERT INTO user_register VALUES(null,'13240029639','zhangsan','123456');
INSERT INTO user_register VALUES(null,'13240029911','wangwu','654321');


SELECT * FROM user_login;
SELECT * FROM user_register;