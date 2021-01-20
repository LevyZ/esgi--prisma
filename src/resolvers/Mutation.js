// const { createPost, updatePost, deletePost } = require('./Mutations/mutationPost')
// const { createUser, updateUser, deleteUser } = require('./Mutations/mutationUser')
const { createday, updateday, deleteday } = require('./Mutations/mutationDay')
const { createEstablishment, updateEstablishment, deleteEstablishment } = require('./Mutations/mutationEstablishment')
const { createdepartment, updatedepartment, deletedepartment } = require('./Mutations/mutationDepartement')


const Mutation = {
    createEstablishment,
    updateEstablishment,
    deleteEstablishment,

    createday,
    updateday,
    deleteday,

    createdepartment,
    updatedepartment,
    deletedepartment

//    createUser,
//    updateUser,
//    deleteUser,

}
module.exports = {
    Mutation
}