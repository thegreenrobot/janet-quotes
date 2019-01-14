#!/usr/bin/env node
'use strict';
const meow = require('meow');
const quotes = require('./');

const cli = meow([
	'Examples',
	'  $ quotes',
	'  "How I wish you could make a living parallel parking. (George - The Parking Spot)"',
	''
]);

console.log(cli.flags.all ? quotes : quotes());
