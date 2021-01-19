const { day, days } = require('./Queries/queryDay')
const { user, users } = require('./Queries/queryUser')
const { appointment, appointments } = require('./Queries/queryAppointment')
const { department, departments } = require('./Queries/queryDepartment')
const { establishment, establishments } = require('./Queries/queryEstablishment')
const { review, reviews } = require('./Queries/queryReview')
const { service, services } = require('./Queries/queryService')
const { typeofshift, typeofshifts } = require('./Queries/queryTypeOfShift')
const { userestablishment, userestablishments } = require('./Queries/queryUserEstablishment')
const { hour, hours } = require('./Queries/queryHours')

const Query = {
    user,
    users,
    day,
    days,
    appointment,
    appointments,
    department,
    departments,
    establishment,
    establishments,
    review,
    reviews,
    service,
    services,
    userestablishment,
    userestablishments,
    typeofshift,
    typeofshifts,
    hour,
    hours
  }

module.exports = {
    Query
}