"use strict";

const { now } = require("perf_hooks").performance;
const { readFileSync } = require("fs");
const file = readFileSync("./words.txt", "utf8");
const array = file.split("\n");

function run(fn, library) {
	const sample1 = fn(array[0]);
	fn(file); // warmup
	let time1 = now();
	for(let i = 0; i < array.length; i++) { fn(array[i]); }
	time1 = now() - time1;
	let time2 = now();
	const sample2 = fn(file);
	time2 = now() - time2;
	console.log({
		library,
		sample1,
		sample2,
		time1,
		time2
	});
}

function collisions(fn, name) {
	const set = new Set();
	const dist = [];
	let size = 0;
	for(let i = 0; i < array.length; i++) {
		const hash = fn(array[i]);
		let binary = hex2bin(hash);
		if(binary.length !== size) {
			if(binary.length > size) {
				dist.unshift(...new Array(binary.length - size).fill(0));
				size = binary.length;
			}
			binary = binary.padStart(size, "0");
		}
		set.add(hash);
		for(let n = 0; n < binary.length; n++) {
			if(binary[n] === "1") {
				dist[n]++;
			}
		}
	}
	console.log({
		name,
		size,
		collisions: array.length - set.size,
		distribution: distribution(dist)
	});
}

function distribution(dist) {
	let n = 0;
	for(let i = 0; i < dist.length; i++) {
		n += Math.abs((array.length / 2) - dist[i]);
	}
	return ((array.length / 2) - (n / dist.length)) * 100 / (array.length / 2);
}

function hex2bin(hex) {
	let str = "";
	let block = "";
	for(let i = 0; i < hex.length; i++) {
		block += hex[i];
		if(block.length === 8 || i === hex.length - 1) {
			str += parseInt(block, 16).toString(2);
			block = "";
		}
	}
	return str;
}

module.exports = {
	run,
	collisions
};
