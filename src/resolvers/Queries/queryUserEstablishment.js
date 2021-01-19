const { forwardTo } = require('prisma-binding')

async function userestablishment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function userestablishments (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    userestablishment,
    userestablishments
}