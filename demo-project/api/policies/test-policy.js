module.exports = function(req, res, proceed){
  console.log('policy: 雁过拔毛')
  proceed()
  // res.forbidden() // 不准用
}