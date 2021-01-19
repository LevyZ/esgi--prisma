const { forwardTo } = require('prisma-binding')

async function appointment (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function appointments (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    appointment,
    appointments
}