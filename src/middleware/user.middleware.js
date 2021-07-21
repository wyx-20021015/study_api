const errTypes=require('../constants/errTypes.js');
const service = require('../service/user.service');
const md5password=require('../utils/password-handle')
const Verify=async (ctx, next) => {
  // 1.获取用户名和密码
  const { name, password } = ctx.request.body;

  // 2.判断用户名或者密码不能空
  if (!name || !password) {
    const error = new Error(errTypes.NAME_OR_PASSWORD_REQUIRED);
    ctx.app.emit('error', error, ctx);
    return;
  }
  // 3.判断这次注册的用户名是没有被注册过
  const result = await service.getUserByName(name);
  if (result.length) {
    const error = new Error(errTypes.USER_ALREADY_EXISTS);
    return ctx.app.emit('error', error, ctx);
  }

  await next();
}
const handlePassword=async (ctx,next) => {
  const {password} = ctx.request.body
  ctx.request.body.password=md5password(password)
  await next();
}
module.exports={
  Verify,
  handlePassword
};