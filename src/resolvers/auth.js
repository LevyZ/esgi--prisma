const argon2 = require('argon2');
const jwt = require('jsonwebtoken')
const { getUser, APP_SECRET } = require('../utils')


async function signup (_, args, context, info) {
    const password = await argon2.hash(args.password, 10);
    const user = await context.prisma.mutation.createUser(
        {
            data: {
                firstname: args.firstname,
                lastname: args.lastname,
                email: args.email,
                phoneNumber: args.phoneNumber,
                password: password,
                roles: args.roles
            }
        }
    )

    return {
        token: jwt.sign({ userId: user.id }, APP_SECRET),
        user
    }
}

async function login(parent, {email, password}, ctx, info) {
    const user = await ctx.prisma.query.user({where: {email}}, '{ id lastname email password }')

    if(!user) {
        throw new Error(`No such user found for emal: ${email}`)
    }

    const valid = await argon2.verify(user.password, password)

    if (!valid) {
        throw new Error('Invalid password')
    }

    return {
        token: jwt.sign({ userId: user.id }, APP_SECRET),
        user
    }
}

module.exports = {
    signup,
    login
}