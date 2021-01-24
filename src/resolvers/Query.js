const { day, days } = require('./Queries/queryDay')
const { user, users } = require('./Queries/queryUser')
const { appointment, appointments } = require('./Queries/queryAppointment')
const { department, departments } = require('./Queries/queryDepartment')
const { establishment, establishments } = require('./Queries/queryEstablishment')
const { review, reviews } = require('./Queries/queryReview')
const { service, services } = require('./Queries/queryService')
const { typeOfShift, typeOfShifts } = require('./Queries/queryTypeOfShift')
const { userEstablishment, userEstablishments } = require('./Queries/queryUserEstablishment')
const { hour, hours } = require('./Queries/queryHours')
const { me } = require('./Queries/Custom/me')
const { gestionnaireInfos } = require('./Queries/Custom/queryGestionnaire')

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
    userEstablishment,
    userEstablishments,
    typeOfShift,
    typeOfShifts,
    hour,
    hours,
    me,
    gestionnaireInfos
  }

module.exports = {
    Query
}