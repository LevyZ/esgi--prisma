const { forwardTo } = require('prisma-binding')
async function createDepartment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function updateDepartment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function deleteDepartment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
module.exports = {
    createDepartment,
    updateDepartment,
    deleteDepartment
}