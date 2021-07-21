const connection=require('../app/database')
class momentService {
  async inputContent(id,content){
    const statement=`INSERT INTO moment (user_id,content) VALUES (?,?);`
    const result = await connection.execute(statement,[id,content])
    return result
  }
  async getMomentById(momentId) {
    const statement=`SELECT m.content content,m.createAt,m.updateAt,JSON_OBJECT('id',u.id,'name',u.name) FROM moment m LEFT JOIN user u ON m.user_id=u.id WHERE m.id=?`
    const result = await connection.execute(statement,[momentId])
    return result[0]
  }
  async update(momentId,content) {
    const statement=`UPDATE moment SET content = ? WHERE id=?`
    const result = await connection.execute(statement,[content,momentId])
    return result
  }
}
module.exports = new momentService();