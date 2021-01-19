const { forwardTo } = require('prisma-binding')

async function hour (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function hours (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    hour,
    hours
}