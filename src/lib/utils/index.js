'use strict';
const path = require('path');
const os = require('os');
const TODO_DIR = path.resolve(os.homedir(), '.todo');

exports.isAsyncFunction = fn => fn[Symbol.toStringTag] === 'AsyncFunction';

exports.to = p => p.then(data => [null, data]).catch(err => [err, undefined]);

exports.sleep = time => new Promise(rs => setTimeout(rs, time));

exports.TODO_DIR = TODO_DIR;
