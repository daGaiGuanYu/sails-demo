module.exports.routes = {
  '/': { view: 'pages/home' },
  '/item/form': { view: 'pages/item/form' },
  '/item/info.action': 'ItemController.info',
  '/item/drop.action': 'ItemController.drop',
  'get /item.action': 'ItemController.get',
  'post /item.action': 'ItemController.post'
}