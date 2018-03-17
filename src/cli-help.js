#!/usr/bin/env node

// A really cool CLI help func() I should work on later
// Reimplement using singleton to save configs like name(s) and command(s)

module.exports = ({ name, command, description, example, options }) => {
	if (!command) {
		// Top-Level Help
		console.log(
			'usage: ' +
				name +
				' ' +
				options
					.map(
						option =>
							option.length > 1 ? '[--' + option + ']' : '[-' + option + ']'
					)
					.join(' ') +
				'\n' +
				'<command> [<args>]'
		)
	} else {
		console.log(
			(name + '-' + command).toUpperCase() +
				'\n\n' +
				'DESCRIPTION \n\t' +
				description +
				(typeof options === 'object'
					? 'OPTIONS \n\t' +
					  options.map(
							option => (option.length > 1 ? '--' + option : '-' + option)
					  )
					: '')
		)
	}
}
