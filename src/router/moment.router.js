const Router = require('koa-router')

const momentRouter = new Router({prefix:'/moment'})

const {create,Detail,Update} = require('../controller/moment.controller')
const {verifyAuth,verifyPermission} = require('../middleware/auth.middleware')

momentRouter.post('/',verifyAuth,create)
momentRouter.get('/:momentId',Detail)
momentRouter.patch('/:momentId',verifyAuth,verifyPermission,Update)

module.exports =momentRouter