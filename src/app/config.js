const dotenv=require('dotenv');
const fs=require('fs');
const path=require('path');


const PRIVATE_KEY=fs.readFileSync(path.resolve(__dirname,'./keys/private.key'))
const PUBLIC_KEY=fs.readFileSync(path.resolve(__dirname,'./keys/public.key'))
dotenv.config();
// 已经把 根目录下 .env加载到process中了,现在process.env里面就有app_port
module.exports={
  APP_PORT,
  MYSQL_PORT,
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_USER,
  MYSQL_PASSWORD,
}=process.env

module.exports.PRIVATE_KEY=PRIVATE_KEY
module.exports.PUBLIC_KEY=PUBLIC_KEY