const app=require('./app/index')
const config=require('./app/config')

app.listen(config.APP_PORT,()=>{
  console.log(`端口${config.APP_PORT}服务器启动成功..`)
})