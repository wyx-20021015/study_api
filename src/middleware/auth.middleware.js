const jwt = require("jsonwebtoken");

const errTypes = require("../constants/errTypes.js");
const service = require("../service/user.service");
const authService = require("../service/auth.service");
const md5password = require("../utils/password-handle");

const { PUBLIC_KEY } = require("../app/config");

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    const error = new Error(errTypes.NAME_OR_PASSWORD_REQUIRED);
    ctx.app.emit("error", error, ctx);
    return;
  }
  // 3.判断这次注册的用户名是没有被注册过
  const result = await service.getUserByName(name);
  const user = result[0];
  if (!user) {
    const error = new Error(errTypes.USER_NOT_EXISTS);
    return ctx.app.emit("error", error, ctx);
  }
  if (md5password(password) !== user.password) {
    const error = new Error(errTypes.NOT_MATCH);
    return ctx.app.emit("error", error, ctx);
  }
  ctx.user = user;
  await next();
};

async function verifyAuth(ctx, next) {
  console.log("验证授权中间件");
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    const error = new Error(errTypes.UNAUTHORIZED);
    return ctx.app.emit("error", error, ctx);
  }
  const token = authorization.replace("Bearer ", "");
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"]
    });
    ctx.user = result;
    console.log('result',result);
    await next();
  } catch (err) {
    console.log(err)
    console.log('有token但未授权')
    const error = new Error(errTypes.UNAUTHORIZED);
    ctx.app.emit("error", error, ctx);
  }
}
const verifyPermission = async(ctx, next)=>{
  console.log('verifyPermission')
  const {momentId} = ctx.params
  const {id} = ctx.user
  const isPermission = await authService.checkMoment(id,momentId)
  if(!isPermission){
    const error = new Error(errTypes.NO_PERMISSED)
    return ctx.app.emit("error", error, ctx)
  }
  await next();
}
module.exports = {
  verifyLogin,
  verifyAuth,
  verifyPermission
};
