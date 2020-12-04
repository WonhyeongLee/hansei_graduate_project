const mysql = require('mysql');

const db_info= { 
        host:'hansei.c0ge5afzoxmy.us-east-2.rds.amazonaws.com', 
        port:'3306', 
        user:'kkwon57', 
        password:'1q2w3e4r', 
        database:'hansei'};

module.exports = {
        init: function () {
                return mysql.createConnection(db_info);
        },
        connect: function(conn) {
               conn.connect(function(err) {
                 if(err) console.error('mysql 접속 에러 : ' + err);
                 else console.log('mysql 접속 성공');
                 });
              }
        }
 