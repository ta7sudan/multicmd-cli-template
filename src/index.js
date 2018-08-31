'use strict';
require('./lib/utils/safe-promise');

const {name: cmdName, version} = require('../package');
const yargs = require('yargs');
const yargonaut = require('yargonaut');
const chalk = require('chalk');
const getFiglet = require('./lib/utils/figlet');
const handleError = require('./lib/utils/error-handler');

/**
 * DEBUG
 */
const sleep = require('./lib/utils/sleep');
global.sleep = sleep;

(async () => {
	const logo = await getFiglet();
	yargs.logo = logo;
	yargonaut
		.helpStyle('blue.underline')
		.style('red.bold', 'required')
		.style('magenta', ['boolean', 'string', 'number']);

	yargs
		.scriptName(cmdName)
		.commandDir('./commands')
		.recommendCommands()
		.completion('completion', 'get completion script')
		.alias('h', 'help')
		.example(`${cmdName} todo`, 'todo')
		.usage(chalk.yellowBright(logo))
		.version(version)
		.help()
		.fail((msg, err, yargs) => {
			if (err) {
				handleError(err);
			} else {
				yargs.showHelp();
			}
		});

	const argv = yargs.argv;

	if (!argv._.length) {
		yargs.showHelp();
	}
})();
