module.exports = async function(req, res){
  const title = req.param('title')
  const detail = req.param('detail')

  await sails.models.item.create({ title, detail })
  res.redirect('/item')
}