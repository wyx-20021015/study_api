const connection = require('../app/database')
class AuthService {
  async checkMoment(user_id,momentId){
    const statement = `SELECT * FROM moment WHERE id = ? AND user_id=?`
    console.log(momentId,user_id)
    const result = await connection.execute(statement,[momentId,user_id])
    return result[0].length==0?false:true
  }
}
module.exports = new AuthService();