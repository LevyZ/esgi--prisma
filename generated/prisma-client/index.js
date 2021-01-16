"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Appointment",
    embedded: false
  },
  {
    name: "AppointmentStatus",
    embedded: false
  },
  {
    name: "Day",
    embedded: false
  },
  {
    name: "Department",
    embedded: false
  },
  {
    name: "Establishment",
    embedded: false
  },
  {
    name: "Hour",
    embedded: false
  },
  {
    name: "Report",
    embedded: false
  },
  {
    name: "Review",
    embedded: false
  },
  {
    name: "Service",
    embedded: false
  },
  {
    name: "TypeOfShift",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserEstablishment",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["DATABASE_URL"]}`
});
exports.prisma = new exports.Prisma();
