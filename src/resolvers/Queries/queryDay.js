const { forwardTo } = require('prisma-binding')

async function day (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function days (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    day,
    days
}