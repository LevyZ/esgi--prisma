const { forwardTo } = require('prisma-binding')

async function department (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function departments (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    department,
    departments
}