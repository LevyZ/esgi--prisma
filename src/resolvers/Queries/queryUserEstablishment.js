const { forwardTo } = require('prisma-binding')

async function userEstablishment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function userEstablishments (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    userEstablishment,
    userEstablishments
}