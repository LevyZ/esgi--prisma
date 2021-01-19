const { forwardTo } = require('prisma-binding')
async function createday (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function updateday (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}
async function deleteday (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}
module.exports = {
   createday,
   updateday,
   deleteday
}