"use strict";

const { readdirSync } = require("fs");

readdirSync("./families").forEach(file => {
	require(`./families/${file}`);
});
