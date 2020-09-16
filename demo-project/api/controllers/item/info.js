module.exports = {
  friendlyName: 'get one item',
  description: 'one item\'s info',
  inputs: {
    id: {
      type: 'number',
      require: true
    }
  },
  exits: {
    success: {
      responseType: 'view',
      viewTemplatePath: 'pages/item/info'
    },
    testError: {

    }
  },
  async fn(inputs, exits) {
    // inputs 的构造函数是 Object
    const record = await sails.models.item.findOne(inputs)
    exits.success(record)
  }
}