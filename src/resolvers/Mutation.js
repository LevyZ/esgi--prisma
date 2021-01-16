const { createPost, updatePost, deletePost } = require('./Mutations/mutationPost')
const { createUser, updateUser, deleteUser } = require('./Mutations/mutationUser')

const Mutation = {
    createPost,
   updatePost,
   deletePost,

   createUser,
   updateUser,
   deleteUser,
}
module.exports = {
    Mutation
}