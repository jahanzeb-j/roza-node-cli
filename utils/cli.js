const meow = require('meow');
const chalk = require('chalk');
const green = chalk.green;
const yellow = chalk.yellow;
const cyan = chalk.cyan;
const dim = chalk.dim;

module.exports = meow(
	`
	Usage
	  ${green(`roza`)} ${cyan(`<command>`)} ${yellow(`[--option]`)}

	Commands
	  ${cyan(`cityName`)}    Get data for a city
	  ${cyan(`help`)}        Show help

	Options
	  ${yellow(`--all`)}, ${yellow(`-a`)}   Show all days
	  ${yellow(`--next`)}, ${yellow(`-n`)}   Show next day

	Examples
	${green(`roza`)} ${cyan(`lahore`)}
	${green(`roza`)} ${cyan(`karachi`)} ${yellow(`--all`)}
	${green(`roza`)} ${cyan(`beijing`)} ${yellow(`-a`)}
	${green(`roza`)} ${cyan(`help`)}
`,
	{
		booleanDefault: undefined,
		hardRejection: false,
		inferType: false,
		flags: {
			all: {
				type: 'boolean',
				default: false,
				alias: 'a'
			},
			next: {
				type: 'boolean',
				default: false,
				alias: 'n'
			}
		}
	}
);
