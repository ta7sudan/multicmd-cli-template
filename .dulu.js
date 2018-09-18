'use strict';

module.exports = function(projectName) {
	return {
		prompts: [
			{
				name: 'project',
				type: 'input',
				message: 'Project Name',
				default: projectName
			},
			{
				name: 'author',
				type: 'input',
				message: 'Author',
				validate(input) {
					return !!input;
				}
			},
			{
				name: 'desc',
				type: 'input',
				message: 'Project description',
				default: 'A multicmd cli project'
			},
			{
				name: 'keywords',
				type: 'input',
				message: 'Keywords',
				default: 'cli'
			},
			{
				name: 'cmd',
				type: 'input',
				message: 'Command name',
				default: projectName
			},
			{
				name: 'needNpmrc',
				type: 'confirm',
				message: 'need .npmrc?',
				default: false
			},
			{
				name: 'dependencies',
				type: 'checkbox',
				message: 'Choose dependencies',
				choices: [
					{
						name: 'Inquirer.js',
						value: '"inquirer": "^6.2.0"'
					},
					{
						name: 'fs-extra',
						value: '"fs-extra": "^7.0.0"'
					},
					{
						name: 'shelljs',
						value: '"shelljs": "^0.8.2"'
					},
					{
						name: 'request',
						value: '"request": "^2.88.0"'
					},
					{
						name: 'got',
						value: '"got": "^9.2.0"'
					},
					{
						name: 'chokidar',
						value: '"chokidar": "^2.0.4"'
					},
					{
						name: 'fast-glob',
						value: '"fast-glob": "^2.2.2"'
					},
					{
						name: 'execa',
						value: '"execa": "^1.0.0"'
					},
					{
						name: 'cross-spawn',
						value: '"cross-spawn": "^6.0.5"'
					}
				]
			}
		],
		complete(answers) {
			const {needNpmrc} = answers,
				excludes = ['.dulu.js'],
				templates = ['_package.json', 'man/doc.1'],
				transform = {
					'_package.json': 'package.json'
				};
			answers.keywords = answers.keywords ? answers.keywords.split(/\s+/) : [];
			
			if (!needNpmrc) {
				excludes.push('.npmrc');
			}

			return {
				excludes,
				templates,
				transform
			};
		}
	};
};
