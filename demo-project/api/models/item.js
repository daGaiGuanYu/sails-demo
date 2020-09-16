module.exports = {
  attributes: {
    title: {
      type: 'string',
      required: true,
      unique: true
    },
    detail: {
      type: 'string',
      required: true
    }
  }
}