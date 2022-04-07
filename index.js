#!/usr/bin/env node

const sym = require('log-symbols');
const cli = require('./utils/cli.js');
const init = require('./utils/init.js');
const print = require('./utils/print.js');
const cities = require('./utils/cities.js');
const theEnd = require('./utils/theEnd.js');
const fs = require('fs');

// CLI.
const [input] = cli.input;
const all = cli.flags.all;
const next = cli.flags.next;
const dft = cli.flags.default;
const notFound = `${sym.error} ${input}: not found!`;

// Let's do it.
(async () => {
	init();
	input === 'help' && (await cli.showHelp(0));

	var city = input ? input.toLowerCase().replace(/\s+/g, '-') : null; // : `beijing`;
	// if null read default city name
	if (!city) {
		city = await require('./data/defaultCity.json').name;
	}
	// set default city
	if (dft) {
		var defaultCity = {name: city};
		// convert JSON object to a string
		const data = JSON.stringify(defaultCity);

		// write file to disk
		fs.writeFile('./data/defaultCity.json', data, 'utf8', err => {
			if (err) {
				console.log(`Error writing file: ${err}`);
			} else {
				console.log(`Default city set successfully!`);
			}
		});
	}

	const noData = cities.indexOf(city) === -1;
	// console.log(noData, city);
	noData && console.log(notFound);
	!noData && print({all, next, city});

	theEnd({city, noData});
})();
