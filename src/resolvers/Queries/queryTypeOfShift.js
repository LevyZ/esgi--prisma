const { forwardTo } = require('prisma-binding')

async function typeOfShift (parent, args, ctx, info) {
    return forwardTo('prisma')(parent, args, ctx, info)
}
async function typeOfShifts (parent, args, ctx, info) {
   return forwardTo('prisma')(parent, args, ctx, info)
}

module.exports = {
    typeOfShift,
    typeOfShifts
}