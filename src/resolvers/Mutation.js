const { login, signup } = require('./auth')
const { createUser, updateUser, deleteUser } = require('./Mutations/mutationUser')
const { createDay, updateDay, deleteDay } = require('./Mutations/mutationDay')
const { createEstablishment, updateEstablishment, deleteEstablishment } = require('./Mutations/mutationEstablishment')
const { createDepartment, updateDepartment, deleteDepartment } = require('./Mutations/mutationDepartment')


const Mutation = {
    createEstablishment,
    updateEstablishment,
    deleteEstablishment,

    createDay,
    updateDay,
    deleteDay,

    createDepartment,
    updateDepartment,
    deleteDepartment,

    createUser,
    updateUser,
    deleteUser,

    login,
    signup
}
module.exports = {
    Mutation
}