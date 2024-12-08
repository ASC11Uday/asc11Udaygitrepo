CREATE DATABASE TestDb1;

use TestDb1;

SHOW DATABASES;
SHOW TABLES;

CREATE Table user (User_id int,email VARCHAR(100),first_name VARCHAR(100),last_name VARCHAR(100));

drop TABLE user;
SELECT *from user

INSERT INTO user VALUES(5,"hohi@.com","bob","jonney");
INSERT INTO user VALUES(101,"iljafhi@.com","bhargi","jonney"),(102,"oahf@.com","sandeep","poo");