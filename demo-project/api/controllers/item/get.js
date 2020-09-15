module.exports = async function(req, res){
  const result = await sails.models.item.find({
    title: 'title'
  })
  res.send(result)
}