const { forwardTo } = require('prisma-binding')

async function typeofshift (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function typeofshifts (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    typeofshift,
    typeofshifts
}