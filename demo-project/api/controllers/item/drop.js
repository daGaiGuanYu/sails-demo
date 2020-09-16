module.exports = {
  friendlyName: 'drop one item',
  inputs: {
    id: {
      type: 'number',
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
    const record = await sails.models.item.destroy(inputs)
    exits.success('/item.action')
  }
}