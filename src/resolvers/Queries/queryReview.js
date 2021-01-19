const { forwardTo } = require('prisma-binding')

async function review (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function reviews (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    review,
    reviews
}