const Koa=require('koa');
const bodyParser=require('koa-bodyparser');

const errorHandler=require('./errorHandler.js')
const useRoutes = require('../router')
const app=new Koa();

app.use(bodyParser())
useRoutes(app)


app.on('error', errorHandler)

module.exports=app