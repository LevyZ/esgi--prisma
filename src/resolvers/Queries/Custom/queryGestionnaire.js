const { getUser } = require('../../../utils')

const checkRoles = (user) => {
    if(user.roles.includes('ROLE_MANAGER')) {
        return true
    } else {
        throw new Error('You must be manager to have access for this ressource')
    }
}

async function gestionnaireInfos (parent, args, ctx, info) {
    const user = await getUser(ctx)
    if(checkRoles(user)) {
        return user
    }
}

module.exports = {
    gestionnaireInfos
}