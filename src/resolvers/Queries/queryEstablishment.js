const { forwardTo } = require('prisma-binding')

async function establishment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function establishments (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    establishment,
    establishments
}