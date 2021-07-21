const Router=require('koa-router')
const {
  Verify,
  handlePassword
}= require('../middleware/user.middleware')

const {
  create
}=require('../controller/user.controller')


const userRouter=new Router({prefix:'/user'});

userRouter.post('/',Verify,handlePassword,create);

module.exports=userRouter