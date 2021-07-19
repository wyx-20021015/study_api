const dotenv=require('dotenv');
dotenv.config();
// 已经把 根目录下 .env加载到process中了,现在process.env里面就有app_port
module.exports={
  APP_PORT
}=process.env