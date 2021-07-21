const crypto = require('crypto')

const md5password=(password)=>{
  // return crypto.createHash('md5').update(password).digest('hex')
  const md5 = crypto.createHash('md5');
  console.log(password)
  const result = md5.update(password).digest('hex');
  console.log('bb')
  return result;
}

module.exports = md5password