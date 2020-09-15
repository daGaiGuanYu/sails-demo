module.exports.models = {
  migrate: 'safe',
  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
    id: { type: 'number', autoIncrement: true, },
  },
  dataEncryptionKeys: {
    default: 'PR/4ezJuDcUpwWv10nLK4xv671ofNyParBEhK5+qfns='
  },
  cascadeOnDestroy: true
}
