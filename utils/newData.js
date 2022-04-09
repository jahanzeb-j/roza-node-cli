const fs = require('fs');
const path = require('path');
const axios = require('axios');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const cheerio = require('cheerio');
const formatDate = require('./formatDate');
const ora = require('ora');
const spinner = ora({text: ''});
const {green: g, red: r, yellow: y, dim: d} = require('chalk');
const alert = require('cli-alerts');
// console.log('hhh');

let getCity = async ({city}) => {
	const endpoint = `https://api.pray.zone/v2/times/dates.json?start=2022-04-03&end=2022-05-02&key=MagicKey&city=${city}&school=1&timeformat=1`;

	const [err, response] = await to(axios.get(endpoint));
	// handleError(`City ${city} not found, typo?! Try again.`, err, false);

	const ramazan = response.data.results.datetime;

	const data = [];

	ramazan.map((roza, count) => {
		const no = count + 1;
		const sehar = roza.times['Fajr'];
		const iftar = roza.times['Maghrib'];
		const date = roza.date['gregorian'];
		data.push({no, sehar, iftar, date});
	});

	return data;
};

(async () => {
	let baseDir = path.join(__dirname, '../data/');
	const cities = require('./cities.js');

	// console.log(cities);
	for (const city of cities) {
		let cityName = city; //'beijing';
		spinner.start(`${y(`FETCHING`)} city ${g(cityName)}…`);
		try {
			let data = await getCity({city: cityName.toLowerCase()});

			// spinner.succeed(`${g(cityName)}: Data saved`);

			// console.log(JSON.stringify(data));

			fs.writeFile(
				`${baseDir}/${cityName}.json`,
				JSON.stringify(data),
				'utf8',
				err => {
					if (err) throw err;
					spinner.succeed(`${g(cityName)}: Data saved`);
				}
			);
		} catch (error) {}
	}
	alert({
		type: `success`,
		msg: `Generated data for ${cities.length} cities!`
	});
})();
