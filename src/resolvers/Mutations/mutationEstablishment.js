const { forwardTo } = require('prisma-binding')
async function createEstablishment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function updateEstablishment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function deleteEstablishment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
module.exports = {
    createEstablishment,
    updateEstablishment,
    deleteEstablishment
}