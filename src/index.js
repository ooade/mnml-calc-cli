#!/usr/bin/env node

const argv = require('minimist')(process.argv.slice(2))

const command = argv._.splice(0, 1)[0]

const v = argv._

switch (command) {
	case 'add':
		console.log(v[0] + v[1])
		break
	case 'sub':
		console.log(v[0] - v[1])
		break
	case 'mul':
		console.log(v[0] * v[1])
		break
	case 'div':
		console.log(v[0] / v[1])
		break
	case 'help':
		break
	default:
		console.error("Sorry didn't recognize that command")
}
