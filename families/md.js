"use strict";

const { run, collisions } = require("../functions.js");
const crypto = require("crypto");
const blueImp = require("blueimp-md5");
const md5 = require("md5");
const md5es = require("md5-es");
const sparkmd5 = require("spark-md5");
const tsmd5 = require("ts-md5");
const Md5js = require("md5.js");
const puremd5 = require("pure-md5");
const jsmd5 = require("js-md5");
const fastmd5 = require("fast-md5");
const md5hex = require("md5-hex");
const nanomd5 = require("nano-md5");
const cryptomd5 = require("crypto-md5");
const md5slim = require("md5-slim");
const Jshashes = require("jshashes");
const nodeforge = require("node-forge");
const cryptojs = require("crypto-js");
const hasha = require("hasha");

console.log("\n#####\nFamily: MD\n#####\n");

collisions(data => crypto.createHash("md5").update(data).digest("hex"), "MD5");

run(data => crypto.createHash("md5").update(data).digest("hex"), "crypto");
run(blueImp, "blueImp-md5");
run(md5, "md5");
run(md5es.default.hash, "md5-es");
run(sparkmd5.hash, "spark-md5");
run(data => tsmd5.Md5.hashStr(data), "ts-md5");
run(data => new Md5js().update(data).digest("hex"), "md5.js");
run(puremd5.md5, "pure-md5");
run(jsmd5, "js-md5");
run(fastmd5.default, "fast-md5");
run(md5hex, "md5-hex");
run(nanomd5, "nano-md5");
run(cryptomd5, "crypto-md5");
run(md5slim, "md5-slim");
run(data => new Jshashes.MD5().hex(data), "jshashes");
run(data => nodeforge.md.md5.create().update(data).digest().toHex(), "node-forge");
run(data => cryptojs.MD5(data).toString(), "crypto-js");
run(data => hasha(data, { algorithm: "md5" }), "hasha");

