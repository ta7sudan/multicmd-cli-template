'use strict';
const figlet = require('figlet');
const path = require('path');
const os = require('os');
const {bin} = require('../../../package');
const log = require('./log');

const TODO_DIR = path.resolve(os.homedir(), '.todo');

exports.isAsyncFunction = fn => fn[Symbol.toStringTag] === 'AsyncFunction';

exports.to = p => p.then(data => [null, data]).catch(err => [err, undefined]);

exports.sleep = time => new Promise(rs => setTimeout(rs, time));

exports.getCmds = () => Object.keys(bin);

exports.getFiglet = cmd =>
	new Promise((rs, rj) => {
		figlet(
			cmd,
			{
				horizontalLayout: 'fitted'
			},
			(err, data) => {
				if (err) {
					rj(err);
				} else {
					rs(data);
				}
			}
		);
	});

exports.log = log;

exports.TODO_DIR = TODO_DIR;

