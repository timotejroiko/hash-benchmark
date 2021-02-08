"use strict";

const { run, collisions } = require("../functions.js");

const turbocrc32 = require("turbo-crc32/crc32");
const fastcrc = require("fast-crc");
const crc32 = require("crc-32");
const fastcrc32c = require("fast-crc32c");
const sse4crc32 = require("sse4_crc32");
const jscrc = require("js-crc");
const easycrc = require("easy-crc");
const nodecrc = require("node-crc");
const polycrc = require("polycrc");
const crc = require("crc");

console.log("\n#####\nFamily: CRC\n#####\n");

collisions(fastcrc, "CRC32");

run(turbocrc32, "turbo-crc32");
run(fastcrc, "fast-crc");
run(crc32.str, "crc-32");
run(fastcrc32c.calculate, "fast-crc32c");
run(sse4crc32.calculate, "sse4_crc32");
run(jscrc.crc32, "js-crc");
run(easycrc.crc32.bind(null, "CRC-32"), "easy-crc");
run(data => nodecrc.crc32(Buffer.from(data)), "node-crc");
run(polycrc.crc32, "polycrc");
run(crc.crc32, "crc");
