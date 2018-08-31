'use strict';
const {name: cmdName} = require('../../package');

const todo = {
	command: 'todo <required> [options]',
	desc: 'todo',
	builder(yargs) {
		return yargs
			.option('t', {
				alias: 'todo',
				describe: 'todo',
				boolean: true,
				default: false
			})
			.example(`${cmdName} todo`, 'todo');
	},
	async handler(argv) {
		console.log('todo');
	}
};

module.exports = todo;
