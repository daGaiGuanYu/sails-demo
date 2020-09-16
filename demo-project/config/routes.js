module.exports.routes = {
  '/': { view: 'pages/home' },
  '/item/form': { view: 'pages/item/form' },
  'get /item.action': 'ItemController.get',
  'post /item.action': 'ItemController.post'
}