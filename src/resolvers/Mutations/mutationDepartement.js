const { forwardTo } = require('prisma-binding')
async function createdepartment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function updatedepartment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function deletedepartment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
module.exports = {
    createdepartment,
    updatedepartment,
    deletedepartment
}