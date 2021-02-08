"use strict";

const { run, collisions } = require("../functions.js");
const fnv = require("fnv");
const fnvplus = require("fnv-plus");
const sfnv1a = require("@sindresorhus/fnv1a");
const fnvlite = require("fnv-lite");
const ddingfnv = require("dding-fnv");
const hfnv = require("hfnv");
const fnv1a = require("fnv1a");
const fnv32 = require("fnv32");
const bfnv1a = require("@broofa/fnv1a");

console.log("\n#####\nFamily: FNV\n#####\n");

collisions(fnvplus.fast1a32hex, "FNV-1a 32bit");

run(data => new fnv.FNV().update(data).digest("hex"), "fnv");
run(fnvplus.fast1a32, "fnv-plus");
run(sfnv1a, "@sindresorhus/fnv1a");
run(data => ddingfnv.hash32(data, "1a").toHex(), "dding-fnv");
run(fnv1a, "fnv1a");
run(data => fnv32.fnv_1a(data), "fnv32");
run(bfnv1a, "@broofa/fnv1a");

collisions(fnvplus.fast1a52hex, "FNV-1a 52bit");

run(fnvplus.fast1a52, "fnv-plus");

collisions(fnvplus.fast1a64, "FNV-1a 64bit");

run(fnvplus.fast1a64, "fnv-plus");
run(data => sfnv1a.bigInt(data, { size: 64 }), "@sindresorhus/fnv1a");

collisions(fnvlite.hex, "FNV-1a 128bit");

run(fnvlite.hex, "fnv-lite");
run(data => sfnv1a.bigInt(data, { size: 128 }), "@sindresorhus/fnv1a");
run(data => hfnv.hex(hfnv.digest(data)), "hfnv");
