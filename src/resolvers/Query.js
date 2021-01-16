const { user,users } = require('./Queries/queryUser')
const { post,posts } = require('./Queries/queryPost')

const Query = {
    user,
    users,
    post,
    posts
  }

module.exports = {
    Query
}