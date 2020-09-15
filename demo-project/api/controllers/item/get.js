module.exports = async function(req, res){
  const result = await sails.models.item.find()
  return res.view('pages/item/list', {
    list: result
  })
}