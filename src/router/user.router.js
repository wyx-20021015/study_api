const Router=require('koa-router')

const {
  create
}=require('../controller/user.controller')

const userRouter=new Router({prefix:'/user'});

userRouter.post('/',(ctx,next) => {
  ctx.response.body='aa'
  create(ctx,next)
})
module.exports=userRouter