"use strict";

const { run, collisions } = require("../functions.js");
const sdbm = require("sdbm");

console.log("\n#####\nFamily: SDBM\n#####\n");

collisions(data => sdbm(data).toString(16), "SDBM");

run(sdbm, "SDBM");
