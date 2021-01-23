const { forwardTo } = require('prisma-binding')
async function createDay (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function updateDay (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}
async function deleteDay (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}
module.exports = {
   createDay,
   updateDay,
   deleteDay
}