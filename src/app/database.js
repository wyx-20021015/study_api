const mysql=require('mysql2')

const config=require('./config')

const connection = mysql.createPool({
  host:config.MYSQL_HOST,
  user:config.MYSQL_USER,
  password:config.MYSQL_PASSWORD,
  database:config.MYSQL_DATABASE,
  port:config.MYSQL_PORT
})


connection.getConnection((err, conn) => {
    if (err) {
      console.log("连接失败:", err);
    } else {
      console.log("数据库连接成功~");
    }
});



module.exports=connection.promise()