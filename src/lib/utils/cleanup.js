// TODO
'use strict';
const fs = require('fs-extra');


const cleaner = {
	todo: '',
	set(key, value) {
		if (Object.prototype.hasOwnProperty.call(this, key)) {
			this[key] = value;
		}
	},
	async cleanup() {
		// TODO
		await fs.remove();
	}
};

module.exports = cleaner;
