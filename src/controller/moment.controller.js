const momentService = require('../service/moment.service')
class MomentController{
  async create(ctx,next){
    console.log(ctx.user)
    const {id}=ctx.user
    const {content}=ctx.request.body
    const result = await momentService.inputContent(id,content)
    ctx.body=result
  }
  async Detail(ctx,next) {
    const momentId = ctx.params.momentId
    const result = await momentService.getMomentById(momentId)
    ctx.body=result
  }
  async Update(ctx,next){
    const {id} = ctx.user
    const {content}=ctx.request.body
    const momentId = ctx.params.momentId
    const result = await momentService.update(momentId,content)
    ctx.body=result
  }
}
module.exports=new MomentController()