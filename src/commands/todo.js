'use strict';
const {name: cmdName} = require('../../package');

const create = {
	command: 'todo <required> [options]',
	desc: 'TODO',
	builder(yargs) {
		return yargs
			.option('t', {
				alias: 'TODO',
				describe: 'TODO',
				string: true,
				default: ''
			})
			.example(
				`${cmdName} todo -t`,
				'TODO'
			);
	},
	handler(argv) {
		console.log('TODO', argv);
	}
};

module.exports = create;
