"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "day",
    embedded: false
  },
  {
    name: "appointment",
    embedded: false
  },
  {
    name: "department",
    embedded: false
  },
  {
    name: "Establishment",
    embedded: false
  },
  {
    name: "hour",
    embedded: false
  },
  {
    name: "report",
    embedded: false
  },
  {
    name: "review",
    embedded: false
  },
  {
    name: "service",
    embedded: false
  },
  {
    name: "typeofshift",
    embedded: false
  },
  {
    name: "user",
    embedded: false
  },
  {
    name: "userestablishment",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["URL_DB_PRISMA"]}`
});
exports.prisma = new exports.Prisma();
