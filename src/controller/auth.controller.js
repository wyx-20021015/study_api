const jwt=require('jsonwebtoken')
const {PRIVATE_KEY}=require('../app/config')
class AuthController {
  async login(ctx,next) {
    const {name,id}=ctx.user
    // // ctx.body=`${name}登陆成功`
    const token=jwt.sign({id,name},PRIVATE_KEY,{
      expiresIn:60 * 60 * 24,
      algorithm:'RS256'
    })

    ctx.body = { id, name, token }
  }
  async success(ctx,next) {
    console.log('success')
    ctx.body='授权成功'
  }
}

module.exports = new AuthController(); 