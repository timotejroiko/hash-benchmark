"use strict";

const { run, collisions } = require("../functions.js");
const djb2 = require("djb2");
const djb2a = require("djb2a");
const stringhash = require("string-hash");
const stringhash64 = require("string-hash-64");

console.log("\n#####\nFamily: DJB2\n#####\n");

collisions(data => djb2(data).toString(16), "DJB2");

run(djb2, "djb2");

collisions(data => djb2a(data).toString(16), "DJB2a");

run(djb2a, "djb2a");

collisions(data => stringhash(data).toString(16), "string-hash");

run(stringhash, "string-hash");

collisions(data => stringhash64(data).toString(16), "string-hash-64");

run(stringhash64, "string-hash-64");
