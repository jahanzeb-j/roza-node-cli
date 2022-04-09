const sym = require('log-symbols');
const Table = require('cli-table3');
const green = require('./green');
const {DateTime} = require('luxon');
const wishEid = `${sym.success} Eid Mubarak.\nRamadan is already over. Hope you had a fun time on Eid.\n`;

module.exports = ({all, next, city}) => {
	// Import the right city.
	const data = require(`../data/${city}.json`);

	// Find the current roza.
	const firstRoza = DateTime.fromISO('2022-04-03');
	const today = DateTime.local();
	let rozaNumber = Math.floor(today.diff(firstRoza, 'days').as('days'));
	// if next day
	rozaNumber = next ? rozaNumber + 1 : rozaNumber;
	// Still ramadan?
	if (rozaNumber > 30) {
		console.log(wishEid);
	} else {
		const roza = rozaNumber > 0 ? data[rozaNumber] : data[0];

		// Print table.
		const table = new Table({
			head: [green('Roza'), green('Sehar'), green('Iftar'), green('Date')]
		});

		// All or one.
		all &&
			data.map(day => {
				if (isToday(day.date)) {
					table.push([
						green(day.no),
						green(day.sehar),
						green(day.iftar),
						green(day.date)
					]);
					return;
				}
				table.push([day.no, day.sehar, day.iftar, day.date]);
			});
		!all && table.push([roza.no, roza.sehar, roza.iftar, roza.date]);

		// Do it.
		const cityNiceName = `${city.charAt(0).toUpperCase()}${city
			.slice(1)
			.replace(/-/g, ' ')}`;
		console.log(`${sym.success} City: ${cityNiceName}`);
		console.log(table.toString());
	}
};

function isToday(dt) {
	const date = DateTime.fromISO(dt);
	const today = DateTime.local();
	return (
		date.year === today.year &&
		date.month === today.month &&
		date.day === today.day
	);
}
