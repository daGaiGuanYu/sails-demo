module.exports.routes = {
  '/': { view: 'pages/home' },
  'get /item': 'ItemController.get',
  'post /item': 'ItemController.post'
}