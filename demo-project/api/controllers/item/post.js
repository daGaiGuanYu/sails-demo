module.exports = {
  friendlyName: 'post item',
  description: 'update or create an item',
  inputs: {
    id: {
      type: 'number'
    },
    title: {
      description: 'the title of the item to create or update',
      type: 'string',
      require: true
    },
    detail: {
      description: 'the detail of the item to create or update',
      type: 'string',
      require: true
    }
  },
  exits: {
    success: {
      responseType: 'redirect'
    },
    testError: {

    }
  },
  async fn(inputs, exits) {
    await sails.models.item.create(inputs)
    exits.success('/item.action')
  }
}