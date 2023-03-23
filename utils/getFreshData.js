const fs = require('fs');
const path = require('path');
const axios = require('axios');
const to = require('await-to-js').default;
const handleError = require('cli-handle-error');
const ora = require('ora');
const spinner = ora({ text: '' });
const { green: g, red: r, yellow: y, dim: d } = require('chalk');
const alert = require('cli-alerts');

let getCity = async ({ city }) => {
	// const endpoint = `https://api.pray.zone/v2/times/dates.json?start=2022-04-03&end=2022-05-02&key=MagicKey&city=${city}&school=1&timeformat=1`;
	let endpoint = `http://api.aladhan.com/v1/calendarByCity/2023/3?city=${city}&country=&method=8`;

	let [err, response] = await to(axios.get(endpoint));
	handleError(`City ${city} not found, typo?! Try again.`, err, false, false);

	let ramazan = response.data.data;

	// console.warn(ramazan);

	const data = [];
	let no = 0;

	ramazan.map((roza, count) => {

		if (count > 21) {
			no = no + 1;
			const sehar = roza.timings['Fajr'];
			const iftar = roza.timings['Maghrib'];
			const date = roza.date['gregorian'].date;

			data.push({ no, sehar, iftar, date });
		}
	});

	endpoint = `http://api.aladhan.com/v1/calendarByCity/2023/4?city=${city}&country=&method=2`;

	[err, response] = await to(axios.get(endpoint));
	handleError(`City ${city} not found, typo?! Try again.`, err, false, false);

	ramazan = response.data.data;

	// console.warn(ramazan);

	// const data = [];

	ramazan.map((roza, count) => {
		// const no = count + 1;
		if (count < 21) {
			no = no + 1;
			const sehar = roza.timings['Fajr'];
			const iftar = roza.timings['Maghrib'];
			const date = roza.date['gregorian'].date;

			data.push({ no, sehar, iftar, date });
		}
	});

	return data;
};

(async () => {
	let baseDir = path.join(__dirname, '../data/');
	const cities = require('./cities.js');

	let cityList = cities;
	// let data = await getCity({ city: 'tianjin' });
	// console.log(data);
	while (cityList.length > 0) {
		// console.log(cities);
		for (const city of cityList) {
			let cityName = city; //'beijing';
			spinner.start(`${y(`FETCHING`)} city ${g(cityName)}…`);
			try {
				let data = await getCity({ city: cityName.toLowerCase() });

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

				cityList = cityList.filter(c => c!=city);
				console.log(cityList);
			} catch (error) { }
		}
	}
	alert({
		type: `success`,
		msg: `Generated data for ${cities.length} cities!`
	});
})();
