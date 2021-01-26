const { forwardTo } = require('prisma-binding')
const { getUser } = require('../../../utils')

async function createReview (parent, args, ctx, info) {
    const user = await getUser(ctx)
    const establishment = await ctx.prisma.query.establishment({where: {id: args.establishmentId}}, '{id }')


    const review = await ctx.prisma.mutation.createReview(
        {
            data: {
                author: {id: user.id, email: user.email},
                establishment: {id: establishment.id},
                mark: args.mark,
                content: args.content
            }
        }
    )
    return forwardTo('prisma')(parent, args, ctx, info)
    }
    async function deleteReview(parent, args, ctx, info) {
        return forwardTo('prisma')(parent, args, ctx, info)
    }
module.exports = {
    deleteReview,
    createReview
}