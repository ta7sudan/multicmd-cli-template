'use strict';
// for debug
function sleep(time) {
	return new Promise(rs => setTimeout(rs, time));
}

module.exports = sleep;