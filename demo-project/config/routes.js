module.exports.routes = {
  '/': { view: 'pages/home' },
  '/item/form': { view: 'pages/item/form' },
  'get /item': 'ItemController.get',
  'post /item': 'ItemController.post'
}