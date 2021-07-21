const errTypes = require("../constants/errTypes");
const errorHandler = function (err, ctx) {
  let status, message;
  switch (err.message) {
    case errTypes.NAME_OR_PASSWORD_REQUIRED:
      status = 400; //bad request
      message = "用户名或密码不能为空..";
      break;
    case errTypes.USER_ALREADY_EXISTS:
      status = 409;
      message = "该用户名已存在";
      break;
    case errTypes.USER_NOT_EXISTS:
      status = 400;
      message = "用户名不存在";
      break;
    case errTypes.NOT_MATCH:
      status = 400;
      message = "用户名与密码不匹配";
      break;
    case errTypes.UNAUTHORIZED:
      status = 401;
      message = "未授权";
      break;
    case errTypes.NO_PERMISSED:
      status = 401;
      message = "无权限"
      break;
    default:
      status = 404;
  }

  ctx.status = status;
  ctx.body = message;
};
module.exports = errorHandler;
