const { forwardTo } = require('prisma-binding')
async function createPost (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function updatePost (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}
async function deletePost (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}
module.exports = {
    createPost,
   updatePost,
   deletePost
}